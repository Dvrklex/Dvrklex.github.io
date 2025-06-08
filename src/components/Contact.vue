<template>
  <main data-aos="zoom-in">
    <section class="contact" id="contact">
      <h2>Contacto</h2>
      <hr />
      <form @submit.prevent="sendEmail" ref="form">
        <label for="name">Nombre y apellido</label>
        <input type="text" id="name" name="user_name" required placeholder="Nombre y apellido..." />
        
        <label for="email">Email</label>
        <input type="email" id="email" name="user_email" required placeholder="contacto@gmail.com" />
        
        <label for="message">Mensaje</label>
        <textarea id="message" name="message" required placeholder="Dejame tu mensaje aquí..."></textarea>
        
        <button type="submit">Enviar</button>
      </form>
      <p v-if="success" class="success">¡Mensaje enviado con éxito!</p>
      <p v-if="error" class="error">Ocurrió un error. Intenta más tarde.</p>
    </section>
  </main>
</template>


<script setup>
    import { ref } from 'vue'
    import emailjs from 'emailjs-com'


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
      success.value = true
      error.value = false
      form.value.reset()
    })
    .catch(() => {
      success.value = false
      error.value = true
    })
}

</script>

<style scoped>
main {
  max-width: 1000px;
  margin: auto;
  padding: 40px 20px;
}

.contact {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 30px;
  padding: 40px;
  backdrop-filter: blur(16px);
  box-shadow: 0 0 60px rgba(255, 215, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #eee;
  position: relative;
  overflow: hidden;
}

.contact::before {
  content: "";
  position: absolute;
  top: -20%;
  left: -20%;
  width: 160%;
  height: 160%;
  background: radial-gradient(circle at top left, rgba(201, 162, 39, 0.15), transparent 60%);
  z-index: 0;
  animation: glow 8s infinite linear;
}

@keyframes glow {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(30px, 20px); }
}

h2 {
  text-align: center;
  color: var(--primary);
  font-size: 2.2rem;
  margin-bottom: 20px;
  font-family: 'Unica One', cursive;
  z-index: 1;
  position: relative;
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 1;
  position: relative;
}

label {
  font-weight: 600;
  color: #ddd;
  font-size: 0.95rem;
  margin-bottom: -10px;
}

input,
textarea {
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 12px 16px;
  font-size: 1rem;
  color: #eee;
  font-family: inherit;
  transition: all 0.3s ease;
  box-shadow: inset 0 0 8px rgba(255, 255, 255, 0.05);
}

input::placeholder,
textarea::placeholder {
  color: #999;
  font-style: italic;
}

input:focus,
textarea:focus {
  outline: none;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 12px var(--primary);
}

textarea {
  resize: none;
  min-height: 120px;
}

button {
  background: var(--primary);
  color: #111;
  padding: 12px 24px;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(255, 215, 0, 0.4);
  align-self: center;
  text-transform: uppercase;
  letter-spacing: 1px;
}

button:hover {
  background: #e0b62c;
  transform: scale(1.05);
}

.success,
.error {
  margin-top: 15px;
  text-align: center;
  font-weight: bold;
  animation: fadeIn 0.5s ease-in-out;
}

.success {
  color: #38e38e;
}

.error {
  color: #ff4f4f;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
