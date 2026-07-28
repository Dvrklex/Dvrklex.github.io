<template>
  <main data-aos="zoom-in">
    <section class="profile">
      <h2><i class="fa-solid fa-terminal"></i> Perfil Profesional | Desarrollador Backend</h2>
      <p>
        Especialista en <strong>desarrollo backend</strong> 
        enfocado en la arquitectura de <strong>APIs REST robustas y escalables</strong>, 
        integración de sistemas en tiempo real con <strong>WebSockets</strong> y optimización de bases de datos. 
        Diseño arquitecturas de <strong>microservicios</strong> y automatizo procesos críticos para maximizar el rendimiento
        y la eficiencia técnica.
      </p>
    </section>
  </main>
</template>

<style scoped>
main {
  max-width: 1000px;
  margin: auto;
  padding: 20px;
}

section.profile {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 30px;
  margin-top: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.1);
  color: #eaeaea;
  transition: 0.3s ease;
}

section.profile:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.15);
}

h2 {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 2rem;
  color: #f8d66d;
  border-bottom: 2px solid #f8d66d50;
  padding-bottom: 10px;
  margin-bottom: 20px;
  font-family: 'Unica One', cursive;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: justify;
}
</style>
