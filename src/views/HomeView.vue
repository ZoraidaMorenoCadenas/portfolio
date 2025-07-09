<template>
  <Scroller>
    <div>
    <div class="lg:mt-40 mb-20 content flex flex-col items-center text-center">
      <div class="flex gap-x-6 items-center pt-20 lg:pt-2">
        <h1 class="text-2xl lg:text-3xl font-semibold">Anabel Vázquez</h1>
        <div class="w-16 h-1 bg-[#e74c3c]"></div>
      </div>
      
      <div class="text-center mt-12">
        <p class="flex items-center justify-center lg:text-base mb-1">Hello there, 👋🏼</p>
        <p class="w-100 lg:text-base leading-loose mx-auto">I have a creative mindset, empathetic and curious, focused on creating functional and attractive digital experiences centered on the user to provide real solutions in an innovative way.</p>
      </div>

      <div class="flex gap-x-4 mt-12">
      <!-- <RouterLink to="/contact" class="mt-8 lg:mt-4 bg-black px-8 py-3 text-ml text-white rounded-3xl hover:bg-[#f69494] transition-all w-40">Get in touch</RouterLink> -->
      <RouterLink to="/contact" class="mt-8 lg:mt-4 border-2 border-black bg-black px-8 py-3 rounded-3xl text-white w-40 hover:bg-[#e74c3c] hover:border-transparent hover:text-white transition-all">Get in touch</RouterLink>
      <RouterLink to="/about" class="mt-8 lg:mt-4 border-2 px-8 py-3 rounded-3xl text-black bg-[#F5ECEC] w-40 hover:bg-[#e74c3c] hover:border-transparent hover:text-white transition-all">About me</RouterLink>
    </div>
  </div>
    </div>
  </Scroller>
 

    <div class="text-center mt-32">
      <h2 class="text-3xl font-semibold mb-20">My Projects</h2>
      
      <div class="mt-10 w-auto">
      <Card/>
    </div>
    </div>
   
  </template>
  
  <script>
import { RouterLink } from 'vue-router';
import Card from '../components/Card.vue';
import Scroller from '../components/Scroller.vue';
  export default {
    name: 'Home',
    components: {Card,
      Scroller
    }
  };
  </script>
  