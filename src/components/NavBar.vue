<template>
  <nav class="navbar-container">
    <div class="nav-content">
      <span class="logo" data-text="DVRKLEX">DVRKLEX</span>
      
      <ul class="nav-links">
        <li><a href="#" class="nav-item">Inicio</a></li>
        <li><a href="#contact" class="nav-item">Contacto</a></li>
        <li>
          <button 
            class="cv-button elite" 
            @click="handleDownload"
            aria-label="Descargar Curriculum"
          >
            <div class="btn-content">
              <i class="fa-solid fa-download"></i>
              <span> CV</span>
            </div>
            <div class="btn-shimmer"></div>
          </button>
        </li>
      </ul>
    </div>
  </nav>

  <Toast position="top-right" group="cv" />
</template>
<script setup>
import { useToast } from 'primevue/usetoast'

const toast = useToast()

const handleDownload = async () => {
  const fileUrl = "/AlexisRosales-CurriculumVitae.pdf"

  try {
    // Verificar si el archivo existe
    const res = await fetch(fileUrl, { method: "HEAD" })

    if (!res.ok) {
      throw new Error("Archivo no encontrado")
    }

    // Descargar el archivo
    const link = document.createElement('a')
    link.href = fileUrl
    link.download = 'AlexisRosales-CurriculumVitae.pdf'
    document.body.appendChild(link)
    link.click()
    link.remove()

    // Toast éxito (azul)
    toast.add({
      severity: 'success',     
      summary: 'Curriculum se descargado correctamente',
      life: 3000,
      group: 'cv'
    })

  } catch (err) {
    // Toast error (rojo)
    toast.add({
      severity: 'error',
      summary: 'No se encontró el archivo',
      detail: 'Verificá que el CV esté subido correctamente.',
      life: 3500,
      group: 'cv'
    })
  }
}
</script>
<style scoped>
.navbar-container {
  position: sticky;
  top: 15px;
  z-index: 999;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 15px;
}

.nav-content {
  background: rgba(20, 20, 20, 0.7);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 22px;
  padding: 10px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.5),
    inset 0 0 10px rgba(255, 255, 255, 0.02);
}

.logo {
  font-family: 'Unica One', sans-serif;
  font-size: 1.7rem;
  letter-spacing: 5px;
  position: relative;
  cursor: pointer;
  
  color: rgba(255, 255, 255, 0.1);
  background: linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.4) 100%);
  -webkit-background-clip: text;
  text-shadow: 1px 1px 1px rgba(255,255,255,0.05), -1px -1px 1px rgba(0,0,0,0.5);
  transition: all 0.4s ease;
}

.logo:hover {
  color: #fff;
  -webkit-text-fill-color: #fff;
  text-shadow: 
    0 0 10px #f5d742,
    0 0 20px #c9a227,
    2px 0 1px red, 
    -2px 0 1px blue; 
  animation: glitch-anim 0.3s infinite;
  transform: scale(1.05);
}

@keyframes glitch-anim {
  0% { transform: translate(0); }
  20% { transform: translate(-1px, 1px); }
  40% { transform: translate(-1px, -1px); }
  60% { transform: translate(1px, 1px); }
  80% { transform: translate(1px, -1px); }
  100% { transform: translate(0); }
}

.cv-button.elite {
  background: transparent;
  border: 1px solid rgba(201, 162, 39, 0.4); 
  padding: 8px 18px;
  border-radius: 12px;
  color: #c9a227;
  font-weight: 700;
  font-size: 0.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}


.btn-shimmer {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  transition: 0.6s;
}

.cv-button.elite:hover {
  border-color: #f5d742;
  color: #fff;
  box-shadow: 0 0 15px rgba(201, 162, 39, 0.4);
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

.cv-button.elite::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transition: 0.5s;
}

.cv-button.elite:hover::before {
  left: 100%;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  color: #888;
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: 0.3s;
}

.nav-item:hover {
  color: #f5d742;
  text-shadow: 0 0 8px rgba(245, 215, 66, 0.4);
}

@media (max-width: 600px) {
  .logo { font-size: 1.3rem; }
  .nav-links { gap: 15px; }
  .cv-button span { display: none; }
}
</style>