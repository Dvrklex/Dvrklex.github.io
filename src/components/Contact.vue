<template>
    <main data-aos="zoom-in">
        <section class="contact" id="contact">
            <h2>Contacto</h2>
            <hr />
            <form @submit.prevent="sendEmail" ref="form">
                <label for="name">Nombre y apellido</label>
                <input type="text" id="name" name="user_name" required placeholder="Nombre y apellido..."/>
                
                <label for="email">Email</label>
                <input type="email" id="email" name="user_email" required placeholder="contacto@gmail.com"/>
                
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
                {
                    "name":form.name,
                    "email":form.email,
                    "message":form.message
                },
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
        padding: 20px;
    }
    section {
        padding: 25px;
        background-color: white;
        border-radius: 12px;
        box-shadow: 0 3px 10px rgba(0,0,0,0.3);
        margin-left: auto;
        margin-right: auto;
    }
    h2 {
    text-align: center;
    color: #c9a227;
    font-size: 2rem;
    margin-bottom: 20px;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    label {
        font-weight: bold;
        color: #1a1a1a;
    }

    input, textarea {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 6px;
        font-size: 1rem;
        font-family: inherit;
    }

    textarea {
        resize:none;
        min-height: 100px;
    }

    button {
        background-color: #c9a227;
        color: white;
        padding: 10px 20px;
        font-weight: bold;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        transition: background 0.3s ease;
    }

    button:hover {
        background-color: #b48e1e;
    }

    .success {
        color: green;
        font-weight: bold;
        margin-top: 10px;
    }

    .error {
        color: red;
        font-weight: bold;
        margin-top: 10px;
    }
</style>
