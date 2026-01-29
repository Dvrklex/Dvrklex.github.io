<template>
  <section class="portfolio-wrapper">

    <main class="profile-grid" data-aos="fade-up">
      <aside class="sidebar">
        <div class="image-wrapper">
          <div class="profile-glow"></div>
          <img src="../../public/Yo.png" alt="Alexis Rosales" class="profile-img" />
          <div class="image-fader"></div>
          <div class="status-badge">
            <span class="dot"></span> Connection: Active
          </div>
        </div>
        <div class="sidebar-connector">
          <div class="flow-container">
            <div class="node"></div>
            <div class="main-pipeline">
              <div class="bit-stream"></div>
            </div>
            <div class="node"></div>
            <div class="main-pipeline">
              <div class="bit-stream delay"></div>
            </div>
            <div class="node"></div>
          </div>
        </div>
        <div class="social-stack">
          <a href="https://www.linkedin.com/in/dvrklex" target="_blank" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="https://github.com/Dvrklex" target="_blank" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
          <a href="mailto:alexis.rosales.dev@gmail.com" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>
          <a href="tel:+5493583439544" aria-label="Phone"><i class="fa-solid fa-phone"></i></a>
        </div>
      </aside>

      <section class="main-content">
        <header class="intro">
          <span class="greeting">HOLA, MI NOMBRE ES</span>
          <h1 class="profile-name">ALEXIS ROSALES</h1>
          <div class="typed-container">
            <span class="role-prefix">Especialista en</span>
            <span ref="typedTarget" class="typed-text"></span>
          </div>
        </header>

       <div class="description">
  <p>
    Desarrollador <strong>Backend</strong> enfocado en crear el motor que impulsa experiencias digitales. 
    Diseño arquitecturas escalables y sistemas que no solo funcionan, sino que perduran. 
    Mi visión <strong>Fullstack</strong> integra esta solidez técnica con interfaces modernas y eficientes.
  </p>
</div>
        <div class="impact-stat">
          <div class="stat-item">
            <span class="stat-value">Backend</span>
            <span class="stat-label">Rol Principal</span>
          </div>

          <div class="stat-divider"></div>

          <div class="stat-item">
            <span class="stat-value">Frontend</span>
            <span class="stat-label">Integración & Desarrollo</span>
          </div>
        </div>

      </section>

    </main>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import Typed from 'typed.js'

const typedTarget = ref(null)

onMounted(() => {
  nextTick(() => {
    if (!typedTarget.value) return

    new Typed(typedTarget.value, {
      strings: [
        'Arquitectura Backend',
        'Ingeniería Fullstack',
        'Sistemas en Tiempo Real'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
      backDelay: 2000,
    })
  })
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@100;400;700;800&family=Outfit:wght@300;600&display=swap');
.portfolio-wrapper {
  font-family: 'Inter', sans-serif;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  position: relative;
  overflow: hidden;
}

.profile-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 320px 1fr;
  background: var(--card-glass);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 32px;
  overflow: hidden;
  max-width: 1000px;
}

.sidebar {
  background: rgba(255, 255, 255, 0.02);
  padding: 20px 30px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; 
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  min-height: 100%;
}

.sidebar-connector {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 15px 0;
}

.flow-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.node {
  width: 6px;
  height: 6px;
  background: var(--accent);
  border-radius: 1px;
  transform: rotate(45deg);
  box-shadow: 0 0 10px var(--accent);
  opacity: 0.6;
}

.main-pipeline {
  width: 2px;
  height: 50px;
  background: rgba(212, 175, 55, 0.1);
  position: relative;
  overflow: hidden;
}

.bit-stream {
  position: absolute;
  top: -20px;
  left: 0;
  width: 100%;
  height: 20px;
  background: linear-gradient(to bottom, transparent, var(--accent), transparent);
  animation: data-flow 3s infinite linear;
}

.bit-stream.delay {
  animation-delay: 1.5s;
}

@keyframes data-flow {
  0% { top: -20%; opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { top: 120%; opacity: 0; }
}

.image-wrapper {
  position: relative;
  margin-bottom: 30px;
  padding: 10px;
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), transparent);
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.profile-img {
  width: 190px;
  height: 250px;
  object-fit: cover;
  border-radius: 20px;
  filter: drop-shadow(0 15px 30px rgba(0,0,0,0.8)) contrast(105%);
  transition: all 0.5s ease;
  position: relative;
  z-index: 2;
}

.profile-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%);
  z-index: 1;
  pointer-events: none;
}

.image-fader {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background: linear-gradient(to top, rgba(17, 17, 17, 0.8), transparent);
  z-index: 3;
  border-radius: 0 0 20px 20px;
  pointer-events: none;
}

.image-wrapper:hover .profile-img {
  transform: translateY(-5px) scale(1.02);
  filter: drop-shadow(0 20px 40px rgba(212, 175, 55, 0.2)) contrast(110%);
}

.status-badge {
  position: absolute;
  bottom: 5px; 
  left: 50%;
  transform: translateX(-50%);
  background: #111;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;
  border: 1px solid var(--accent);
  display: flex;
  align-items: center;
  gap: 8px;
  color: #ffffff; 
  z-index: 10; 
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

.dot {
  width: 8px;
  height: 8px;
  background: #4ade80;
  border-radius: 50%;
  position: relative;
}

.dot::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #4ade80;
  border-radius: 50%;
  animation: pulse-dot 2s infinite;
}

@keyframes pulse-dot {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  70% {
    transform: scale(3);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

.social-stack {
  display: flex;
  gap: 12px;
  background: rgba(255, 255, 255, 0.03); 
  padding: 10px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.social-stack a {
  color: var(--text-dim);
  font-size: 1.3rem;
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
}

.social-stack a:hover {
  transform: translateY(-5px) scale(1.1);
  background: rgba(255, 255, 255, 0.05);
  color: var(--accent);
}


.social-stack a[aria-label="LinkedIn"]:hover { 
  color: #0077b5; 
  filter: drop-shadow(0 0 8px rgba(0, 119, 181, 0.5)); 
}
.social-stack a[aria-label="GitHub"]:hover { 
  color: #ffffff; 
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5)); 
}
.social-stack a[aria-label="Email"]:hover { 
  color: #ea4335; 
  filter: drop-shadow(0 0 8px rgba(234, 67, 53, 0.5)); 
}
.social-stack a[aria-label="Phone"]:hover { 
  color: #4ade80; 
  filter: drop-shadow(0 0 8px rgba(74, 222, 128, 0.5)); 
}

.main-content {
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.greeting {
  font-weight: 700;
  letter-spacing: 4px;
  font-size: 0.75rem;
  color: var(--accent);
  display: block;
  margin-bottom: 10px;
}

.profile-name {
  font-size: 4rem;
  font-weight: 800; 
  margin: 0;
  line-height: 1.1;
  letter-spacing: -0.02em;  
  text-transform: uppercase;
  
  
  background: linear-gradient(
    135deg, 
    var(--text-main) 30%, 
    rgba(255, 255, 255, 0.5) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  
  animation: fadeInDown 1.2s ease-out;
  transition: all 0.4s ease;
  position: relative;
}

.profile-name:hover {
  transform: translateX(10px);  
  background: linear-gradient(
    135deg, 
    var(--accent) 0%, 
    var(--text-main) 50%
  );
  -webkit-background-clip: text;
  filter: drop-shadow(0 0 20px rgba(212, 175, 55, 0.15));
}

 
.profile-name::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 60px;  
  height: 4px;
  background: var(--accent);
  border-radius: 2px;
  transition: width 0.4s ease;
}

.profile-name:hover::after {
  width: 120px;  
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.typed-container {
  margin: 15px 0 30px;
  font-size: 1.2rem;
  height: 1.5rem;
}

.role-prefix {
  color: var(--text-dim);
  margin-right: 8px;
}

.typed-text {
  color: var(--text-main);
  border-bottom: 2px solid var(--accent);
}

.description {
  color: var(--text-dim);
  line-height: 1.4;
  font-size: 1rem;
  max-width: 500px;
}

.description strong {
  color: var(--text-main);
}



.impact-stat {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 30px;
  padding: 20px;
  background: rgba(212, 175, 55, 0.03);
  border-radius: 20px;
  border: 1px solid rgba(212, 175, 55, 0.08);
  max-width: fit-content;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--accent);
}

.stat-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-dim);
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
}
@media (max-width: 900px) {
  .portfolio-wrapper {
    padding: 10px;
    align-items: flex-start;  
  }

  .profile-grid {
    grid-template-columns: 1fr;  
    border-radius: 24px;
    margin-top: 20px;
  }

  .sidebar {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    padding: 40px 20px;
    flex-direction: column;
    gap: 20px;
  }

   .sidebar-connector {
    display: none;
  }

  .profile-img {
    width: 160px; 
    height: 210px;
  }

  .main-content {
    padding: 40px 20px;
    text-align: center;
    align-items: center; 
  }

  .profile-name {
    font-size: 2.8rem;
    text-align: center;
  }
  .profile-name::after {
    left: 50%;
    transform: translateX(-50%);
  }
  .profile-name:hover {
    transform: none;
  }
  .typed-container {
    justify-content: center;
    font-size: 1rem;
    height: auto;
    min-height: 3rem; 
  }

  .description {
    font-size: 1rem;
    max-width: 100%;
  }

  .impact-stat {
    flex-direction: row;  
    justify-content: center;
    width: 100%;
    gap: 15px;
  }

  .stat-value {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  

  .social-stack {
    width: 100%;
    justify-content: space-around;
  }

  .impact-stat {
    display: grid;
    grid-template-columns: 1fr;  
    gap: 10px;
  }

  .stat-divider {
    width: 80%;
    height: 1px;
    margin: 5px auto;
  }

  .stat-item {
    align-items: center;
  }
}
</style>