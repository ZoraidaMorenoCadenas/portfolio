<template>
  <section class="lg:flex lg:justify-between lg:max-w-7xl mx-auto
   lg:min-w-screen items-center justify-center px-4 lg:py-24
    lg:px-40 mb-10">
    <div class="lg:w-1/2 mb-10 lg:mb-0" >
      <h2 class="text-5xl font-semibold">Act app</h2>
      <p class="mt-10 text-3xl font-extralight mb-16">
        Actapp is a conceptual application to measure the relationship with Alcohol
        
      </p>
      <RouterLink
        to="/#"
        class="border-2 border-black px-8 py-3 rounded-3xl text-black w-40 hover:bg-[#e74c3c] hover:border-transparent hover:text-white transition-all">View prototype</RouterLink
      >
    </div>
    <div class="lg:w-1/2 flex justify-center">
      <img src="../assets/Frontal app.png" alt="Image App cover" />
    </div>
  </section>

  <section>
    <h3 class="px-24 py-10 text-3xl font-semibold mb-5">Proyect Overview</h3>
    <div class="flex px-24 gap-12 mb-20">
      <div class="bg-[#F9D279] p-10">
        <h4 class="text-xl font-semibold mb-5">Challenge</h4>
        <p class="font-light">
          Alcohol is a very addictive substance. When a person is an alcoholic, they need to follow a treatment. This requires the person to recognize that they have a problem with alcohol and ask for help.
        </p>
      </div>
      <div class="bg-[#facdbd] p-10">
        <h4 class="text-xl font-semibold mb-5">Objective</h4>
        <p class="font-light">
          Help improve a user's experience by inviting them to see their relationship with alcohol easily and anonymously, suggest options for taking action, while monitoring their daily consumption, acquire healthy habits.
        </p>
      </div>
      <div class="bg-[#C5E9E7] p-10">
        <h4 class="text-xl font-semibold mb-5">Solution</h4>
        <p class="font-light">
          Design an app so that you can easily and anonymously perform a test, once registered you can monitor your alcohol consumption daily and suggest options for different practices to acquire healthy habits.
        </p>
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
