  <template>
  <main data-aos="zoom-in">
    <section class="education-section">
      <h2>Formación</h2>
      <hr>
      <div
        class="education-item"
        v-for="(item, index) in education"
        :key="index"
      >
        <div class="education-icon"><i :class="item.icon"></i></div>
        <div class="education-content">
          <h3>{{ item.name }}</h3>
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
.education-section {
  background: linear-gradient(to right, #1e1e1e, #272727);
  color: #f5f5f5;
  padding: 10px;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
}

.education-section h2 {
  text-align: center;
  color: var(--primary);
  font-size: 3rem;
  margin-bottom: 30px;
  font-family: 'Unica One', cursive;
}

.education-item {
  background: #2f2f2f;
  border-radius: 20px;
  padding: 20px 24px;
  margin-bottom: 24px;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  box-shadow: 0 4px 14px rgba(0,0,0,0.3);
  transition: transform 0.3s ease;
}

.education-item:hover {
  transition: 0.5s;
  cursor: pointer;
  box-shadow: 0 0px 10px var(--light-yellow);
  border: 1px solid yellow;
}

.education-icon {
  font-size: 1.6rem;
  background: var(--primary);
  color: #bd851f;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 3px 10px rgba(0,0,0,0.2);
}
.education-icon:hover{
  color: var(--white);
  transition: 0.5s;
  cursor: pointer;
  box-shadow: 0 0px 10px var(--white);
  border: 1px solid var(--white);
}
.education-content {
  flex: 1;
}

.education-content h3 {
  font-size: 1.1rem;
  margin: 0;
  color: var(--light-yellow);
  font-weight: 600;
}

.education-content span {
  font-size: 0.9rem;
  font-style: italic;
  color: #e9e4e4;
  display: block;
  margin-top: 4px;
}


  </style>
