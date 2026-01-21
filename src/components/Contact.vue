<template>
  <main data-aos="fade-up">
    <section class="contact-container" id="contact">
      <div class="contact-grid">
        
        <div class="contact-info">
          <span class="pre-title">CONTACTO</span>
          <h2>¿Hablamos?</h2>
          <p>Estoy abierto a nuevas propuestas, colaboraciones o consultas técnicas para brindarte la mejor solución.</p>
          
          <div class="direct-links">
            <div class="contact-item">
              <i class="fas fa-location-dot"></i>
              <span>Disponible remoto / Global</span>
            </div>
          </div>
        </div>

        <div class="form-wrapper">
          <form @submit.prevent="sendEmail" ref="form">
            <div class="input-group">
              <input type="text" id="name" name="user_name" required placeholder=" " />
              <label for="name">Nombre y apellido</label>
            </div>
            
            <div class="input-group">
              <input type="email" id="email" name="user_email" required placeholder=" " />
              <label for="email">Tu Email</label>
            </div>
            
            <div class="input-group">
              <textarea id="message" name="message" required placeholder=" "></textarea>
              <label for="message">Mensaje</label>
            </div>
            
            <button type="submit" class="submit-btn">
              <span>Enviar Mensaje</span>
              <i class="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>

      </div>
      <Toast position="bottom-right" group="bl" />
    </section>
  </main>
</template>


<script setup>
    import { useToast } from 'primevue/usetoast';
    import { ref } from 'vue'
    import emailjs from 'emailjs-com'

    const toast = useToast();
    const form = ref()
    const success = ref(false)    
    const error = ref(false)

    const sendEmail = () => {
  emailjs
    .sendForm(
      "service_zr90q5c",
      "template_cjoyzl5",
      form.value,
      "ANDNz9EJzKwL-TXan"
    )
    .then(() => {
      toast.add({
        severity: 'success',
        summary: 'Enviado correctamente',
        detail: 'Tu mensaje fue enviado con éxito.',
        life: 4000,
        group: 'bl'
      });

      form.value.reset()
    })
    .catch(() => {
      toast.add({
        severity: 'error',
        summary: 'Error al enviar',
        detail: 'Ocurrió un problema. Intenta nuevamente.',
        life: 4000,
        group: 'bl'
      });
    });
}

</script>

<style scoped>
main {
  max-width: 900px;  
  margin: auto;
  padding: 40px 20px;
}

.contact-container {
  background: var(--card-glass);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
}

 .contact-info {
  background: rgba(255, 255, 255, 0.02);
  padding: 40px;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
}

.pre-title { color: var(--accent); font-size: 0.7rem; font-weight: 800; letter-spacing: 2px; }
.contact-info h2 { font-size: 2.5rem; color: #fff; margin: 10px 0; }
.contact-info p { color: #aaa; font-size: 0.9rem; line-height: 1.6; margin-bottom: 30px; }

.direct-links { display: flex; flex-direction: column; gap: 15px; }
.contact-item { 
  display: flex; 
  align-items: center; 
  gap: 12px; 
  color: #ddd; 
  text-decoration: none;
  font-size: 0.85rem;
}
.contact-item i { color: var(--accent); }

 .form-wrapper { padding: 40px; }
form { display: flex; flex-direction: column; gap: 25px; }

.input-group { position: relative; width: 100%; }

.input-group input, 
.input-group textarea {
  width: 100%;
background: linear-gradient(to bottom, transparent 90%, rgba(201, 162, 39, 0.02));  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 10px 0;
  color: #fff;
  font-size: 1rem;
  transition: 0.3s;
}

.input-group label {
  position: absolute;
  top: 10px; left: 0;
  color: #666;
  pointer-events: none;
  transition: 0.3s;
}

 .input-group input:focus ~ label,
.input-group input:not(:placeholder-shown) ~ label,
.input-group textarea:focus ~ label,
.input-group textarea:not(:placeholder-shown) ~ label {
  top: -15px;
  font-size: 0.75rem;
  color: var(--accent);
}

.input-group input:focus, 
.input-group textarea:focus {
  outline: none;
  border-bottom-color: var(--accent);
}

textarea { min-height: 80px; resize: none; }

.submit-btn {
  background: rgba(201, 162, 39, 0.02);
  color: #c9a227;
  border: 1px solid rgba(201, 162, 39, 0.3);
  padding: 12px 28px;
  border-radius: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.submit-btn:hover {
  background: transparent;
  border-color: #f5d742;
  color: #fff;
  box-shadow: 0 0 20px rgba(201, 162, 39, 0.2);
  transform: scale(1.01);
}
 .submit-btn i {
  transition: transform 0.4s ease;
}

.submit-btn:hover i {
  transform: translate(5px, -5px);  
  color: #f5d742;
}

 .contact-info h2 {
  font-weight: 800;
  background: linear-gradient(180deg, #fff 0%, #666 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.9;
}
 @media (max-width: 768px) {
  .contact-grid { grid-template-columns: 1fr; }
  .contact-info { border-right: none; border-bottom: 1px solid rgba(255, 255, 255, 0.05); }
}
</style>