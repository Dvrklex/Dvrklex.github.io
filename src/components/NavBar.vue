<template>
<nav>
  <span class="logo">DVRKLEX</span>
  <ul>
    
    <li><a href="#">Inicio</a></li>
    <li><a href="#contact">Contacto</a></li>
    <li>
      <a
        class="download-link"
        href="#"
        @click="handleDownload"
      >
        <i class="fa-solid fa-download"></i> Descargar CV
      </a>
    </li>
  </ul>
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
  nav {
    background-color: #111;
    border-radius: 10px;
    margin: 20px auto;
    max-width: 1000px;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 999;
  }
  ul {
    display: flex;
    justify-content: right;
    gap: 30px;
    list-style: none;
    margin: 0;
    margin-right: 30px;
    padding: 0;
  }
  li a {
    display: inline-block;
    background-color: #c9a227;
    padding: 10px 20px;
    border-radius: 8px;
    color: black;
    font-weight: bold;
    text-decoration: none;
    transition: background 0.3s ease;
  }

  a {
    color: #f4f4f4;
    text-decoration: none;
    font-weight: bold;
  }
  
  li a:hover {
    background-color: #ffd23f;
  }
  /* li:hover {
    cursor: pointer;
    background-color: #c9a227;
    transition: 0.5s;
  } */
  span {
    color: white;
    justify-content: center;
    margin: auto 0;
    margin-left: 30px;
  }
  a.download {
    background: #c9a227;
    color: black;
    padding: 12px 24px;
    border-radius: 30px;
    font-weight: bold;
    text-decoration: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  a.download:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px #c9a227;
  }
  .logo {
    font-family: 'Unica One', sans-serif;
    font-size: 2.2rem;
    letter-spacing: 6px;
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
  .logo:hover {
  text-shadow: 2px 0 red, -2px 0 blue;
  animation: glitch 0.3s ease-in-out;
  }

  @keyframes glitch {
    0% { transform: translateX(0); }
    20% { transform: translateX(-2px); }
    40% { transform: translateX(2px); }
    60% { transform: translateX(-1px); }
    80% { transform: translateX(1px); }
    100% { transform: translateX(0); }
  }



</style>
