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
    title: 'DevTrack - Gestor de Tareas para Developers',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae voluptates quibusdam maxime obcaecati.',
    technologies: ['Vue.js', 'Pinia', 'Firebase'],
    image: 'https://img.freepik.com/foto-gratis/banner-hoja-monstera-tropical-neon_53876-138943.jpg?semt=ais_items_boosted&w=740',
    demo: 'https://devtrack.app',
    repo: 'https://github.com/dvrklex/devtrack'
  }
]
</script>


<style scoped>
    main {
  max-width: 1000px;
  margin: auto;
  padding: 20px;
}

section {
  padding: 25px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.3);
}

h2 {
  text-align: center;
  color: #c9a227;
  font-size: 2rem;
  margin-bottom: 20px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 24px;
  justify-content: center;
}

.project-card {
  background: #121212;
  color: #f4f4f4;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 100%;
  width: 100%;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.5);
}

.card-image {
  width: 100%;
  height: 140px;
  object-fit: cover;
}

.card-content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card-content h3 {
  font-size: 1.2rem;
  color: #f5d742;
  margin-bottom: 8px;
}

.description {
  font-size: 0.88rem;
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
  color: #f5d742;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.card-links {
  display: flex;
  gap: 10px;
  margin-top: auto;
}

.card-links a {
  background: #c9a227;
  color: #111;
  padding: 6px 12px;
  border-radius: 6px;
  font-weight: bold;
  text-decoration: none;
  font-size: 0.8rem;
  transition: background 0.3s ease;
}

.card-links a:hover {
  background: #e0b62c;
}

</style>
