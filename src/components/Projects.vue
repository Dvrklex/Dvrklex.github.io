<template>
  <main data-aos="fade-up">
    <section class="projects-section">
      <div class="projects-header">
        <div class="header-content">
          <span class="pre-title">Proyectos</span>
          <h2>Selección Destacada</h2>
        </div>
        <div class="header-line"></div>
      </div>

      <div class="projects-container">
        <article 
          v-for="(project, index) in projects" 
          :key="project.title"
          class="project-glass-card"
        >
          <div class="image-section">
            <img :src="project.image" alt="Preview" class="project-img" />
            <div class="project-status">
              <span
                class="status-dot"
                :class="{
                  'is-wip': project.status === 'In Progress',
                  'is-ongoing': project.status === 'Ongoing'
                }"
              ></span>
              {{ project.status || 'Finished' }}
            </div>
          </div>
          
          <div class="info-section">
            <div class="top-meta">
              <span class="date-label">{{ project.date }}</span>
              <div class="links-group">
                <a :href="project.demo" target="_blank" v-if="project.demo" class="icon-btn" title="Live Demo">
                  <i class="fas fa-external-link-alt"></i>
                </a>
                <a :href="project.repo" target="_blank" v-if="project.repo" class="icon-btn" title="Source Code">
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>

            <h3 class="title">{{ project.title }}</h3>
            <p class="description">{{ project.description }}</p>
            
            <div class="footer-meta">
              <div class="tech-tags">
                <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>
<script setup>
const projects = [
  {
    title: 'HoyQuiero',
    description: 'Sistema integral de gestión para locales gastronómicos. Incluye administración de stock con filtros avanzados, gestión de personal por roles y configuración de identidad corporativa. Arquitectura basada en micro-interacciones y un diseño moderno.',
    technologies: ['Vue.js 3', 'Django', 'Postgres', 'WebSockets'],
    image: '/projects/hoy-quiero-preview.png', 
    demo: null, 
    repo: null,
    date: '2026',
    status: 'In Progress'
  },
  {
    title: 'Portfolio',
    description: 'SPA responsiva desarrollada con Vue.js 3, enfocada en la optimización de componentes, animaciones fluidas con AOS y despliegue automatizado mediante GitHub Pages.',
    technologies: ['Vue.js', 'JavaScript', 'Github'],
    image: '/projects/dvrklex-project.png',
    demo: 'https://dvrklex.github.io/',
    repo: 'https://github.com/Dvrklex/Dvrklex.github.io',
    date: '2025',
    status: 'Finished'
  },
  {
    title: 'Interactive Wallpapers (Wallpaper Engine)',
    description: 'Colección de wallpapers interactivos desarrollados con HTML, CSS y JavaScript para Wallpaper Engine. Incluye relojes dinámicos, visualizadores de audio y fondos altamente personalizables mediante la integración de propiedades del motor.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Wallpaper Engine'],
    image: '/projects/wallpaper-engine-project.png',
    demo: 'https://steamcommunity.com/id/Jackotes/myworkshopfiles/',
    repo: null,
    date: '2025',
    status: 'Ongoing'
  }
]
</script>
<style scoped>
:emphasis {
  --accent: #d4af37;
  --bg-card: rgba(15, 15, 15, 0.6);
  --border: rgba(255, 255, 255, 0.08);
}

main {
  max-width: 800px; 
  margin: 40px auto;
  padding: 0 20px;
}

/* --- HEADER REFINADO --- */

.projects-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
}

.pre-title {
  display: block;
  font-size: 0.7rem;
  letter-spacing: 3px;
  color: var(--accent);
  text-transform: uppercase;
  font-weight: 600;
}

h2 {
  font-size: 1.5rem;
  margin: 0;
  color: #fff;
}

.header-line {
  flex-grow: 1;
  height: 1px;

  background: linear-gradient(90deg, var(--accent), transparent);
  opacity: 0.3;
}

/* --- BENTO/GLASS CARD --- */
.project-glass-card {
  display: grid;
  margin-bottom: 20px;
  grid-template-columns: 320px 1fr;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border);
  border-radius: 24px;
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.3s;
}

.project-glass-card:hover {
  transform: translateY(-5px);
  border-color: rgba(212, 175, 55, 0.4);
}

/* --- SECCIÓN IMAGEN --- */
.image-section {
  position: relative;
  height: 100%;
  min-height: 220px;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.project-status {
  position: absolute;
  top: 15px;
  left: 15px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.65rem;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 6px;
  border: 1px solid rgba(255,255,255,0.1);
}

.status-dot {
  width: 6px;
  height: 6px;
  background: #4caf50;
  border-radius: 50%;
  box-shadow: 0 0 8px #4caf50;
}
.status-dot.is-wip {
  background: #faa628;
  box-shadow: 0 0 8px #faa628;
}

.status-dot.is-wip {
  animation: pulse-wip 2s infinite;
}

.status-dot.is-ongoing {
  background: #00e5ff;
  box-shadow: 0 0 10px #00e5ff;
  animation: pulse-ongoing 2.5s infinite;
}

@keyframes pulse-ongoing {
  0% { transform: scale(1); opacity: 0.9; }
  50% { transform: scale(1.15); opacity: 0.6; }
  100% { transform: scale(1); opacity: 0.9; }
}
@keyframes pulse-wip {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
}

/* --- SECCIÓN INFO --- */
.info-section {
  padding: 30px;
  display: flex;
  flex-direction: column;
}

.top-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.date-label {
  font-size: 0.75rem;
  color: #666;
  font-family: 'Monaco', monospace;
}

.title {
  font-size: 1.6rem;
  margin: 0 0 12px 0;
  color: #fff;
  font-weight: 700;
}

.description {
  font-size: 0.9rem;
  color: #aaa;
  line-height: 1.6;
  margin-bottom: 25px;
}

/* --- TECH & LINKS --- */
.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  font-size: 0.7rem;
  padding: 4px 12px;
  background: rgba(212, 175, 55, 0.1);
  color: var(--accent);
  border-radius: 8px;
  border: 1px solid rgba(212, 175, 55, 0.2);
}

.links-group {
  display: flex;
  gap: 12px;
}

.icon-btn {
  color: #fff;
  font-size: 1.1rem;
  opacity: 0.6;
  transition: 0.3s;
}

.icon-btn:hover {
  opacity: 1;
  color: var(--accent);
  transform: scale(1.1);
}

/* --- RESPONSIVE --- */
@media (max-width: 768px) {
  .project-glass-card {
    grid-template-columns: 1fr;
  }
  .image-section {
    height: 180px;
  }
}
</style>