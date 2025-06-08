<template>
  <header data-aos="zoom-in">
    <section class="title">
      <div>
        <h1>ALEXIS ROSALES</h1>
        <p><span ref="typedTarget" class="ocupation"></span></p>
      </div>
      <!-- <img src="https://media.licdn.com/dms/image/v2/D4E03AQHtisjmwwmy-A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1678930437082?e=1754524800&v=beta&t=lSvlNswczaZIkNYTRqVrw5o3pkJxpynvaPEbEYyPOOQ" alt="Foto de perfil" /> -->
       <div class="image-wrapper">
  <img src="https://media.licdn.com/dms/image/v2/D4E03AQHtisjmwwmy-A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1678930437082?e=1754524800&v=beta&t=lSvlNswczaZIkNYTRqVrw5o3pkJxpynvaPEbEYyPOOQ" alt="Foto de perfil" />
</div>

    </section>
    <section class="social-info">
  <ul class="social-links">
    <li>
      <a href="tel:+5493583439544" title="Teléfono" target="_blank">
        <i class="fas fa-phone"></i>
        <!-- <span>+54 9 358 343 9544</span> -->
      </a>
    </li>
    <li>
      <a href="mailto:dvrklex@gmail.com" title="Email">
        <i class="fas fa-envelope"></i>
        <!-- <span>dvrklex@gmail.com</span> -->
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/dvrklex" title="LinkedIn" target="_blank">
        <i class="fab fa-linkedin"></i>
        <!-- <span>linkedin.com/in/dvrklex</span> -->
      </a>
    </li>
    <li>
      <a href="https://github.com/Dvrklex" title="GitHub" target="_blank">
        <i class="fab fa-github"></i>
        <!-- <span>github.com/Dvrklex</span> -->
      </a>
    </li>
    <li>
      <a href="https://instagram.com/dvrklex" title="Instagram" target="_blank">
        <i class="fab fa-instagram"></i>
        <!-- <span>@dvrklex</span> -->
      </a>
    </li>
    <li>
      <a href="https://www.google.com/maps/place/R%C3%ADo+Cuarto,+C%C3%B3rdoba" title="Ubicación" target="_blank">
        <i class="fas fa-map-marker-alt"></i>
        <!-- <span>Río Cuarto, Córdoba</span> -->
      </a>
    </li>
  </ul>
</section>
  </header>
</template>
<script setup>
  import { onMounted, ref, nextTick } from 'vue'
  import Typed from 'typed.js'

  const typedTarget = ref(null)

  onMounted(() => {
    nextTick(() => {
      const options = {
        strings: ['Desarrollador de Software', 'Desarrollador Backend', 'Software Developer', 'Backend Developer'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        backDelay: 1500,
        showCursor: true,
        cursorChar: '|'
      }

      if (typedTarget.value) {
        new Typed(typedTarget.value, options)
      } else {
        console.warn('⚠️ No se encontró typedTarget')
      }
    })
  })
</script>

<style scoped>
  header {
    max-width: 1000px;
    margin: auto;
    padding: 30px 20px;
    border-radius: 12px;
    color: #f4f4f4;
    position: relative;
    overflow: hidden;
    background: radial-gradient(circle at top left, #1f1f1f, #111);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
    animation: fadeIn 1s ease;
  }

  header::before {
    content: "";
    position: absolute;
    top: -50px;
    left: -50px;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,215,0,0.1), transparent);
    transform: rotate(25deg);
    z-index: 0;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin: auto 50px;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
  }
  .title h1 {
    font-family: 'Unica One', sans-serif;
    font-size: 3rem;
    letter-spacing: 8px;
    margin: 0;
    background: linear-gradient(90deg, #f5d742, #c9a227);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 4s infinite ease-in-out;
    cursor: default;
    user-select: none;
  }
  @keyframes shine {
    0% { filter: brightness(1); }
    50% { filter: brightness(1.4); }
    100% { filter: brightness(1); }
  }
  /* .title h1 {
    font-size: 3rem;
    font-weight: 900;
    color: #f5d742;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
    margin: 0;
  } */

  .title p {
    font-size: 1.3rem;
    font-weight: 300;
    letter-spacing: 1px;
    color: #ccc;
    margin: 5px 0 0;
  }

  .ocupation {
    font-size: 1.3rem;
    color: #f5d742;
    font-weight: 400;
    letter-spacing: 1px;
  }

  .image-wrapper {
  padding: 6px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f5d742, #c9a227);
  display: inline-block;
  box-shadow: 0 0 20px rgba(245, 215, 66, 0.3);
  animation: haloGlow 3s ease-in-out infinite;
  transition: transform 0.3s ease;
}

.image-wrapper:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px rgba(245, 215, 66, 0.5);
}

.image-wrapper img {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 1px solid #111;
  display: block;
}

@keyframes haloGlow {
  0%, 100% {
    box-shadow: 0 0 10px rgba(245, 215, 66, 0.3),
                0 0 20px rgba(245, 215, 66, 0.4);
  }
  50% {
    box-shadow: 0 0 14px rgba(245, 215, 66, 0.4),
                0 0 30px rgba(245, 215, 66, 0.6);
  }
}

  .social-info {
  margin-top: 30px;
  text-align: center;
}

.social-links {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.social-links li {
  background: #1f1f1f;
  border: 1px solid #ffd700;
  padding: 12px 22px;
  border-radius: 10px;
  transition: all 0.3s ease;
  display: flex;
  align-items:center;
  gap: 12px;
  position: relative;
  box-shadow: 0 0 0 transparent;

}

.social-links li:hover {
  background-color: #292929;
  transform: translateY(-5px) scale(1.05);
  border-color: #f5d742;
  box-shadow: 0 0 12px rgba(245, 215, 66, 0.4);
  cursor: pointer;
}
.social-links li:hover i {
  transform: rotate(-15deg) scale(1.1);
  color: #ffd700;
  transition: transform 0.3s ease, color 0.3s ease;
}

.social-links a {
  color: #f5d742;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  font-weight: 500;
}

.social-links i {
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.social-links li:hover i {
  color: #ffd100;
}
@media screen and (max-width: 600px) {
  .title {
    text-align: center;
  }
  header img {
    margin: auto;
  }
  .social-links {
    flex-direction: column;
    gap: 20px;
  }

  .social-links li {
    width: 90%;
    justify-content: center;
  }

  .social-links a {
    font-size: 1.1rem;
  }

  .social-links i {
    font-size: 1.5rem;
  }
}

</style>
