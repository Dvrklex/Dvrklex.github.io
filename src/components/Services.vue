<template>
  <section class="freelance-section" id="freelance" data-aos="fade-up">
    <div class="container">
      
      <div class="section-header">
        <div class="availability-wrapper" data-aos="zoom-in" data-aos-delay="200">
          <span class="dot"></span>
          <span class="tag">Disponibilidad Actual</span>
        </div>
        
        <h2 class="glitch-title" data-aos="fade-up" data-aos-delay="300">
          Abierto a Proyectos Freelance
        </h2>
      </div>
    </div>
  </section>
</template>

<script setup>
const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
};
</script>

<style scoped>
.freelance-section {
  padding: 100px 20px;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.availability-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(212, 175, 55, 0.1);
  padding: 6px 16px;
  border-radius: 20px;
  border: 1px solid rgba(212, 175, 55, 0.2);
  margin-bottom: 20px;
}

.dot {
  width: 8px;
  height: 8px;
  background: #4ade80;
  border-radius: 50%;
  box-shadow: 0 0 10px #4ade80;
}

.tag {
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 700;
}

.section-header h2 {
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 20px;
  color: #fff;
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

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-bottom: 60px;
}

.service-card {
  position: relative;
  background: var(--card-glass);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 40px 30px;
  border-radius: 24px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
}

.service-card:hover {
  transform: translateY(-10px);
  border-color: rgba(212, 175, 55, 0.4);
  background: rgba(255, 255, 255, 0.05);
}

.card-icon {
  font-size: 2rem;
  color: var(--accent);
  margin-bottom: 20px;
  filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.3));
}

.service-card h3 {
  font-size: 1.4rem;
  color: #fff;
  margin-bottom: 15px;
}

.service-card p {
  color: var(--text-dim);
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 20px;
}

.features {
  list-style: none;
  padding: 0;
}

.features li {
  font-size: 0.85rem;
  color: #eee;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.features i {
  color: var(--accent);
  font-size: 0.8rem;
}

.card-glow {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: radial-gradient(circle at top right, rgba(212, 175, 55, 0.05), transparent);
  pointer-events: none;
}

.cta-wrapper {
  text-align: center;
}

.cta-button {
  --button-gold: #d4af37;
  --button-light: #f6d365;
  cursor: pointer;
  position: relative;
  isolation: isolate;
  overflow: hidden;
  border: 1px solid rgba(255, 235, 159, 0.72);
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 18px 36px;
  background: linear-gradient(135deg, var(--button-light), var(--button-gold) 52%, #ad7a16);
  color: #111;
  font-family: inherit;
  font-weight: 700;
  letter-spacing: 0.02em;
  border-radius: 50px;
  box-shadow:
    0 10px 20px rgba(212, 175, 55, 0.2),
    0 2px 0 rgba(96, 62, 6, 0.48),
    inset 0 1px 1px rgba(255, 255, 255, 0.42);
  transition: transform 220ms ease, box-shadow 220ms ease, filter 220ms ease;
}

.cta-button::before {
  content: '';
  position: absolute;
  z-index: -1;
  top: -60%;
  left: -45%;
  width: 38%;
  height: 220%;
  background: rgba(255, 255, 255, 0.58);
  transform: rotate(25deg) translateX(-260%);
  transition: transform 560ms cubic-bezier(0.22, 1, 0.36, 1);
}

.cta-button i {
  font-size: 0.9rem;
  transition: transform 220ms ease;
}

.cta-button:hover {
  transform: translateY(-4px);
  filter: saturate(1.12) brightness(1.05);
  box-shadow:
    0 18px 32px rgba(212, 175, 55, 0.38),
    0 3px 0 rgba(96, 62, 6, 0.42),
    inset 0 1px 1px rgba(255, 255, 255, 0.55);
}

.cta-button:hover::before {
  transform: rotate(25deg) translateX(620%);
}

.cta-button:hover i {
  transform: translateX(5px);
}

.cta-button:active {
  transform: translateY(1px) scale(0.98);
  box-shadow:
    0 7px 14px rgba(212, 175, 55, 0.28),
    0 1px 0 rgba(96, 62, 6, 0.42),
    inset 0 2px 5px rgba(101, 66, 5, 0.2);
}

.cta-button:focus-visible {
  outline: 3px solid rgba(255, 235, 159, 0.9);
  outline-offset: 4px;
}

@media (prefers-reduced-motion: reduce) {
  .cta-button,
  .cta-button i,
  .cta-button::before {
    transition-duration: 0.01ms;
  }
}

@media (max-width: 768px) {
  .section-header h2 { font-size: 2rem; }
  .services-grid { grid-template-columns: 1fr; }
  .service-card { text-align: center; }
  .features li { justify-content: center; }
}
</style>
