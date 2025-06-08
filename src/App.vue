<template>
  <div>
    <div v-if="showLoader" class="loader-screen">
      <div class="loader-content">
        <h1>DVRKLEX</h1>
        <p class="dots">Cargando</p>
      </div>
    </div>

    <!-- Tu contenido principal se muestra cuando el loader desaparece -->
    <div v-else id="app">
      <NavBar />
      <Header />
      <main>
        <Profile />
        <Experience />
        <Education />
        <Skills />
        <ComingSoon />
        <!-- <Projects /> -->
        <Contact />
      </main>
    </div>
  </div>
</template>


<script setup>
import NavBar from './components/NavBar.vue'
import Header from './components/Header.vue'
import Profile from './components/Profile.vue'
import Experience from './components/Experiencie.vue'
import Education from './components/Education.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import Projects from './components/Projects.vue'
import ComingSoon from './components/ComingSoon.vue'
import { ref, onMounted } from 'vue'

const showLoader = ref(true)

onMounted(() => {
  setTimeout(() => {
    showLoader.value = false
  }, 1500)
})
</script>

<style>
  * {
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

  body {
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f4f4f4;
      color: #1a1a1a;
      line-height: 1.6;
      transition: background 0.3s ease;
  }
  .loader-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #111;
  color: #f5d742;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeOut 1.5s ease-out forwards;
  background: linear-gradient(120deg, #0d0d0d, #1a1a1a, #292929, #0d0d0d);
  background-size: 400% 400%;
  animation: backgroundMove 3s ease-in-out infinite;

}

.loader-content {
  text-align: center;
  animation: popIn 0.8s ease-out;
}

.loader-content h1 {
  font-size: 5rem;
  font-weight: bold;
  letter-spacing: 4px;
  margin: 0;
  
}

.dots::after {
  content: '';
  animation: dots 1s steps(3, end) infinite;
}
.loader-screen::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background-image: linear-gradient(90deg, rgba(245, 215, 66, 0.05) 1px, transparent 1px),
                    linear-gradient(rgba(245, 215, 66, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
  animation: gridDrift 4s linear infinite;
  z-index: 0;
}
@keyframes gridDrift {
  0% { transform: translate(0, 0); }
  100% { transform: translate(40px, 40px); }
}

@keyframes backgroundMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes dots {
  0% { content: ''; }
  33% { content: '.'; }
  66% { content: '..'; }
  100% { content: '...'; }
}

@keyframes fadeOut {
  0% { opacity: 1; }
  100% { opacity: 0; visibility: hidden; }
}

@keyframes popIn {
  0% { opacity: 0; transform: scale(0.9); }
  100% { opacity: 1; transform: scale(1); }
}
.cv-toast {
    position: fixed;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%) translateY(100%);
    background: #f5d742;
    color: #111;
    padding: 12px 20px;
    border-radius: 8px;
    font-weight: bold;
    opacity: 0;
    transition: all 0.3s ease;
    z-index: 9999;
  }
  .cv-toast.visible {
    opacity: 1;
    transform: translateX(-50%) translateY(0%);
  }
</style>
