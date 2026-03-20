<template>
  <transition name="loader-fade">
    <div v-if="visible" class="planet-loader">
      <div ref="canvasWrap" class="planet-canvas"></div>

      <div class="loader-overlay"></div>
      <div class="scanlines"></div>
      <div class="noise"></div>

      <div class="loader-ui">
        <div class="brand-wrap">
          <div class="brand-line"></div>
          <h1 class="brand">DVRKLEX</h1>
          <div class="brand-line"></div>
        </div>

        <p class="subtitle">Creative Developer · Building immersive experiences</p>

        <div class="progress-shell">
          <div class="progress-track">
            <div class="progress-fill" :style="{ width: `${displayProgress}%` }"></div>
            <div class="progress-glow" :style="{ width: `${displayProgress}%` }"></div>
          </div>
          <div class="progress-meta">
            <span>Loading interface</span>
            <span>{{ Math.round(displayProgress) }}%</span>
          </div>
        </div>

        <p class="loading-text">{{ loadingText }}</p>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { onMounted, onBeforeUnmount, reactive, ref, computed, watch } from 'vue'
import * as THREE from 'three'

const props = defineProps({
  duration: {
    type: Number,
    default: 2600
  },
  autoStart: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['complete'])

const canvasWrap = ref(null)
const visible = ref(true)
const displayProgress = ref(0)

const pointer = reactive({
  x: window.innerWidth * 0.5,
  y: window.innerHeight * 0.5,
  tx: window.innerWidth * 0.5,
  ty: window.innerHeight * 0.5,
  nx: 0,
  ny: 0
})

let scene
let camera
let renderer
let clock
let animationId = 0
let startTime = 0
let completeTimeout = 0

let planetGroup
let planetMesh
let atmosphereMesh
let ringMesh
let particleField
let particleGeometry
let glowLight
let rimLight
let ambientLight

const loadingSteps = [
  'Initializing visual system',
  'Warming up shaders',
  'Synchronizing experience',
  'Entering portfolio'
]

const loadingText = computed(() => {
  if (displayProgress.value < 28) return loadingSteps[0]
  if (displayProgress.value < 56) return loadingSteps[1]
  if (displayProgress.value < 82) return loadingSteps[2]
  return loadingSteps[3]
})

const lerp = (a, b, t) => a + (b - a) * t
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

const buildPlanetTexture = () => {
  const size = 1024
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')

  const gradient = ctx.createRadialGradient(size * 0.35, size * 0.3, size * 0.08, size * 0.5, size * 0.5, size * 0.55)
  gradient.addColorStop(0, '#fff2a8')
  gradient.addColorStop(0.2, '#f8d66d')
  gradient.addColorStop(0.45, '#f5d742')
  gradient.addColorStop(0.72, '#d4af37')
  gradient.addColorStop(1, '#533707')

  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, size, size)

  for (let i = 0; i < 90; i++) {
    const x = Math.random() * size
    const y = Math.random() * size
    const radius = 30 + Math.random() * 140
    const alpha = 0.03 + Math.random() * 0.06

    const blob = ctx.createRadialGradient(x, y, 0, x, y, radius)
    blob.addColorStop(0, `rgba(255,223,0,${alpha})`)
    blob.addColorStop(0.45, `rgba(231,154,11,${alpha * 0.9})`)
    blob.addColorStop(1, 'rgba(0,0,0,0)')

    ctx.fillStyle = blob
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fill()
  }

  for (let i = 0; i < 22; i++) {
    ctx.save()
    ctx.translate(size * 0.5, size * 0.5)
    ctx.rotate((Math.PI * 2 * i) / 22 + Math.random() * 0.15)
    ctx.fillStyle = `rgba(255, 250, 210, ${0.022 + Math.random() * 0.03})`
    ctx.fillRect(-size * 0.5, -18 + Math.random() * 36, size, 18 + Math.random() * 44)
    ctx.restore()
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
}

const initThree = () => {
  scene = new THREE.Scene()
  clock = new THREE.Clock()

  camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 100)
  camera.position.set(0, 0, 8.5)

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8))
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.1
  canvasWrap.value?.appendChild(renderer.domElement)

  ambientLight = new THREE.AmbientLight('#fff1cc', 0.8)
  scene.add(ambientLight)

  glowLight = new THREE.PointLight('#f5d742', 20, 40, 1.8)
  glowLight.position.set(2.4, 1.2, 6)
  scene.add(glowLight)

  rimLight = new THREE.PointLight('#ffffff', 7, 50, 2)
  rimLight.position.set(-7, -2, 8)
  scene.add(rimLight)

  planetGroup = new THREE.Group()

  const sphereGeometry = new THREE.SphereGeometry(1.8, 128, 128)
  const texture = buildPlanetTexture()

  const sphereMaterial = new THREE.MeshPhysicalMaterial({
    map: texture,
    roughness: 0.5,
    metalness: 0.25,
    clearcoat: 0.35,
    clearcoatRoughness: 0.2,
    emissive: new THREE.Color('#e79a0b'),
    emissiveIntensity: 0.15,
    sheen: 0.4,
    sheenColor: new THREE.Color('#fff2a8')
  })

  planetMesh = new THREE.Mesh(sphereGeometry, sphereMaterial)
  planetGroup.add(planetMesh)

  const atmosphereGeometry = new THREE.SphereGeometry(2.08, 64, 64)
  const atmosphereMaterial = new THREE.MeshBasicMaterial({
    color: '#ffdf00',
    transparent: true,
    opacity: 0.08,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide
  })
  atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial)
  planetGroup.add(atmosphereMesh)

  const ringGeometry = new THREE.TorusGeometry(2.65, 0.07, 20, 220)
  const ringMaterial = new THREE.MeshBasicMaterial({
    color: '#f8d66d',
    transparent: true,
    opacity: 0.78,
    blending: THREE.AdditiveBlending
  })
  ringMesh = new THREE.Mesh(ringGeometry, ringMaterial)
  ringMesh.rotation.x = 1.15
  ringMesh.rotation.y = 0.38
  planetGroup.add(ringMesh)

  const smallRingGeometry = new THREE.TorusGeometry(3.12, 0.016, 10, 220)
  const smallRingMaterial = new THREE.MeshBasicMaterial({
    color: '#ffffff',
    transparent: true,
    opacity: 0.22,
    blending: THREE.AdditiveBlending
  })
  const smallRing = new THREE.Mesh(smallRingGeometry, smallRingMaterial)
  smallRing.rotation.x = 1.15
  smallRing.rotation.y = 0.38
  planetGroup.add(smallRing)

  scene.add(planetGroup)

  const particleCount = 1800
  particleGeometry = new THREE.BufferGeometry()
  const positions = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3
    positions[i3] = (Math.random() - 0.5) * 28
    positions[i3 + 1] = (Math.random() - 0.5) * 18
    positions[i3 + 2] = (Math.random() - 0.5) * 18
  }

  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const particleMaterial = new THREE.PointsMaterial({
    color: '#f5d742',
    size: 0.026,
    transparent: true,
    opacity: 0.85,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  })

  particleField = new THREE.Points(particleGeometry, particleMaterial)
  scene.add(particleField)
}

const updateParticles = (time) => {
  const positions = particleGeometry.attributes.position.array

  for (let i = 0; i < positions.length; i += 3) {
    positions[i + 1] += Math.sin(time * 0.4 + i) * 0.0012
    positions[i] += Math.cos(time * 0.25 + i) * 0.0007

    if (positions[i + 1] > 9) positions[i + 1] = -9
  }

  particleGeometry.attributes.position.needsUpdate = true
}

const animate = () => {
  animationId = requestAnimationFrame(animate)

  const elapsed = clock.getElapsedTime()
  const elapsedMs = performance.now() - startTime
  const progress = Math.min(elapsedMs / props.duration, 1)
  displayProgress.value = easeOutCubic(progress) * 100

  pointer.tx = lerp(pointer.tx, pointer.x, 0.06)
  pointer.ty = lerp(pointer.ty, pointer.y, 0.06)
  pointer.nx = (pointer.tx / window.innerWidth) * 2 - 1
  pointer.ny = -((pointer.ty / window.innerHeight) * 2 - 1)

  if (planetGroup) {
    planetGroup.rotation.y += 0.0032
    planetGroup.rotation.x = lerp(planetGroup.rotation.x, pointer.ny * 0.18, 0.04)
    planetGroup.rotation.z = lerp(planetGroup.rotation.z, -pointer.nx * 0.12, 0.04)
    planetGroup.position.x = lerp(planetGroup.position.x, pointer.nx * 0.45, 0.04)
    planetGroup.position.y = lerp(planetGroup.position.y, pointer.ny * 0.28, 0.04)
    planetGroup.scale.setScalar(1 + Math.sin(elapsed * 1.8) * 0.015)
  }

  if (planetMesh) {
    planetMesh.rotation.y += 0.0016
  }

  if (atmosphereMesh) {
    atmosphereMesh.scale.setScalar(1.02 + Math.sin(elapsed * 1.5) * 0.015)
    atmosphereMesh.material.opacity = 0.07 + Math.sin(elapsed * 2.4) * 0.015
  }

  if (ringMesh) {
    ringMesh.rotation.z += 0.0045
  }

  if (particleField) {
    particleField.rotation.y += 0.0008
    particleField.rotation.x = lerp(particleField.rotation.x, pointer.ny * 0.05, 0.03)
  }

  glowLight.intensity = 18 + Math.sin(elapsed * 2.2) * 3
  glowLight.position.x = 2.2 + Math.sin(elapsed * 0.7) * 0.6
  glowLight.position.y = 1 + Math.cos(elapsed * 0.9) * 0.5

  camera.position.x = lerp(camera.position.x, pointer.nx * 0.18, 0.03)
  camera.position.y = lerp(camera.position.y, pointer.ny * 0.12, 0.03)
  camera.lookAt(0, 0, 0)

  updateParticles(elapsed)
  renderer.render(scene, camera)

  if (progress >= 1 && !completeTimeout) {
    completeTimeout = window.setTimeout(() => {
      visible.value = false
      window.setTimeout(() => emit('complete'), 700)
    }, 280)
  }
}

const handleResize = () => {
  if (!camera || !renderer) return
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8))
}

const handlePointerMove = (event) => {
  pointer.x = event.clientX
  pointer.y = event.clientY
}

const destroyThree = () => {
  if (animationId) cancelAnimationFrame(animationId)
  if (completeTimeout) window.clearTimeout(completeTimeout)

  if (particleGeometry) particleGeometry.dispose()

  const disposeMaterial = (material) => {
    if (!material) return
    if (Array.isArray(material)) {
      material.forEach((item) => item?.dispose?.())
      return
    }
    material.dispose?.()
  }

  ;[planetMesh, atmosphereMesh, ringMesh].forEach((mesh) => {
    mesh?.geometry?.dispose?.()
    disposeMaterial(mesh?.material)
  })

  planetGroup?.children?.forEach((child) => {
    child?.geometry?.dispose?.()
    disposeMaterial(child?.material)
  })

  if (renderer) {
    renderer.dispose()
    renderer.forceContextLoss?.()
    if (renderer.domElement?.parentNode) {
      renderer.domElement.parentNode.removeChild(renderer.domElement)
    }
  }
}

const start = () => {
  startTime = performance.now()
  initThree()
  animate()
}

watch(
  () => props.autoStart,
  (value) => {
    if (value && visible.value && !renderer) start()
  },
  { immediate: true }
)

onMounted(() => {
  window.addEventListener('resize', handleResize)
  window.addEventListener('pointermove', handlePointerMove, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('pointermove', handlePointerMove)
  destroyThree()
})
</script>

<style scoped>
.planet-loader {
  position: fixed;
  inset: 0;
  z-index: 99999;
  overflow: hidden;
  background:
    radial-gradient(circle at center, rgba(245, 215, 66, 0.08) 0%, rgba(16, 16, 20, 0.18) 32%, transparent 60%),
    linear-gradient(180deg, #0d0d10 0%, #09090b 100%);
}

.planet-canvas,
.loader-overlay,
.scanlines,
.noise {
  position: absolute;
  inset: 0;
}

.planet-canvas {
  z-index: 1;
}

.loader-overlay {
  z-index: 2;
  pointer-events: none;
  background:
    radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.08) 52%, rgba(0, 0, 0, 0.65) 100%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.18), transparent 24%, transparent 76%, rgba(0, 0, 0, 0.22));
}

.scanlines {
  z-index: 3;
  pointer-events: none;
  opacity: 0.06;
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.22) 1px, transparent 1px);
  background-size: 100% 4px;
  mix-blend-mode: soft-light;
}

.noise {
  z-index: 3;
  pointer-events: none;
  opacity: 0.045;
  background-image:
    radial-gradient(rgba(255,255,255,0.75) 0.5px, transparent 0.5px),
    radial-gradient(rgba(245,215,66,0.45) 0.5px, transparent 0.5px);
  background-size: 15px 15px, 23px 23px;
  background-position: 0 0, 8px 10px;
  animation: driftNoise 14s linear infinite;
}

.loader-ui {
  position: absolute;
  inset: 0;
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  text-align: center;
  pointer-events: none;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.brand-line {
  width: 72px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(245, 215, 66, 0.65), transparent);
}

.brand {
  margin: 0;
  font-size: clamp(2.5rem, 7vw, 6rem);
  letter-spacing: 0.34em;
  font-weight: 800;
  color: #fff6c7;
  text-shadow:
    0 0 16px rgba(245, 215, 66, 0.12),
    0 0 38px rgba(231, 154, 11, 0.08);
}

.subtitle {
  margin: 0;
  color: rgba(255, 245, 202, 0.7);
  font-size: clamp(0.8rem, 1.5vw, 0.98rem);
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.progress-shell {
  width: min(480px, 82vw);
  margin-top: 1.15rem;
}

.progress-track {
  position: relative;
  height: 7px;
  border-radius: 999px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: inset 0 0 0 1px rgba(255, 223, 0, 0.08);
}

.progress-fill,
.progress-glow {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-radius: inherit;
}

.progress-fill {
  background: linear-gradient(90deg, #d4af37, #f5d742, #fff1a8);
}

.progress-glow {
  filter: blur(12px);
  opacity: 0.65;
  background: linear-gradient(90deg, rgba(212,175,55,0.8), rgba(255,223,0,0.95), rgba(255,241,168,0.9));
}

.progress-meta {
  margin-top: 0.7rem;
  display: flex;
  justify-content: space-between;
  color: rgba(255, 247, 214, 0.72);
  font-size: 0.82rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.loading-text {
  min-height: 1.25rem;
  margin: 0.4rem 0 0;
  color: rgba(255, 243, 201, 0.8);
  font-size: 0.92rem;
  letter-spacing: 0.08em;
}

.loader-fade-enter-active,
.loader-fade-leave-active {
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.loader-fade-enter-from,
.loader-fade-leave-to {
  opacity: 0;
}

.loader-fade-leave-to .loader-ui {
  transform: translateY(-10px);
  opacity: 0;
}

@keyframes driftNoise {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-18px, 14px, 0);
  }
}

@media (max-width: 768px) {
  .brand-wrap {
    gap: 0.7rem;
  }

  .brand-line {
    width: 42px;
  }

  .subtitle {
    max-width: 24ch;
    line-height: 1.5;
  }

  .progress-shell {
    width: min(360px, 86vw);
  }
}

@media (prefers-reduced-motion: reduce) {
  .noise {
    animation: none;
  }

  .loader-fade-enter-active,
  .loader-fade-leave-active {
    transition: opacity 0.3s ease;
  }
}
</style>
