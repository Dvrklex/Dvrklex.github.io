<template>
  <div class="theme-toggle" @click="toggleTheme" :title="`Tema: ${isDark ? 'Oscuro' : 'Claro'}`">
    <i v-if="isDark" class="fas fa-sun"></i>
    <i v-else class="fas fa-moon"></i>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(true)

const setTheme = (dark) => {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  localStorage.setItem('theme', dark ? 'dark' : 'light')
  isDark.value = dark
}

const toggleTheme = () => {
  setTheme(!isDark.value)
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved) {
    setTheme(saved === 'dark')
  } else {
    setTheme(true)
  }
})
</script>

<style scoped>
.theme-toggle {
  font-size: 1.5rem;
  color: var(--primary);
  cursor: pointer;
  transition: transform 0.3s;
  padding: 8px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}
.theme-toggle:hover {
  transform: scale(1.15);
  background: rgba(255, 255, 255, 0.15);
}
</style>
