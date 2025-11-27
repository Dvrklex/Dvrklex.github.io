<template>
  <main data-aos="zoom-in">
    <section class="proyects" id="proyects">
      <h2>Proyectos</h2>
      <hr />

      <div class="card-grid">
        <div
          v-for="project in projects"
          :key="project.title"
          class="project-card"
        >
          <img :src="project.image" alt="imagen proyecto" class="card-image" />
          <div class="card-content">
            <h3>{{ project.title }}</h3>
            <p class="description">{{ project.description }}</p>
            <div class="tech-stack">
              <span v-for="tech in project.technologies" :key="tech" class="badge">{{ tech }}</span>
            </div>
            <div class="card-links">
              <a :href="project.demo" target="_blank" v-if="project.demo">Demo</a>
              <a :href="project.repo" target="_blank" v-if="project.repo">Repositorio</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  
</template>

<script setup>
const projects = [
  {
    title: 'Portfolio',
    description: 'Desarrollo de esta pequeña web como portfolio personal',
    technologies: ['Vue.js', 'JavaScript', 'Github'],
    image: 'https://img.freepik.com/foto-gratis/banner-hoja-monstera-tropical-neon_53876-138943.jpg?semt=ais_items_boosted&w=740',
    demo: 'https://dvrklex.github.io/',
    repo: 'https://github.com/Dvrklex/Dvrklex.github.io'
  }
]
</script>


<style scoped>
main {
  max-width: 1000px;
  margin: auto;
  padding: 20px;
}

.proyects {
  background: linear-gradient(135deg, #1a1a1a, #262626);
  color: #eee;
  padding: 40px;
  border-radius: 28px 8px 28px 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  position: relative;
  overflow: hidden;
}

h2 {
  font-size: 3rem;
  color: var(--primary);
  margin-bottom: 30px;
  text-align: center;
  font-family: 'Unica One', cursive;
  letter-spacing: 1px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
}

.project-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(6px);
  position: relative;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 30px rgba(255, 215, 0, 0.2);
}

.card-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.card-content {
  padding: 18px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card-content h3 {
  font-size: 1.3rem;
  color: var(--primary);
  margin-bottom: 12px;
}

.description {
  font-size: 0.9rem;
  color: #ccc;
  margin-bottom: 12px;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}

.badge {
  background: #292929;
  color: var(--primary);
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.card-links {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-top: auto;
}

.card-links a {
  background: var(--primary);
  color: #111;
  padding: 6px 14px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 0.85rem;
  text-decoration: none;
  transition: background 0.3s ease, transform 0.2s ease;
}

.card-links a:hover {
  background: #e0b62c;
  transform: scale(1.05);
}
</style>
