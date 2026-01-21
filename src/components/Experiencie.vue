<template>
  <main>
    <section class="timeline" data-aos="fade-up">
      <div class="timeline-header">
        <span class="pre-title">MI TRAYECTORIA</span>
        <h2>Experiencia</h2>
        <div class="header-line"></div>
      </div>

      <div class="timeline-container">
        <div class="vertical-line"></div>

        <div class="timeline-item">
          <div class="timeline-icon"><i class="fas fa-code"></i></div>
          <div class="timeline-content">
            <div class="content-header">
              <h3>Desarrollador Backend</h3>
              <span class="date-badge">Septiembre 2023 - Actualidad</span>
            </div>
            <ul>
              <li>Diseño e implementación de <strong>APIs RESTful</strong> en Flask/PostgreSQL garantizando alta disponibilidad.</li>
              <li>Automatización de flujos complejos con <strong>Celery</strong> y tareas programadas.</li>
              <li>Sistemas en tiempo real mediante <strong>WebSockets</strong> para módulos interactivos.</li>
              <li>Optimización avanzada de consultas SQL y monitoreo de performance.</li>
              <li>Integración de <strong>LLMs</strong> y arquitecturas de microservicios con autenticación JWT.</li>
            </ul>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-icon"><i class="fas fa-tools"></i></div>
          <div class="timeline-content">
            <div class="content-header">
              <h3>Técnico en Computación</h3>
              <span class="date-badge">Febrero 2018 - Julio 2024</span>
            </div>
            <ul>
              <li>Mantenimiento crítico y diagnóstico de hardware de alto rendimiento.</li>
              <li>Resolución de problemas complejos de software y optimización de sistemas.</li>
              <li>Gestión técnica de presupuestos y asesoramiento especializado.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>


<style scoped>
main {
  max-width: 1000px;
  margin: auto;
  padding: 40px 20px;
}

.timeline {
  background: var(--card-glass);
  backdrop-filter: blur(20px);
  padding: 20px 35px;
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
}

.timeline-header {
  text-align: center;
  margin-bottom: 50px;
}

.pre-title {
  color: var(--accent);
  letter-spacing: 4px;
  font-size: 0.7rem;
  font-weight: 700;
}

.timeline h2 {
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


.timeline-container {
  position: relative;
  padding-left: 40px; 
}

.vertical-line {
  position: absolute;
  left: 17px;
  top: 10px;
  bottom: 10px;
  width: 2px;
  background: linear-gradient(to bottom, var(--accent), transparent);
  opacity: 0.2;
}

.timeline-item {
  margin-bottom: 50px;
  display: flex;
  gap: 30px;
  position: relative;
  z-index: 1;
}

.timeline-icon {
  flex-shrink: 0;
  background: #1a1a1a;
  color: var(--accent);
  width: 36px;
  height: 36px;
  border-radius: 10px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--accent);
  box-shadow: 0 0 15px rgba(212, 175, 55, 0.2);
  z-index: 2;
  transition: all 0.3s ease;
}

.timeline-item:hover .timeline-icon {
  background: var(--accent);
  color: #000;
  transform: scale(1.1) rotate(10deg);
}

.timeline-content {
  flex: 1;
  background: rgba(255, 255, 255, 0.02);
  padding: 25px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease, border 0.3s ease;
}

.timeline-item:hover .timeline-content {
  border-color: rgba(212, 175, 55, 0.3);
  transform: translateX(10px);
}

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
}

.timeline-content h3 {
  margin: 0;
  font-size: 1.4rem;
  color: var(--text-main);
  font-weight: 800;
}

.date-badge {
  background: rgba(212, 175, 55, 0.1);
  color: var(--accent);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid rgba(212, 175, 55, 0.2);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  color: var(--text-dim);
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
  line-height: 1.6;
}

li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: bold;
}

strong {
  color: var(--text-main);
  font-weight: 600;
}


@media (max-width: 768px) {
  .timeline {
    padding: 30px 20px;
    border-radius: 24px;
  }

  .timeline h2 {
    font-size: 2rem;
  }

  .timeline-container {
    padding-left: 35px; 
  }

  .vertical-line {
    left: 14px; 
  }

  .timeline-icon {
    width: 30px;
    height: 30px;
    font-size: 0.8rem;
  }

  .timeline-item {
    gap: 15px; 
  }

  .timeline-content {
    padding: 20px;
  }

  .timeline-content h3 {
    font-size: 1.1rem;
    width: 100%;
  }

  .date-badge {
    order: -1;
    font-size: 0.65rem;
    padding: 3px 10px;
  }

  .timeline-item:hover .timeline-content {
    transform: none; 
    border-color: var(--accent);
  }
}

@media (max-width: 480px) {
  .timeline-container {
    padding-left: 15px;
  }
  
  .vertical-line, .timeline-icon {
    display: none;
  }

  .timeline-container {
    padding-left: 0;
  }

  .timeline-content {
    border-left: 3px solid var(--accent); 
    border-radius: 12px;
  }
}
</style>