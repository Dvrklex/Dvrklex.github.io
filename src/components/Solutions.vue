<template>
  <section class="compact-solutions" id="solutions">
    <div class="container">
      
      <!-- Encabezado compacto con controles -->
      <div class="compact-header">
        <div>
          <span class="badge-gold">Catálogo & Demos</span>
          <h2>Soluciones Listas para Implementar</h2>
          <p class="section-desc" data-aos="fade-up" data-aos-delay="400">
          Acompaño a profesionales y empresas en su crecimiento digital, 
          desarrollando experiencias web modernas y sistemas funcionales 
          que convierten visitas en oportunidades.
        </p>
        </div>
        
        <!-- Botones de navegación del carrusel -->
        <div class="nav-controls">
          <button 
            @click="scroll('left')" 
            :disabled="isAtStart" 
            aria-label="Anterior"
          >
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <button 
            @click="scroll('right')" 
            :disabled="isAtEnd" 
            aria-label="Siguiente"
          >
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <!-- Carousel Track (Deslizable) -->
      <div 
        class="solutions-track" 
        ref="track"
        @scroll="checkScrollPosition"
      >
        <article 
          v-for="item in solutions" 
          :key="item.title" 
          class="mini-card"
        >
          <div class="card-thumb">
            <img :src="item.image" :alt="item.title" loading="lazy" />
            <span class="category">{{ item.category }}</span>
          </div>
          
          <div class="card-info">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            
            <!-- Features en tags -->
            <div class="tags-row">
              <span 
                v-for="tag in item.features" 
                :key="tag" 
                class="mini-tag"
              >
                <i class="fa-solid fa-check"></i> {{ tag }}
              </span>
            </div>

            <!-- Botones de acción compactos -->
            <div class="actions-row">
              <a 
                :href="item.demo" 
                target="_blank" 
                rel="noopener" 
                class="btn-demo-sm"
              >
                <span>Ver Demo</span>
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>

              <button class="btn-contact-sm" @click="scrollToContact">
                Quiero una igual
              </button>
            </div>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Estado y referencias
const track = ref(null)
const isAtStart = ref(true)
const isAtEnd = ref(false)

// Lista de soluciones (Demos reales)
const solutions = [
  {
    title: "Tienda de Celulares",
    category: "Retail",
    image: "/solutions/demo-iphones-preview.png",
    demo: "https://demo-phone-store.netlify.app/",
    description: "Catálogo moderno para mostrar stock y recibir consultas directas por WhatsApp.",
    features: ["Responsive", "WhatsApp Directo", "SEO Básico", "Carga rápida"]
  },
  {
    title: "Tienda de Celulares Alternativa",
    category: "Retail",
    image: "/solutions/demo-iphone-store-preview.png",
    demo: "https://demo-phonestore.netlify.app/",
    description: "Catálogo con diseño alternativo para mostrar stock y recibir consultas directas por WhatsApp.",
    features: ["Responsive", "WhatsApp Directo", "SEO Básico", "Carga rápida"]
  },
  {
    title: "Web para Locales de Comida",
    category: "Gastronomía",
    image: "/solutions/demo-comida-preview.png",
    demo: "https://demo-on.netlify.app/",
    description: "Gestión sencilla de menú digital, promociones activas y recepción de pedidos.",
    features: ["Menú Digital", "Promos", "Pedidos WhatsApp", "UI Rápida"]
  },
  {
    title: "Landing para Estudios Jurídicos",
    category: "Corporativo",
    image: "/solutions/demo-estudio-preview.png",
    demo: "https://estudio-demo.netlify.app/",
    description: "Diseño premium orientado a transmitir solvencia, confianza y captar consultas.",
    features: ["Diseño Premium", "Reserva Citas", "Formulario Focalizado"]
  },
  {
    title: "Web para Inmobiliarias",
    category: "Inmobiliaria",
    image: "/solutions/demo-inmobiliaria.preview.png",
    demo: "https://inmo-demo.netlify.app/",
    description: "Exhibición de propiedades con fichas técnicas claras y fácil navegación mobile.",
    features: ["Galería HD", "Filtros rápidos", "Contacto Inmediato"]
  }
]

// Función para desplazar mediante botones de navegación
const scroll = (direction) => {
  if (!track.value) return
  
  // Ancho de una tarjeta + el gap (360px + 20px)
  const cardElement = track.value.querySelector('.mini-card')
  const cardWidth = cardElement ? cardElement.offsetWidth + 20 : 380
  const scrollAmount = direction === 'left' ? -cardWidth : cardWidth
  
  track.value.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  })
}

// Control del estado disabled de los botones
const checkScrollPosition = () => {
  if (!track.value) return
  const el = track.value
  
  isAtStart.value = el.scrollLeft <= 5
  isAtEnd.value = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5
}

// Scroll suave a la sección de contacto
const scrollToContact = () => {
  const section = document.getElementById("contact")
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }
}

onMounted(() => {
  checkScrollPosition()
})
</script>

<style scoped>
.compact-solutions {
  background-color:rgba(48, 48, 48, 0.041);
  backdrop-filter: blur(5px);
  padding: 40px 20px;
}

.container {
  max-width: 1200px;
  margin: auto;
}

.compact-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 24px;
}

.compact-header h2 {
  font-size: 1.8rem;
  color: #fff;
  margin-top: 4px;
}

.badge-gold {
  color: var(--accent, #d4af37);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 600;
}

/* Nav controls */
.nav-controls {
  display: flex;
  gap: 8px;
}

.nav-controls button {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: var(--card-glass, rgba(255, 255, 255, 0.03));
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.nav-controls button:hover:not(:disabled) {
  border-color: var(--accent, #d4af37);
  color: var(--accent, #d4af37);
}

.nav-controls button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

/* Track contenedor */
.solutions-track {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  padding-bottom: 10px;
}

.solutions-track::-webkit-scrollbar {
  display: none;
}
.section-desc {
  color: var(--text-dim);
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.6;
  font-size: 1.1rem;
}

.section-desc strong {
  color: #fff;
  border-bottom: 1px solid var(--accent);
}
/* Card ultra compacta */
.mini-card {
  flex: 0 0 360px;
  scroll-snap-align: start;
  background: var(--card-glass, rgba(255, 255, 255, 0.03));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: border-color 0.3s ease;
}

.mini-card:hover {
  border-color: rgba(212, 175, 55, 0.3);
}

.card-thumb {
  position: relative;
  height: 140px;
  width: 100%;
}

.card-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.8);
  color: var(--accent, #d4af37);
  font-size: 0.65rem;
  padding: 3px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.card-info {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;
}

.card-info h3 {
  font-size: 1.1rem;
  color: #fff;
  margin: 0;
}

.card-info p {
  font-size: 0.85rem;
  color: #aaa;
  line-height: 1.4;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.mini-tag {
  font-size: 0.7rem;
  background: rgba(255, 255, 255, 0.05);
  color: #ddd;
  padding: 2px 6px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.mini-tag i {
  color: var(--accent, #d4af37);
  font-size: 0.65rem;
}

.actions-row {
  display: flex;
  gap: 8px;
  margin-top: auto;
  padding-top: 8px;
}

.btn-demo-sm {
  flex: 1;
  background: var(--accent, #d4af37);
  color: #000;
  font-weight: 700;
  font-size: 0.8rem;
  text-align: center;
  padding: 8px;
  border-radius: 8px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.btn-contact-sm {
  flex: 1;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-contact-sm:hover {
  border-color: var(--accent, #d4af37);
  color: var(--accent, #d4af37);
}

@media (max-width: 640px) {
  .compact-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .mini-card {
    flex: 0 0 85%;
  }
}
</style>