<template>
  <main>
    <section class="timeline" data-aos="zoom-in">
      <h2>Experiencia</h2>
      <hr />

      <div class="timeline-item">
        <div class="timeline-icon"><i class="fas fa-code"></i></div>
        <div class="timeline-content">
          <h3>Desarrollador Back-end</h3>
          <span>Septiembre 2023 - Actualidad</span>
          <ul>
            <li>Diseño e implementación de API Restful con Flask y PostgreSQL.</li>
            <li>Automatización de procesos con Celery y tareas programadas.</li>
            <li>Integración de sockets para comunicación en tiempo real.</li>
            <li>Optimización de consultas SQL y monitoreo del rendimiento.</li>
            <li>Integración de modelos de lenguajes.</li>
            <li>Desarrollo de microservicios desacoplados con autenticación JWT.</li>
          </ul>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-icon"><i class="fas fa-tools"></i></div>
        <div class="timeline-content">
          <h3>Técnico en Computación</h3>
          <span>Febrero 2018 - Julio 2024</span>
          <ul>
            <li>Servicios de armado, mantenimiento y reparación de PCs y laptops.</li>
            <li>Diagnóstico de hardware y software.</li>
            <li>Presupuestos personalizados para clientes.</li>
          </ul>
        </div>
      </div>

    </section>
  </main>
</template>


<style scoped>
    main {
        max-width: 1000px;
        margin: auto;
        padding: 20px;
    }
    .timeline {
    max-width: 1000px;
    margin: 40px auto;
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
    animation: fadeInUp 1.2s ease;
    }

    .timeline h2 {
    text-align: center;
    color: #c9a227;
    font-size: 2rem;
    margin-bottom: 20px;
    }

    .timeline-item {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
    align-items: flex-start;
    }

    .timeline-icon {
    background-color: #c9a227;
    color: white;
    border-radius: 50%;
    padding: 14px;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    }

    .timeline-content {
    flex: 1;
    }

    .timeline-content h3 {
    margin: 0;
    font-size: 1.3rem;
    color: #333;
    }

    .timeline-content span {
    font-size: 0.9rem;
    color: #666;
    display: block;
    margin: 5px 0 10px;
    }

    .timeline-content ul {
    padding-left: 20px;
    margin: 0;
    }

    .timeline-content li {
    margin-bottom: 5px;
    line-height: 1.5;
    }

</style>
