<template>
  <canvas ref="canvas" class="neural-canvas"></canvas>
  <div ref="cursor" class="cursor"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const canvas = ref(null)
const cursor = ref(null)
let ctx
let animationId

const mouse = { x: innerWidth / 2, y: innerHeight / 2 }

const nodes = []
const trailParticles = []
const NODE_COUNT = 70
const MAX_DIST = 140

class Node {
  constructor(w, h) {
    this.x = Math.random() * w
    this.y = Math.random() * h
    this.vx = (Math.random() - 0.5) * 0.35
    this.vy = (Math.random() - 0.5) * 0.35
    this.size = Math.random() * 2 + 1.2
  }

  update(w, h) {
    const dx = mouse.x - this.x
    const dy = mouse.y - this.y
    const dist = Math.hypot(dx, dy)

    if (dist < 200) {
      this.vx += dx / dist * 0.015
      this.vy += dy / dist * 0.015
    }

    this.x += this.vx
    this.y += this.vy

    this.vx *= 0.985
    this.vy *= 0.985

    if (this.x < 0 || this.x > w) this.vx *= -1
    if (this.y < 0 || this.y > h) this.vy *= -1
  }

  draw() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = '#9fb8ff'
    ctx.shadowColor = '#9fb8ff'
    ctx.shadowBlur = 8
    ctx.fill()
  }
}

function animate() {
  const w = canvas.value.width
  const h = canvas.value.height

  ctx.clearRect(0, 0, w, h)

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x
      const dy = nodes[i].y - nodes[j].y
      const dist = Math.hypot(dx, dy)

      if (dist < MAX_DIST) {
        ctx.strokeStyle = `rgba(150,180,255,${1 - dist / MAX_DIST})`
        ctx.lineWidth = 0.6
        ctx.beginPath()
        ctx.moveTo(nodes[i].x, nodes[i].y)
        ctx.lineTo(nodes[j].x, nodes[j].y)
        ctx.stroke()
      }
    }
  }

  nodes.forEach(n => {
    n.update(w, h)
    n.draw()
  })

  trailParticles.forEach((p, i) => {
    p.x += p.vx
    p.y += p.vy
    p.life -= 0.03

    ctx.beginPath()
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(160,190,255,${p.life})`
    ctx.shadowBlur = 10
    ctx.fill()

    if (p.life <= 0) trailParticles.splice(i, 1)
  })

  animationId = requestAnimationFrame(animate)
}

onMounted(() => {
  const c = canvas.value
  ctx = c.getContext('2d')

  const resize = () => {
    c.width = innerWidth
    c.height = innerHeight
  }

  resize()
  window.addEventListener('resize', resize)

  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX
    mouse.y = e.clientY

    cursor.value.style.left = mouse.x + 'px'
    cursor.value.style.top = mouse.y + 'px'

    for (let i = 0; i < 2; i++) {
      trailParticles.push({
        x: mouse.x,
        y: mouse.y,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        life: 1
      })
    }
  })

  for (let i = 0; i < NODE_COUNT; i++) {
    nodes.push(new Node(c.width, c.height))
  }

  animate()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId)
})
</script>

<style scoped>
.neural-canvas {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.cursor {
  position: fixed;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 14px #7aa2ff;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 10000;
}
</style>
