<script setup>
import { ref, onMounted, nextTick, onBeforeUnmount } from 'vue'
import Typed from 'typed.js'

const typedTarget = ref(null)
let typedInstance = null

onMounted(() => {
  nextTick(() => {
    if (!typedTarget.value) return
    typedInstance = new Typed(typedTarget.value, {
      strings: [
        'Arquitectura Backend',
        'Ingeniería Fullstack',
        'Sistemas en Tiempo Real',
        'Diseño y Desarrollo de Web',
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
      backDelay: 2000,
    })
  })
})

onBeforeUnmount(() => {
  typedInstance?.destroy?.()
})
</script>

<template>
  <section class="hero">
    <!-- Animated gradient background -->
    <div class="bg-gradient" aria-hidden="true">
      <div class="gradient-blob gradient-1"></div>
      <div class="gradient-blob gradient-2"></div>
      <div class="gradient-blob gradient-3"></div>
    </div>

    <!-- Animated grid pattern background -->
    <div class="grid-pattern" aria-hidden="true"></div>

    <!-- Main container -->
    <div class="hero-container">
      <!-- Left section: Content -->
      <div class="hero-content">
        <!-- Social rail - horizontal top version for new layout -->
        <nav class="social-icons" aria-label="Redes sociales">
          <a href="https://www.linkedin.com/in/dvrklex" target="_blank" rel="noopener" aria-label="LinkedIn">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/Dvrklex" target="_blank" rel="noopener" aria-label="GitHub">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://www.instagram.com/dvrklex" target="_blank" rel="noopener" aria-label="Instagram">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="mailto:alexis.rosales.dev@gmail.com" aria-label="Email">
            <i class="fa-solid fa-envelope"></i>
          </a>
          <a href="tel:+5493583439544" aria-label="Phone">
            <i class="fa-solid fa-phone"></i>
          </a>
        </nav>

        <div class="location" aria-label="Ubicación: Río Cuarto, Córdoba, Argentina">
          <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
          <span>Río Cuarto, Córdoba, Argentina</span>
        </div>

        <!-- Main heading -->
        <div class="hero-heading">
          <div class="greeting-wrapper">
            <span class="greeting-accent">×</span>
            <span class="greeting-text">HOLA</span>
          </div>
          <h1 class="hero-name">
            <span class="name-part">ALEXIS</span>
            <span class="name-part highlight">ROSALES</span>
          </h1>
          <div class="title-divider"></div>
        </div>

        <!-- Typed specialization -->
        <div class="specialization">
          <span class="spec-label">Especialista en</span>
          <div class="typed-wrapper">
            <span ref="typedTarget" class="typed-text"></span>
          </div>
        </div>

        <!-- Description -->
        <p class="hero-description">
          Desarrollador Full Stack que transforma ideas complejas en <strong>experiencias digitales fluidas y escalables</strong>. 
          Combinando backend robusto con interfaces modernas, creo soluciones que crecen con tu negocio.
        </p>

        <!-- Skills badges -->
        <div class="skills-badges">
          <span class="badge">Backend Python</span>
          <span class="badge">Vue 3</span>
          <span class="badge">Sistemas en Tiempo Real</span>
        </div>

        <!-- CTA buttons -->
        <div class="cta-group">
          <a href="#projects" class="btn btn-primary">Ver Proyectos</a>
           <button type="submit" class="submit-btn">
              <span>Enviar Mensaje</span>
              <i class="fas fa-paper-plane"></i>
            </button>
        </div>
      </div>

      <!-- Right section: Integrated profile photo -->
      <div class="hero-photo-section">
        <div class="integrated-photo-container">
          <div class="photo-bg-glow" aria-hidden="true"></div>
          <div class="orbit orbit-one" aria-hidden="true"></div>
          <div class="orbit orbit-two" aria-hidden="true"></div>

          <img src="/Yo.png" alt="Alexis Rosales - Desarrollador Full Stack" class="integrated-profile-photo" />

          <div class="photo-overlays" aria-hidden="true">
            <div class="code-lines">
              <span>const ideas = solutions()</span>
              <span>build({ scalable: true })</span>
              <span>deploy('production')</span>
            </div>
            <span class="network-node node-one"></span>
            <span class="network-node node-two"></span>
            <span class="network-node node-three"></span>
          </div>

          <div class="status-badge status-badge-floating">
            <span class="status-dot"></span>
            <span class="status-text">Open to work</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom scroll indicator -->
    <div class="scroll-indicator" aria-hidden="true">
      <span>Scroll para más</span>
      <div class="scroll-arrow">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800;900&display=swap');

.hero {
  --primary: #f5d742;
  --light-yellow: #f8d66d;
  --secondary: rgb(231, 154, 11);
  --gold: #d4af37;
  --gold-bright: #ffdf00;
  --accent: #d4af37;
  --purple-dark: #6b21a8;
  --purple-light: #8b5cf6;
  --bg-dark: #0a0a0c;
  --bg-secondary: #1a1a2e;
  --text-main: #f4f4f5;
  --text-dim: #a1a1aa;

  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: linear-gradient(135deg, var(--bg-dark) 0%, var(--bg-secondary) 100%);
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
}

/* ===== Background layers ===== */
.bg-gradient {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.gradient-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.3;
  animation: blob-float 15s ease-in-out infinite;
}

.gradient-1 {
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, var(--purple-dark), transparent);
  top: -20%;
  right: -10%;
  animation-delay: 0s;
}

.gradient-2 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, var(--accent), transparent);
  bottom: -15%;
  left: -5%;
  animation-delay: -5s;
  animation-duration: 20s;
}

.gradient-3 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, var(--secondary), transparent);
  top: 40%;
  left: 30%;
  animation-delay: -10s;
  animation-duration: 25s;
}

@keyframes blob-float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(100px, -80px) scale(1.1); }
  66% { transform: translate(-60px, 60px) scale(0.9); }
}

.grid-pattern {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(212, 175, 55, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(212, 175, 55, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 1;
  pointer-events: none;
}

/* ===== Hero container ===== */
.hero-container {
  position: relative;
  z-index: 2;
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 500px;
  gap: 80px;
  align-items: center;
  padding: 80px 60px;
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
}

/* ===== Content section ===== */
.hero-content {
  display: flex;
  flex-direction: column;
  gap: 32px;
  animation: slide-in-left 0.8s ease-out;
}

@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Social icons */
.social-icons {
  display: flex;
  gap: 16px;
  align-items: center;
}

.social-icons a {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(212, 175, 55, 0.08);
  border: 1px solid rgba(212, 175, 55, 0.15);
  color: var(--text-dim);
  font-size: 1.1rem;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
}

.social-icons a::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--accent);
  border-radius: 12px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}
.social-icons a[aria-label="LinkedIn"]:hover { 
  color: #0077b5; 
  filter: drop-shadow(0 0 8px rgba(0, 119, 181, 0.5)); 
}
.social-icons a[aria-label="GitHub"]:hover { 
  color: #ffffff; 
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5)); 
}
.social-icons a[aria-label="Email"]:hover { 
  color: #ea4335; 
  filter: drop-shadow(0 0 8px rgba(234, 67, 53, 0.5)); 
}
.social-icons a[aria-label="Phone"]:hover { 
  color: #4ade80; 
  filter: drop-shadow(0 0 8px rgba(74, 222, 128, 0.5)); 
}
.social-icons a[aria-label="Instagram"]:hover { 
  color: #e1306c; 
  filter: drop-shadow(0 0 8px rgba(225, 48, 108, 0.5)); 
}
/* .social-icons a:hover {
  color: var(--bg-dark);
  transform: translateY(-4px) scale(1.1);
}

.social-icons a:hover::before {
  opacity: 0.1;
} */

.location {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  margin-top: -16px;
  color: var(--text-dim);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.location i {
  color: var(--accent);
  font-size: 0.9rem;
  filter: drop-shadow(0 0 6px rgba(212, 175, 55, 0.4));
}

/* Greeting */
.greeting-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 3px;
  color: var(--accent);
}

.greeting-accent {
  font-size: 1.5rem;
  opacity: 0.6;
}

/* Heading */
.hero-heading {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.hero-name {
  margin: 0;
  font-family: 'Sora', sans-serif;
  font-size: 4.5rem;
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.02em;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.name-part {
  background: linear-gradient(135deg, var(--text-main) 0%, rgba(255, 255, 255, 0.6) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.4s ease;
}

.name-part.highlight {
  background: linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 20px rgba(212, 175, 55, 0.2));
}

.hero-name:hover .name-part {
  letter-spacing: 0.02em;
}

.title-divider {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), transparent);
  border-radius: 2px;
}

/* Specialization */
.specialization {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
}

.spec-label {
  font-size: 0.95rem;
  color: var(--text-dim);
  font-weight: 500;
}

.typed-wrapper {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-main);
  font-family: 'Sora', sans-serif;
  letter-spacing: 0.5px;
}

.typed-text {
  color: var(--accent);
  min-height: 1.4em;
  min-width: 200px;
}

.cursor {
  color: var(--purple-light);
  animation: cursor-blink 1s step-end infinite;
  font-weight: 900;
}

@keyframes cursor-blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

/* Description */
.hero-description {
  font-size: 1.1rem;
  line-height: 1.75;
  color: var(--text-dim);
  max-width: 500px;
  margin: 0;
  font-weight: 400;
}

.hero-description strong {
  color: var(--text-main);
  font-weight: 600;
}

/* Skills badges */
.skills-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 8px;
}

.badge {
  display: inline-block;
  padding: 8px 16px;
  background: rgba(212, 175, 55, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.25);
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--accent);
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.badge:hover {
  background: rgba(212, 175, 55, 0.2);
  border-color: var(--accent);
  transform: translateY(-2px);
}

/* CTA buttons */
.cta-group {
  display: flex;
  gap: 16px;
  margin-top: 16px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 32px;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 10px;
  border: 2px solid transparent;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  letter-spacing: 0.5px;
}

.btn-primary {
  background: var(--accent);
  color: var(--bg-dark);
  border-color: var(--accent);
}

.btn-primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(212, 175, 55, 0.3);
}

.submit-btn {
  background: rgba(201, 162, 39, 0.02);
  color: #c9a227;
  border: 1px solid rgba(201, 162, 39, 0.3);
  padding: 12px 28px;
  border-radius: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.submit-btn:hover {
  background: transparent;
  border-color: #f5d742;
  color: #fff;
  box-shadow: 0 0 20px rgba(201, 162, 39, 0.2);
  transform: scale(1.01);
}
 .submit-btn i {
  transition: transform 0.4s ease;
}

.submit-btn:hover i {
  transform: translate(5px, -5px);  
  color: #f5d742;
}

/* ===== Photo section ===== */
.hero-photo-section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: slide-in-right 0.8s ease-out;
}

@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.integrated-photo-container {
  position: relative;
  width: 390px;
  height: 475px;
  isolation: isolate;
}

.photo-bg-glow {
  position: absolute;
  z-index: -3;
  inset: 8% -12% 2%;
  border-radius: 50%;
  background:
    radial-gradient(circle at 45% 42%, rgba(212, 175, 55, 0.28), transparent 38%),
    radial-gradient(circle at 72% 36%, rgba(139, 92, 246, 0.35), transparent 56%);
  filter: blur(26px);
  animation: glow-breathe 7s ease-in-out infinite;
}

@keyframes glow-breathe {
  0%, 100% { opacity: 0.65; transform: scale(0.96); }
  50% { opacity: 1; transform: scale(1.07); }
}

.orbit {
  position: absolute;
  z-index: -1;
  border: 1px solid rgba(248, 214, 109, 0.28);
  border-radius: 50%;
  pointer-events: none;
}

.orbit::before,
.orbit::after {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 14px rgba(248, 214, 109, 0.9);
}

.orbit-one {
  width: 360px;
  height: 190px;
  top: 39%;
  left: -1%;
  transform: rotate(-19deg);
  animation: orbit-drift 10s ease-in-out infinite;
}

.orbit-one::before { top: -4px; left: 20%; }
.orbit-one::after { bottom: -4px; right: 13%; }

.orbit-two {
  width: 270px;
  height: 365px;
  top: 8%;
  right: 7%;
  border-color: rgba(139, 92, 246, 0.3);
  transform: rotate(47deg);
  animation: orbit-drift 12s ease-in-out -3s infinite reverse;
}

.orbit-two::before { top: 18%; right: -4px; }
.orbit-two::after { bottom: 15%; left: -4px; }

@keyframes orbit-drift {
  0%, 100% { margin-top: 0; opacity: 0.65; }
  50% { margin-top: -10px; opacity: 1; }
}

.integrated-profile-photo {
  position: absolute;
  z-index: 1;
  right: 16px;
  bottom: 0;
  display: block;
  width: 340px;
  height: auto;
  filter: brightness(0.60) contrast(1.06) saturate(0.94) drop-shadow(0 24px 24px rgba(0, 0, 0, 0.45));
  mask-image: linear-gradient(to bottom, #000 0%, #000 63%, rgba(0, 0, 0, 0.78) 78%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 63%, rgba(0, 0, 0, 0.78) 78%, transparent 100%);
  transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1), filter 500ms ease;
}

.integrated-photo-container:hover .integrated-profile-photo {
  transform: translateY(-8px) scale(1.025);
  filter: brightness(0.96) contrast(1.08) saturate(1) drop-shadow(0 30px 30px rgba(0, 0, 0, 0.55));
}

.photo-overlays {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
}

.code-lines {
  position: absolute;
  top: 22%;
  right: -3%;
  display: grid;
  gap: 7px;
  color: rgba(248, 214, 109, 0.42);
  font: 0.58rem/1.25 'Courier New', monospace;
  transform: rotate(-5deg);
  text-shadow: 0 0 10px rgba(212, 175, 55, 0.25);
  animation: code-float 8s ease-in-out infinite;
}

@keyframes code-float {
  0%, 100% { opacity: 0.35; transform: translateY(0) rotate(-5deg); }
  50% { opacity: 0.7; transform: translateY(-10px) rotate(-5deg); }
}

.network-node {
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 12px rgba(248, 214, 109, 0.9);
  animation: node-pulse 3s ease-in-out infinite;
}

.node-one { top: 35%; left: 1%; }
.node-two { top: 57%; right: 4%; animation-delay: -1s; }
.node-three { bottom: 18%; left: 18%; animation-delay: -2s; }

@keyframes node-pulse {
  0%, 100% { opacity: 0.45; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.45); }
}

/* Status badge */
.status-badge {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(10, 10, 12, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 12px 20px;
  border-radius: 12px;
  border: 1px solid rgba(212, 175, 55, 0.3);
  z-index: 10;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
  animation: float-up 0.6s ease-out 0.3s both;
}

.status-badge-floating {
  top: 27%;
  right: -24px;
  bottom: auto;
  left: auto;
  transform: none;
  padding: 10px 16px;
  border-color: rgba(74, 222, 128, 0.34);
  background: rgba(9, 22, 17, 0.78);
}

@keyframes float-up {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

.status-dot {
  width: 10px;
  height: 10px;
  background: #4ade80;
  border-radius: 50%;
  position: relative;
  flex-shrink: 0;
  box-shadow: 0 0 12px rgba(74, 222, 128, 0.6);
}

.status-dot::after {
  content: '';
  position: absolute;
  inset: -4px;
  background: rgba(74, 222, 128, 0.3);
  border-radius: 50%;
  animation: pulse-ring 2s ease-out infinite;
}

@keyframes pulse-ring {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.status-text {
  font-size: 0.60rem;
  font-weight: 600;
  color: #4ade80;
  letter-spacing: 0.5px;
}


/* ===== Scroll indicator ===== */
.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: var(--text-dim);
  font-size: 0.85rem;
  z-index: 3;
  animation: fade-in-up 1s ease-out 0.8s both;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

.scroll-arrow {
  animation: bounce-arrow 2s ease-in-out infinite;
}

@keyframes bounce-arrow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}

.scroll-arrow svg {
  color: var(--accent);
}

/* ===== Responsive ===== */
@media (max-width: 1200px) {
  .hero-container {
    grid-template-columns: 1fr 400px;
    gap: 60px;
    padding: 60px 40px;
  }

  .hero-name {
    font-size: 3.5rem;
  }

  .integrated-photo-container {
    width: 315px;
    height: 390px;
  }

  .integrated-profile-photo {
    width: 280px;
  }
}

@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 40px 24px;
  }

  .hero-content {
    text-align: center;
  }

  .social-icons {
    justify-content: center;
  }

  .location {
    margin: -12px auto 0;
  }

  .greeting-wrapper {
    justify-content: center;
  }

  .hero-name {
    font-size: 2.5rem;
    align-items: center;
  }

  .title-divider {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-description {
    max-width: 100%;
  }

  .skills-badges {
    justify-content: center;
  }

  .cta-group {
    justify-content: center;
    flex-wrap: wrap;
  }

  .hero-photo-section {
    order: -1;
  }

  .integrated-photo-container {
    width: 270px;
    height: 330px;
  }

  .integrated-profile-photo {
    width: 235px;
  }

  .code-lines,
  .orbit-two {
    display: none;
  }
}

@media (max-width: 480px) {
  .hero-container {
    padding: 30px 16px;
    gap: 30px;
  }

  .hero-name {
    font-size: 2rem;
  }

  .typed-wrapper {
    font-size: 1.1rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .social-icons {
    gap: 12px;
  }

  .social-icons a {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }

  .btn {
    padding: 12px 24px;
    font-size: 0.9rem;
    width: 100%;
  }

  .cta-group {
    flex-direction: column;
  }

  .integrated-photo-container {
    width: 220px;
    height: 275px;
  }

  .integrated-profile-photo {
    width: 195px;
  }

  .status-badge-floating {
    top: 22%;
    right: -16px;
    padding: 8px 11px;
  }

  .scroll-indicator {
    bottom: 20px;
    font-size: 0.75rem;
    gap: 8px;
  }

  .badge {
    font-size: 0.8rem;
    padding: 6px 12px;
  }
}

/* Reduce motion preferences */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
