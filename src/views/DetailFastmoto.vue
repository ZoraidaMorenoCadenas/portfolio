<template>
    <section class="lg:flex lg:justify-between lg:max-w-7xl mx-auto
     lg:min-w-screen items-center justify-center px-4 lg:py-24
      lg:px-40">
      <div class="lg:w-1/2 mb-10 lg:mb-0" >
        <h2 class="text-5xl font-semibold">FastMoto</h2>
        <p class="mt-5 text-2xl font-extralight mb-16">
          FastMoto is a conceptual application What is mobility like in Barcelona?
          
        </p>
        <RouterLink
          to="/#"
          class="border-2 border-black px-8 py-3 rounded-3xl text-black w-40 hover:bg-[#e74c3c] hover:border-transparent hover:text-white transition-all">View prototype</RouterLink
        >
      </div>
      <div class="relative w-full max-w-md h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
        <img src="../assets/OnboardingFastmoto.png" alt="Image App cover" class="w-full h-full  object-cover"/>
      </div>
    </section>
  
    <section>
      <h3 class="px-24 pb-10 text-3xl font-semibold mb-5">Proyect Overview</h3>
      <div class="flex px-24 gap-12 mb-20">
        <div class="bg-[#F9D279] p-10 flex-1 min-h-[300px]">
          <h4 class="text-xl font-semibold mb-5">Challenge</h4>
          <p class="font-light mb-5">
            Many times we need to get to an urgent place: a medical call, an unexpected family event, an important meeting... but traffic, distance or lack of quick options delay us. 
          </p>
          <p class="font-light">In one of those situations, I discovered that motorcycles could be the best alternative, but there was no intuitive and fast app that would allow me to find one right then.</p>
        </div>
        <div class="bg-[#facdbd] p-10 flex-1 min-h-[300px]">
          <h4 class="text-xl font-semibold mb-5">Objective</h4>
          <p class="font-light">
            Create a clear, simple and effective user experience that:
          </p>
          <ul class="font-light">
            <li class="mt-5">The user to request a motorcycle in less than 30 seconds.</li>
            <li class="mt-5">It offers an optimized route to the destination.</li>
            <li class="mt-5">Show in real time how long it will take to arrive. It offers an optimized route to the destination.</li>
            <li class="mt-5">Prioritizes security, speed and visual clarity.</li>
          </ul>
        </div>
        <div class="bg-[#C5E9E7] p-10 flex-1 min-h-[300px]">
          <h4 class="text-xl font-semibold mb-5">Solution</h4>
          <p class="font-light mb-5">
            Make the application process ultra-fast. 
          </p>
          <p class="font-light mb-5">Show key information without saturating the user.</p>
          <p class="font-light mb-5">Integrate geolocation and fast payment.</p>
          <p class="font-light mb-5"> Design a usable interface even in times of stress.</p>
        </div>
      </div>
    </section>
  
    <section class="lg:max-w-7xl mx-auto
     lg:min-w-screen lg:py-24
      lg:px-24 mb-10">
      <div class="mb-10 flex">
        <h4 class="text-xl font-semibold mb-5">Understand the User's Needs in discovering their relationship with Alcohol</h4>
        <p>
          Users seek to know their relationship with alcohol, information on healthy habits and what is the next step to start including healthy habits, which led to a focus on two key characteristics: conducting a test and creating the user profile for record the daily activity of alcohol consumption.
          
        </p>
      </div>
      <div>
        <div class="mb-10 flex">
          <h4 class="text-xl font-semibold mb-5">Building MVP Focused on personalized Alcoholist Control Traker</h4>
          <p>
            Users are looking to know what their relationship with alcohol is, fast
          and personalized nutritional information to improve this enhancement,
          which led to a focus on two key characteristics: carrying out a test and
          user profile to record daily activity of alcohol consumption.
          </p>
        </div>
        <div class="mb-10">
          <h4 class="text-xl font-semibold mb-5">Profile User</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In cupiditate
            laboriosam tempora exercitationem nulla nobis odit obcaecati qui
            perferendis, maxime fugit ducimus perspiciatis accusantium non nemo.
            Officiis dignissimos ab esse!
          </p>
        </div>
      </div>
      <div></div>
    </section>
  </template>
  
  <script>
  import { RouterLink } from "vue-router";
  </script>
  