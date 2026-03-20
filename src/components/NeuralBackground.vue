<template>
  <div class="experience-container">
    <div class="vignette"></div>
    
    <div ref="container3d" class="canvas-3d"></div>

    <div 
      ref="cursor" 
      class="custom-cursor"
      :style="{ transform: `translate3d(${mouse.x}px, ${mouse.y}px, 0)` }"
    >
      <div class="cursor-inner"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, reactive } from 'vue'
import * as THREE from 'three'

const container3d = ref(null)
const cursor = ref(null)
const mouse = reactive({ x: 0, y: 0, targetX: 0, targetY: 0 })

// Three.js variables
let scene, camera, renderer, particles, starGeo
let animationId

// Web Audio API para efectos de sonido sutiles
let audioCtx = null
let oscillator = null

const initAudio = () => {
  if (audioCtx) return
  audioCtx = new (window.AudioContext || window.webkitAudioContext)()
}



const initThree = () => {
  scene = new THREE.Scene()
  
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000)
  camera.position.z = 1
  camera.rotation.x = Math.PI / 2

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  container3d.value.appendChild(renderer.domElement)

  // Crear Geometría de Partículas (Estilo polvo de oro)
  starGeo = new THREE.BufferGeometry()
  const positions = []
  const velocities = []
  
  for (let i = 0; i < 6000; i++) {
    positions.push(
      Math.random() * 600 - 300,
      Math.random() * 600 - 300,
      Math.random() * 600 - 300
    )
    velocities.push(0)
  }
  
  starGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  
  let sprite = new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/sprites/disc.png')
  let starMaterial = new THREE.PointsMaterial({
    color: 0xf5d742, // Tu color --primary
    size: 0.9,
    map: sprite,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  })

  particles = new THREE.Points(starGeo, starMaterial)
  scene.add(particles)

  animate()
}

const animate = () => {
  animationId = requestAnimationFrame(animate)

  particles.rotation.y += 0.001
  
  // Parallax 
  const targetRotationX = (mouse.y / window.innerHeight - 0.5) * 0.2
  const targetRotationY = (mouse.x / window.innerWidth - 0.5) * 0.2
  
  scene.rotation.x += (targetRotationX - scene.rotation.x) * 0.05
  scene.rotation.y += (targetRotationY - scene.rotation.y) * 0.05

  const positions = starGeo.attributes.position.array
  for (let i = 1; i < positions.length; i += 3) {
    positions[i] -= 0.2 
    if (positions[i] < -200) positions[i] = 200
  }
  starGeo.attributes.position.needsUpdate = true

  renderer.render(scene, camera)
}

const handleMouseMove = (e) => {
  mouse.x = e.clientX
  mouse.y = e.clientY
  
  
}

const handleResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

onMounted(() => {
  initThree()
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('mousedown', playInteractionSound)
  if (renderer) renderer.dispose()
})
</script>

<style scoped>
.experience-container {
  position: fixed;
  inset: 0;
  background: radial-gradient(circle at center, #1a1a1e 0%, #0a0a0c 100%);
  z-index: -1;
  overflow: hidden;
}

.canvas-3d {
  position: absolute;
  inset: 0;
  filter: blur(0.5px); 
}

.vignette {
  position: absolute;
  inset: 0;
  z-index: 2;
  background: radial-gradient(circle, transparent 20%, rgba(0,0,0,0.4) 100%);
  pointer-events: none;
}

.custom-cursor {
  position: fixed;
  top: -20px;
  left: -20px;
  width: 40px;
  height: 40px;
  border: 1px solid var(--gold);
  border-radius: 50%;
  pointer-events: none;
  z-index: 999999999;
  transition: transform 0.1s ease-out, width 0.3s, height 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px);
}

.cursor-inner {
  width: 4px;
  height: 4px;
  background: var(--gold-bright);
  border-radius: 50%;
  box-shadow: 0 0 15px var(--gold-bright);
}

/* Efecto al hacer click */
.experience-container:active .custom-cursor {
  transform: scale(0.8) !important;
  background: rgba(212, 175, 55, 0.1);
}

@media (max-width: 768px) {
  .custom-cursor {
    display: none;
  }
}
</style>