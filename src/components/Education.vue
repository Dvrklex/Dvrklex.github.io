<template>
  <main data-aos="fade-up">
    <section class="education-section">
      <div class="education-header">
        <span class="pre-title">FORMACIÓN ACADÉMICA</span>
        <h2>Educación & Certificados</h2>
        <div class="header-line"></div>
      </div>

      <div class="education-grid">
        <div 
          class="education-card" 
          v-for="(item, index) in education" 
          :key="index"
        >
          <div class="card-glow"></div>
          <div class="card-content">
            <div class="icon-box">
              <i :class="item.icon"></i>
            </div>
            <div class="text-group">
              <h3>{{ item.name }}</h3>
              <p class="description">{{ item.description }}</p>
            </div>
          </div>
          <div class="card-border"></div>
        </div>
      </div>
    </section>
  </main>
</template>

  <script setup>
      const education = [
          { name: 'Técnico Superior en Desarrollo de Software', description: 'Marzo 2021 - Noviembre 2023 - Instituto Tecnológico de Río Cuarto (iTec)', icon: 'fas fa-graduation-cap' },  
          { name: 'Certificación en Django', description: 'Julio 2023 - Openbootcamp', icon: 'fas fa-certificate' },
          { name: 'Certificación en Python', description: 'Junio 2023 - Openbootcamp', icon: 'fas fa-certificate' },
          { name: 'Certificación Argentina Programa', description: 'Octubre 2021 - Junio 2022 - Plan Argentina Programa', icon: 'fas fa-laptop-code' },
          { name: 'Comunicación', description: 'Febrero 2014 - Diciembre 2019 - Especialidad Comunicación - Instituto Secundario Juan Pascual Pringles', icon:'fas fa-comments' },
          { name: 'Técnico en Armado, Mantenimiento y Reparaciones de PC', description: 'Finalizado en 2017 - CIECLO', icon:'fas fa-wrench' },
      ]
  </script>

  <style scoped>
main {
  max-width: 1100px;
  margin: auto;
  padding: 40px 20px;
}

.education-section {
  position: relative;
}

 .education-header {
  text-align: center;
  margin-bottom: 50px;
}

.pre-title {
  color: var(--accent);
  letter-spacing: 4px;
  font-size: 0.7rem;
  font-weight: 700;
}

.education-section h2 {
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--text-main);
  margin: 5px 0;
}

.header-line {
  width: 60px;
  height: 3px;
  background: var(--accent);
  margin: 10px auto;
  border-radius: 2px;
}

 .education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}

.education-card {
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 24px;
  padding: 25px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  align-items: center;
}

.education-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(212, 175, 55, 0.3);
}

.card-glow {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(212, 175, 55, 0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s;
}

.education-card:hover .card-glow {
  opacity: 1;
}

.card-content {
  position: relative;
  z-index: 2;
  display: flex;
  gap: 20px;
  align-items: center;
}

.icon-box {
  width: 50px;
  height: 50px;
  background: rgba(212, 175, 55, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  font-size: 1.4rem;
  flex-shrink: 0;
  transition: all 0.3s ease;
}
.icon-box i {
  transition: all 0.3s ease;
}
.education-card:hover .icon-box {
  background: var(--accent);
  color: #000;
  animation: icon-glow 1.5s infinite ease-in-out;
  border-color: #fff;
}

.education-card:hover .icon-box i {
  animation: icon-activate 0.6s ease-out forwards;
}
@keyframes icon-activate {
  0% { transform: scale(1) rotate(0deg); }
  25% { transform: scale(1.2) rotate(10deg); }
  50% { transform: scale(1) rotate(-10deg); }
  75% { transform: scale(1.1) rotate(5deg); }
  100% { transform: scale(1) rotate(0deg); }
}

@keyframes icon-glow {
  0% { box-shadow: 0 0 5px var(--accent); }
  50% { box-shadow: 0 0 20px var(--accent), 0 0 30px rgba(212, 175, 55, 0.4); }
  100% { box-shadow: 0 0 5px var(--accent); }
}
.text-group h3 {
  font-size: 1.05rem;
  color: var(--text-main);
  margin: 0 0 5px 0;
  line-height: 1.3;
}

.description {
  font-size: 0.85rem;
  color: var(--text-dim);
  margin: 0;
  line-height: 1.5;
}

@media (max-width: 600px) {
  .education-grid {
    grid-template-columns: 1fr;
  }
}
</style>