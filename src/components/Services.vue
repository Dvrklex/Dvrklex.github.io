<template>
  <section class="freelance-section" id="freelance" data-aos="fade-up">
    <div class="container">
      
      <div class="section-header">
        <div class="availability-wrapper" data-aos="zoom-in" data-aos-delay="200">
          <span class="dot"></span>
          <span class="tag">Disponibilidad Actual</span>
        </div>
        
        <h2 class="glitch-title" data-aos="fade-up" data-aos-delay="300">
          Abierto a Proyectos Freelance
        </h2>
        
        <p class="section-desc" data-aos="fade-up" data-aos-delay="400">
          Acompaño a profesionales y empresas en su crecimiento digital, 
          desarrollando experiencias web modernas y sistemas funcionales 
          que convierten visitas en oportunidades.
        </p>
      </div>

      <div class="services-grid">
        <div class="service-card" data-aos="fade-up" data-aos-delay="500">
          <div class="card-icon"><i class="fa-solid fa-laptop-code"></i></div>
          <h3>Experiencia Web & Landing</h3>
          <p>
            Diseño interfaces modernas, claras y orientadas a conversión.
            Cada sección está pensada para transmitir profesionalismo
            y generar confianza desde el primer impacto.
          </p>
          <ul class="features">
            <li><i class="fa-solid fa-check"></i> Diseño visual estratégico</li>
            <li><i class="fa-solid fa-check"></i> Formularios funcionales con envío directo</li>
            <li><i class="fa-solid fa-check"></i> Pago único y transparente</li>
          </ul>
          <div class="card-glow"></div>
        </div>

        <div class="service-card featured" data-aos="fade-up" data-aos-delay="600">
          <div class="card-icon"><i class="fa-solid fa-code-branch"></i></div>
          <h3>Colaboración Estratégica</h3>
          <p>Soporte técnico para agencias de marketing que buscan delegar el desarrollo de alta complejidad.</p>
          <ul class="features">
            <li><i class="fa-solid fa-check"></i> Escalabilidad garantizada</li>
            <li><i class="fa-solid fa-check"></i> Integración fluida en equipos</li>
            <li><i class="fa-solid fa-check"></i> Escalabilidad futura</li>
            <li><i class="fa-solid fa-check"></i> Enfoque a largo plazo</li>
          </ul>
          <div class="card-glow"></div>
        </div>

        <div class="service-card" data-aos="fade-up" data-aos-delay="700">
          <div class="card-icon"><i class="fa-solid fa-gears"></i></div>
          <h3>Sistemas a Medida</h3>
          <p>
            Desarrollo soluciones personalizadas que optimizan procesos,
            automatizan tareas y permiten escalar digitalmente sin límites.
          </p>
          <ul class="features">
            <li><i class="fa-solid fa-check"></i> Automatización de procesos clave</li>
            <li><i class="fa-solid fa-check"></i> Paneles internos y gestión centralizada</li>
            <li><i class="fa-solid fa-check"></i> Escalabilidad y evolución futura</li>
          </ul>
          <div class="card-glow"></div>
        </div>
      </div>

      <div class="cta-wrapper" data-aos="zoom-up" data-aos-delay="800">
        <button @click="scrollToContact" class="cta-button">
          <span>Iniciar Colaboración</span>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>

    </div>
  </section>
</template>

<script setup>
const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
};
</script>

<style scoped>
.freelance-section {
  padding: 100px 20px;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.availability-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(212, 175, 55, 0.1);
  padding: 6px 16px;
  border-radius: 20px;
  border: 1px solid rgba(212, 175, 55, 0.2);
  margin-bottom: 20px;
}

.dot {
  width: 8px;
  height: 8px;
  background: #4ade80;
  border-radius: 50%;
  box-shadow: 0 0 10px #4ade80;
}

.tag {
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 700;
}

.section-header h2 {
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 20px;
  color: #fff;
}

.section-desc {
  color: var(--text-dim);
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.6;
  font-size: 1.1rem;
}

.section-desc strong {
  color: #fff;
  border-bottom: 1px solid var(--accent);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-bottom: 60px;
}

.service-card {
  position: relative;
  background: var(--card-glass);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 40px 30px;
  border-radius: 24px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
}

.service-card:hover {
  transform: translateY(-10px);
  border-color: rgba(212, 175, 55, 0.4);
  background: rgba(255, 255, 255, 0.05);
}

.card-icon {
  font-size: 2rem;
  color: var(--accent);
  margin-bottom: 20px;
  filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.3));
}

.service-card h3 {
  font-size: 1.4rem;
  color: #fff;
  margin-bottom: 15px;
}

.service-card p {
  color: var(--text-dim);
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 20px;
}

.features {
  list-style: none;
  padding: 0;
}

.features li {
  font-size: 0.85rem;
  color: #eee;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.features i {
  color: var(--accent);
  font-size: 0.8rem;
}

.card-glow {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: radial-gradient(circle at top right, rgba(212, 175, 55, 0.05), transparent);
  pointer-events: none;
}

.cta-wrapper {
  text-align: center;
}

.cta-button {
  cursor: pointer;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 18px 36px;
  background: var(--accent);
  color: #111;
  font-family: inherit;
  font-weight: 700;
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(212, 175, 55, 0.2);
}

.cta-button:hover {
  transform: scale(1.05);
  box-shadow: 0 15px 30px rgba(212, 175, 55, 0.4);
  background: #eec441; 
}

@media (max-width: 768px) {
  .section-header h2 { font-size: 2rem; }
  .services-grid { grid-template-columns: 1fr; }
  .service-card { text-align: center; }
  .features li { justify-content: center; }
}
</style>