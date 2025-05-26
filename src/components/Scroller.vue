<template>
    <div ref="cardRef" class="scroll-card">
      <slot />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const cardRef = ref(null)
  
  onMounted(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
          observer.unobserve(entry.target) // opcional: dejar de observar después de mostrar
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    )
  
    if (cardRef.value) {
      observer.observe(cardRef.value)
    }
  
    // Limpiar observador cuando se destruya el componente
    onUnmounted(() => {
      if (cardRef.value) observer.unobserve(cardRef.value)
    })
  });
  </script>
  
  <style scoped>
  .scroll-card {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s ease-out;
  }
  
  .scroll-card.show {
    opacity: 2;
    transform: translateY(0);
  }
  </style>