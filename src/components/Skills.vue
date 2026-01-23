<template>
  <main data-aos="fade-up">
    <section class="skills-dashboard">
      <div class="skills-header">
        <span class="pre-title">TECH STACK</span>
        <h2>Habilidades Técnicas</h2>
        <div class="header-line"></div>
      </div>

      <div 
        v-for="(section, sIndex) in sections" 
        :key="sIndex"
        class="skill-group"
        :class="{ 'is-active': activeSection === sIndex }"
      >
        <button class="group-label" @click="toggleSection(sIndex)">
          <div class="label-left">
            <i :class="section.icon"></i>
            <span>{{ section.label }}</span>
          </div>
          <i class="fas fa-chevron-down chevron"></i>
        </button>

        <div class="expandable-content">
          <div class="skills-grid">
            <div class="skill-card" v-for="(skill, index) in section.data" :key="index">
              <div class="card-inner">
                <i :class="skill.icon"></i>
                <span>{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script setup>
  import { ref } from 'vue'

    const activeSection = ref(0) // Controla qué grupo está expandido

    const toggleSection = (index) => {
      activeSection.value = activeSection.value === index ? null : index
    }
    const tecnologies = [
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'JavaScript', icon: 'fab fa-js' },
        { name: 'HTML5', icon: 'fab fa-html5' },
        { name: 'CSS3', icon: 'fab fa-css3-alt' },
        { name: 'Node.js', icon: 'fab fa-node-js' },
        { name: 'Docker', icon: 'fab fa-docker' },
        { name: 'Git', icon: 'fab fa-git-alt' },
        { name: 'PostgreSQL', icon: 'fas fa-database' },
        { name: 'MySQL', icon: 'fas fa-database' },
    ]
    const frameworks = [
        { name: 'Django', icon: 'fab fa-python'},
        { name: 'Flask', icon: 'fab fa-python'},
        { name: 'FastAPI', icon: 'fab fa-python'},
        { name: 'SQLAlchemy', icon: 'fab fa-python'},
        { name: 'Sequelize', icon: 'fab fa-node'},
        { name: 'Express', icon: 'fa fa-code'},
        { name: 'Celery', icon: 'fa fa-code'},
        { name: 'Selenium', icon: 'fa fa-code'},
        { name: 'WebSocket', icon: 'fa fa-code'},
        { name: 'SocketIO', icon: 'fa fa-code'},
        { name: 'Vue.js', icon: 'fab fa-vuejs'},
        { name: 'Bootstrap', icon: 'fab fa-bootstrap'}
    ]
    const others = [
        { name: 'VS Code', icon: 'fa fa-keyboard'},
        { name: 'Adobe XD', icon: 'fa fa-keyboard'},
        { name: 'DBeaver', icon: 'fas fa-database'},
        { name: 'Git', icon: 'fab fa-git'},
        { name: 'Docker', icon: 'fab fa-docker'}
    ]
    const sections = [
      { label: 'Lenguajes y Tecnologías Core', icon: 'fas fa-terminal', data: tecnologies },
      { label: 'Frameworks y Librerías', icon: 'fas fa-layer-group', data: frameworks },
      { label: 'Herramientas y Entorno', icon: 'fas fa-tools', data: others }
    ]
</script>

<style scoped>
main {
  max-width: 1000px; 
  margin: auto;
  padding: 20px;
}

.skills-dashboard {
  background: var(--card-glass);
  backdrop-filter: blur(20px);
  padding: 30px; 
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.skills-header { text-align: center; margin-bottom: 30px; }
.pre-title { color: var(--accent); letter-spacing: 3px; font-size: 0.65rem; font-weight: 700; }
.skills-dashboard h2 { font-size: 2rem; font-weight: 900; color: var(--text-main); margin: 0; }
.header-line { width: 40px; height: 2px; background: var(--accent); margin: 8px auto; }

.skill-group {
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.group-label {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--text-dim);
  transition: all 0.3s ease;
}

.group-label:hover {
  color: var(--accent);
}

.label-left {
  display: flex;
  align-items: center;
  gap: 15px;
}

.label-left i {
  font-size: 1rem;
  color: var(--accent);
}

.chevron {
  font-size: 0.8rem;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.expandable-content {
  display: grid;
  grid-template-rows: 0fr; 
  transition: grid-template-rows 0.4s ease-out, padding 0.4s;
  overflow: hidden;
}

.is-active .expandable-content {
  grid-template-rows: 1fr; 
  padding-bottom: 20px;
}

.is-active .chevron {
  transform: rotate(180deg);
}

.is-active .group-label {
  color: var(--text-main);
}

.skills-grid {
  min-height: 0; 
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 10px;
}

.skill-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.card-inner {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: row; 
  align-items: center;
  gap: 10px;
}

.skill-card i {
  font-size: 1.1rem; 
  color: var(--accent);
  transition: transform 0.3s ease;
}

.skill-card span {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-dim);
  white-space: nowrap;
}

.skill-card:hover {
  background: rgba(212, 175, 55, 0.08);
  border-color: rgba(212, 175, 55, 0.4);
  transform: translateX(5px); 
}

.skill-card:hover i {
  transform: scale(1.2);
  filter: drop-shadow(0 0 5px var(--accent));
}

.skill-card:hover span { color: var(--text-main); }

.card-orbit { display: none; }

@media (max-width: 480px) {
  .skills-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>