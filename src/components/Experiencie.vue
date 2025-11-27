<template>
  <main>
    <section class="timeline" data-aos="zoom-in">
      <h2>Experiencia</h2>
      <hr />

      <div class="timeline-item">
        <div class="timeline-icon"><i class="fas fa-code"></i></div>
        <div class="timeline-content">
          <h3>Desarrollador Backend</h3>
          <span>Septiembre 2023 - Actualidad</span>
          <ul>
            <li>Diseñé e implementé APIs RESTful en Flask/PostgreSQL garantizando escalabilidad y
              seguridad.
            </li>
            <li>Automatización de procesos con Celery y tareas programadas.</li>
            <li>Integré comunicación en tiempo real con WebSockets, mejorando la experiencia del
                usuario en módulos interactivos.
            </li>
            <li>Optimización de consultas SQL y monitoreo del rendimiento.</li>
            <li>Integración de modelos de lenguajes.</li>
            <li>Desarrollé microservicios desacoplados para distintos módulos del sistema, integrando
                bases de datos independientes y autenticación JWT
            </li>
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
      background: linear-gradient(135deg, #1a1a1a, #262626);
      color: #eee;
      padding: 20px;
      border-radius: 28px 8px 28px 8px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
      position: relative;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: background 0.5s ease;
    }

    .timeline::before {
      content: "";
      position: absolute;
      top: -10%;
      left: -10%;
      width: 120%;
      height: 120%;
      background: radial-gradient(circle at top left, rgba(201, 162, 39, 0.1), transparent 60%);
      z-index: 0;
      animation: glowMove 8s linear infinite;
    }

    @keyframes glowMove {
      0% { transform: translate(0, 0); }
      50% { transform: translate(30px, 20px); }
      100% { transform: translate(0, 0); }
    }

    .timeline h2 {
      text-align: center;
      color: var(--primary);
      font-size: 3rem;
      margin-bottom: 10px;
      font-family: 'Unica One', cursive;
    }

    .timeline-item {
      margin-bottom: 40px;
      display: flex;
      gap: 24px;
      position: relative;
      z-index: 1;
    }
    .timeline-content h3 {
      margin: 0;
      font-size: 1.3rem;
      color: #f8d66d;
      font-weight: 600;
    }

    .timeline-content span {
      font-size: 0.9rem;
      color: #aaa;
      display: block;
      margin: 6px 0 12px;
      font-style: italic;
    }


    .timeline-icon {
      background: linear-gradient(145deg, #f5d742, #c9a227);
      color: black;
      width: 56px;
      height: 56px;
      border-radius: 16px;
      font-size: 1.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 15px rgba(201, 162, 39, 0.5);
      transition: transform 0.3s ease;
    }

    .timeline-icon:hover {
      transform: rotate(12deg) scale(1.1);
      cursor: pointer;
    }

    .timeline-content {
      flex: 1;
      background-color: #2a2a2a;
      padding: 24px;
      border-radius: 20px;
      border-left: 4px solid var(--primary);
      box-shadow: inset 0 0 0 2px #3b3b3b;
    }

</style>
