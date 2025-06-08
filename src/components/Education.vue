<template>
  <main data-aos="zoom-in">
    <section class="timeline">
      <h2>Formación</h2>
      <hr />
      <div class="timeline-item"  v-for="(item, index) in education" :key="index">
        <div class="timeline-icon"><i :class="item.icon"></i></div>
        <div class="timeline-content">
          <h3> {{ item.name }}</h3>
          <span>{{ item.description }}</span>
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
