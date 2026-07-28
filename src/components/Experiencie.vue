<script setup>
const experiences = [
  {
    id: 1,
    role: 'Desarrollador Full Stack Freelancer',
    icon: 'fas fa-laptop-code',
    date: 'Enero 2024 - Actualidad',
    items: [
      'Desarrollo e implementación end-to-end de aplicaciones web y landing pages interactivas en Vue.js para comercios locales, priorizando arquitecturas frontend ultraligeras, altos puntajes de rendimiento (Core Web Vitals) y diseño 100% responsive.',
      'Integración de Google Sheets API como CMS/backend sin servidor para control de stock e inventario en tiempo real, ofreciendo una solución de gestión funcional y de costo operativo cero para el cliente.',
      'Estrategias de SEO técnico y posicionamiento local enfocado en estructura de datos y velocidad de carga, impulsando la visibilidad orgánica en búsquedas comerciales.',
      'Diseño UX/UI orientado a la conversión mediante la creación de componentes interactivos, botones de acción directos y flujos optimizados para la captura de clientes.',
      'Prototipado rápido y construcción de Productos Mínimos Viables (MVPs) para la prospección comercial, levantamiento de requerimientos y validación de necesidades de negocio.'
    ]
  },
  {
    id: 2,
    role: 'Desarrollador Backend (Python)',
    icon: 'fas fa-code',
    date: 'Septiembre 2023 - Actualidad',
    items: [
      'Arquitectura y desarrollo de un sistema de gestión integral (EHR/HIS) para el sector salud (centros médicos públicos y privados), bajo estrictos criterios de escalabilidad, mantenibilidad y alta disponibilidad.',
      'Diseño e implementación de APIs RESTful con Flask, FastAPI y SQLAlchemy sobre PostgreSQL, construyendo diagramas Entidad-Relación (ER) y modelos relacionales complejos para datos clínicos de alta criticidad.',
      'Despliegue de microservicios desacoplados con autenticación JWT y bases de datos independientes. Desarrollo de un microservicio especializado en generación de PDFs que descentralizó el procesamiento, liberando entre un 30% y 40% de recursos en los servidores del cliente.',
      'Implementación de comunicación bidireccional en tiempo real con WebSockets para mensajería interna, notificaciones instantáneas y transmisión de eventos en vivo.',
      'Automatización de tareas asíncronas y flujos complejos en segundo plano utilizando Celery y planificadores de ejecuciones.',
      'Integración de Inteligencia Artificial mediante LLMs y técnicas de NLP para análisis de mensajería y extracción automatizada de datos desde PDFs. Aplicación de Prompt Engineering y Fine-Tuning en modelos de OpenAI para asistencia clínica y resúmenes médicos automatizados.'
    ]
  },
  {
    id: 3,
    role: 'Técnico en Computación',
    icon: 'fas fa-tools',
    date: 'Febrero 2018 - Julio 2024',
    items: [
      'Mantenimiento crítico, diagnóstico avanzado y ensamblado de hardware de alto rendimiento.',
      'Resolución de incidencias complejas de software, configuración de redes y optimización integral de sistemas.',
      'Gestión técnica de presupuestos y asesoramiento personalizado para clientes e infraestructura tecnológica.'
    ]
  }
]

</script>
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

        <div
          v-for="exp in experiences"
          :key="exp.id"
          class="timeline-item"
        >
          <div class="timeline-icon">
            <i :class="exp.icon"></i>
          </div>

          <div class="timeline-content">
            <div class="content-header">
              <h3>{{ exp.role }}</h3>
              <span class="date-badge">{{ exp.date }}</span>
            </div>

            <ul>
              <li v-for="(item, index) in exp.items" :key="index">
                {{ item }}
              </li>
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