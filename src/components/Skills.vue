<template>
  <main data-aos="fade-up">
    <div style="display:none">
      <p>Alexis Rosales, desarrollador Fullstack experto en {{ allTechNames }}. 
         Especializado en Python, Django, Vue.js y arquitectura de bases de datos en Argentina.</p>
    </div>
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
  import { ref, computed } from 'vue'

const activeSection = ref(0)
const toggleSection = (index) => {
  activeSection.value = activeSection.value === index ? null : index
}
const allTechNames = computed(() => {
  return sections.flatMap(s => s.data.map(d => d.name)).join(', ')
})
const sections = [
  {
    label: 'Lenguajes',
    icon: 'fas fa-code',
    data: [
      { name: 'Python', icon: 'fab fa-python' },
      { name: 'JavaScript', icon: 'fab fa-js' },
      { name: 'Bash / Shell', icon: 'fas fa-terminal' },
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'CSS3', icon: 'fab fa-css3-alt' }
    ]
  },
  {
    label: 'Backend & APIs',
    icon: 'fas fa-server',
    data: [
      { name: 'Django / REST', icon: 'fab fa-python' },
      { name: 'Flask', icon: 'fas fa-flask' },
      { name: 'FastAPI', icon: 'fas fa-bolt' },
      { name: 'Express.js / Node', icon: 'fab fa-node-js' },
      { name: 'SQLAlchemy', icon: 'fas fa-database' },
      { name: 'Sequelize', icon: 'fas fa-link' },
      { name: 'Celery', icon: 'fas fa-tasks' },
      { name: 'WebSockets / Socket.IO', icon: 'fas fa-plug' }
    ]
  },
  {
    label: 'Frontend & UI',
    icon: 'fas fa-desktop',
    data: [
      { name: 'Vue.js', icon: 'fab fa-vuejs' },
      { name: 'Pinia', icon: 'fas fa-box-archive' },
      { name: 'Astro', icon: 'fas fa-rocket' },
      { name: 'PrimeVue', icon: 'fas fa-layer-group' },
      { name: 'Vuetify', icon: 'fab fa-vuejs' },
      { name: 'Bootstrap', icon: 'fab fa-bootstrap' }
    ]
  },
  {
    label: 'IA, Data & Testing',
    icon: 'fas fa-brain',
    data: [
      { name: 'LLMs & Fine-Tuning', icon: 'fas fa-robot' },
      { name: 'Prompt Engineering', icon: 'fas fa-wand-magic-sparkles' },
      { name: 'Procesamiento NLP', icon: 'fas fa-language' },
      { name: 'PyTest / Unittest', icon: 'fas fa-vial' },
      { name: 'Selenium / Automation', icon: 'fas fa-spider' },
      { name: 'PyPDF2 / PyMuPDF', icon: 'fas fa-file-pdf' }
    ]
  },
  {
    label: 'Bases de Datos & Cloud',
    icon: 'fas fa-cloud-upload-alt',
    data: [
      { name: 'PostgreSQL', icon: 'fas fa-database' },
      { name: 'MySQL', icon: 'fas fa-database' },
      { name: 'Redis', icon: 'fas fa-bolt' },
      { name: 'Docker', icon: 'fab fa-docker' },
      { name: 'AWS S3', icon: 'fab fa-aws' },
      { name: 'Hosting & Deployments', icon: 'fas fa-cloud' },
      { name: 'CI/CD (GitLab CI)', icon: 'fas fa-code-branch' }
    ]
  },
  {
    label: 'Herramientas & Workflow',
    icon: 'fas fa-tools',
    data: [
      { name: 'Git', icon: 'fab fa-git-alt' },
      { name: 'Postman', icon: 'fas fa-paper-plane' },
      { name: 'OpenAPI / Swagger', icon: 'fas fa-file-code' },
      { name: 'DBeaver', icon: 'fas fa-database' },
      { name: 'Jira', icon: 'fab fa-jira' },
      { name: 'Figma', icon: 'fab fa-figma' },
      { name: 'Adobe XD', icon: 'fas fa-palette' }
    ]
  }
]


</script>

<style scoped>
main {
  max-width: 1000px; 
  margin: auto;
  padding: 20px;
}
.section-seo-desc {
  font-size: 0.85rem;
  color: var(--text-dim);
  margin-bottom: 15px;
  padding: 0 10px;
  line-height: 1.4;
}

.label-left h3 {
  font-size: 1.1rem;
  margin: 0;
  font-weight: 600;
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
  width: auto;
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