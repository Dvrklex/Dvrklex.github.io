<template>
   <main data-aos="zoom-in">
        <section class="skills">
            <h2>Habilidades</h2>
            <hr>
            <h3>Lenguajes y Tecnolog&iacute;as</h3>
            <div class="skills-grid">
                <div class="skill-card" v-for="(skill, index) in tecnologies" :key="index">
                <i :class="skill.icon"></i><br>
                <span>{{ skill.name }}</span>
                </div>
            </div>
            <h3>Frameworks y Librer&iacute;as</h3>
            <div class="skills-grid">
                <div class="skill-card" v-for="(skill, index) in frameworks" :key="index">
                <i :class="skill.icon"></i><br>
                <span>{{ skill.name }}</span>
                </div>
            </div>
            <h3>Otras Herramientas</h3>
            <div class="skills-grid">
                <div class="skill-card" v-for="(skill, index) in others" :key="index">
                <i :class="skill.icon"></i><br>
                <span>{{ skill.name }}</span>
                </div>
            </div>
        </section>
            
            
        
   </main>
</template>
<script setup>
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
        { name: 'SocketIO', icon: 'fa fa-code'}
    ]
    const others = [
        { name: 'Visual Studio Code', icon: 'fa fa-keyboard'},
        { name: 'Adobe XD', icon: 'fa fa-keyboard'},
        { name: 'DBeaver', icon: 'fas fa-database'},
        { name: 'Git', icon: 'fab fa-git'},
        { name: 'Docker', icon: 'fab fa-docker'}
    ]
</script>

<style scoped>
main {
  max-width: 1000px;
  margin: auto;
  padding: 20px;
}

.skills {
  padding: 40px;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(20, 20, 20, 0.7), rgba(30, 30, 30, 0.85));
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  color: #eee;
  animation: fadeInUp 1s ease;
}

h2 {
  text-align: center;
  font-size: 2.2rem;
  color: var(--primary);
  margin-bottom: 30px;
  font-family: 'Unica One', cursive;
  letter-spacing: 1px;
}

.skill-group h3 {
  font-size: 1.3rem;
  margin: 20px 0 10px;
  color: #f0c94b;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 24px;
  margin-bottom: 30px;
}

.skill-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(6px);
  position: relative;
}

.skill-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 6px 20px rgba(255, 215, 0, 0.3);
}

.skill-card i {
  font-size: 2.4rem;
  color: var(--primary);
  margin-bottom: 10px;
}

.skill-card span {
  display: block;
  margin-top: 5px;
  font-weight: 600;
  color: #fdfdfd;
  font-size: 0.95rem;
}
</style>

