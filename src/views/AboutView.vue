<template>
  <div class="relative overflow-hidden w-full">
    <div :class="['flex transition-transform duration-500 ease-in-out', { '-translate-x-full': showSecondSection }]"
    class="w-[100%]">
    
    <section class="w-full flex-shrink-0 lg:p-18 lg:pr-8 text-gray-600">
        <div class="flex mt-20">
      <div class="lg:w-1/2 lg:pr-6">
        <img
          class="w-20 h-20"
          src="../assets/Zoraida.png"
          alt="Image profile"
        />
        <p class="lg:mt-10 lg:py-5 lg:pl-0 text-base">
          Obtuve mi título en Arquitectura en Venezuela, con una formación
          enfocada en arte, diseño y pensamiento lógico. Hace trece años me mudé
          a Barcelona para crecer profesionalmente, adquirir nuevas habilidades
          y asumir nuevos desafíos.
        </p>
        <ul class="flex lg:gap-x-4 lg:mt-10">
          <RouterLink to="/">
            <li class="relative">
              <img
                class="hidden lg:block transition-all duration-300 hover:opacity-0"
                src="../assets/GithubBlack.png"
                alt="Github Logo"
              />
              <img
                class="hidden lg:block absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100"
                src="../assets/GithubRedS.png"
                alt="Github Logo"
              />
            </li>
          </RouterLink>
          <RouterLink to="/">
            <li class="relative">
              <img
                class="hidden lg:block transition-all duration-300 hover:opacity-0"
                src="../assets/LinkedinBlack.png"
                alt="Linkedin Logo"
              />
              <img
                class="hidden lg:block absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100"
                src="../assets/LinkedinRedS.png"
                alt="Linkedin Logo"
              />
            </li>
          </RouterLink>
          <RouterLink>
            <li>CV</li>
          </RouterLink>
        </ul>
        <div class="mt-10">
          <span class="block text-gray-600 text-md">Connect with me at</span>
          <span class="font-medium text-md"
            >zoraidamorenocadenas79@gmail.com</span
          >
        </div>
      </div>
      <div class="border-l border-gray-400 h-auto mx-8 hidden lg:block"></div>
      <div class="lg:w-3/4 lg:pl-6 text-gray-600 lg:text">
        <p class="lg:mt-10">
          Inicié mi carrera como Arquitecto, gestionando proyectos de principio
          a fin, lo que me dio una
          <strong>vision integral de todo el proceso.</strong>
        </p>
        <p class="lg:mt-6">
          A lo largo de mi trayectoria me he mantenido en aprendizaje constante,
          explorando la fotografia, el <strong>Diseño UX/UI</strong> y
          actualmente el <strong>desarrollo web Front-end.</strong>
        </p>
        <p class="lg:mt-6">
          <strong
            >El último año, he trabajado en proyectos a nivel educativo y
            laboral</strong
          >
          lo que me ha permitido aterrizar los conocimientos adquiridos en los
          diferentes cursos que he realizado.
        </p>
        <p class="lg:mt-6">
          Mi experiencia como Campus Manager en una escuela de tecnología fue un
          punto clave en mi crecimiento profesional. Descubrí lo mucho que
          disfruto conectar con las personas, desarrollando habilidades como la
          <strong>empatía</strong> y la
          <strong>comunicación asertiva.</strong> Este rol me permitió ser el
          puente entre la escuela y los estudiantes, asegurando que ambas partes
          tuvieran una experiencia positiva y enriquecedora.
        </p>
      </div>
      <button @click="toggleSection"
        class="bg-[#f69494] w-11 h-11 rounded-full self-center lg:block lg:ml-4 hover:bg-white transition-all"
      >
        >
      </button>
    </div>
       <!-- Seccion de skills -->
     <!-- <div class="lg:flex lg:pt-0 text-gray-600 lg:mt-20">
        <div class="lg:w-1/2 space-y-2">
            <h2 class="font-bold lg:text-xl">Software and Tools</h2>
            <p class="lg:text-sm lg:pr-20">HTML5, CSS3,  JavaScript, Vue, React, Tailwind, PHP,  Axios, MySQL,  Visual Studio,  Figma, Trello,  Notion,  Slack,  Discord.</p>
        </div>
        <div class="lg:w-3/4 space-y-2 pl-12 pr-40">
            <h2 class="font-bold text-xl">Skills Design</h2>
            <p class="lg:text-sm" >Design Thinking, Design Research, Creative Strategy, Web Design, UI/UX, Typography, User Flow, Testing, Atomic Design, Responsive Design, Prototyping, Guerrilla Testing,
Heuristic evaluation, Questionnaires, Interviews</p>
        </div>
     </div> -->
      
    </section>

    <!-- Otra pagina -->
    <section class="w-full flex-shrink-0 lg:p-18 lg:pl-8 text-gray-600">
        <div class="flex">
      <button @click="toggleSection"
        class="bg-[#f69494] w-11 h-11 rounded-full self-center lg:block lg:mr-6 hover:bg-white transition-all"
      >
        <
      </button>

      <div class="lg:w-1/2 space-y-4">
        <h2 class="font-bold text-xl">Experiencia</h2>
        <div>
          <p class="font-semibold">TECH ID Solutions</p>
          <p>Desarrollador Front-end</p>
          <p class="text-gray-500">Ene 2024 – Jun 2024 / Remoto</p>
        </div>
        <div>
          <p class="font-semibold">Neoland School</p>
          <p>Campus Manager</p>
          <p class="text-gray-500">Ene 2019 – Sep 2023 / Barcelona</p>
        </div>

        <div>
          <p class="font-semibold">Freelance Project</p>
          <p>Arquitecto proyectista</p>
          <p class="text-gray-500">2013 – Freelance project / LATAM</p>
        </div>

        <div>
          <p class="font-semibold">Alcaldía de Sucre</p>
          <p>Asesor externo de inspección y contratación de obras</p>
          <p class="text-gray-500">Ene 2009 – Dic 2010 / Caracas</p>
        </div>

        <div>
          <p class="font-semibold">Alcaldía de Baruta</p>
          <p>Asesor externo de inspección y contratación de obras</p>
          <p class="text-gray-500">Mar 2007 – Dic 2010 / Caracas</p>
        </div>

        <div>
          <p class="font-semibold">GAM Arquitectos Asociados</p>
          <p>Arquitecto - Fundador</p>
          <p class="text-gray-500">2006 - 2010 / Caracas</p>
        </div>
      </div>

      <!-- Linea que divide ambos div -->
      <div class="border-l border-gray-400 h-auto mx-8 hidden lg:block"></div>

      <!-- segundo div -->
      <div class="lg:w-1/2 lg:pl-6 space-y-4">
        <h2 class="font-bold text-xl">Certificaciones</h2>
        <div>
          <p>Code Op Barcelona</p>
          <p class="font-semibold">PHP y MySQL</p>
          <p class="text-gray-500">Enero – Febrero 2025</p>
        </div>
        <div>
          <p>Code Op Barcelona</p>
          <p class="font-semibold">PHP y MySQL</p>
          <p class="text-gray-500">Enero – Febrero 2025</p>
        </div>
        <div>
          <p>Factoria F5 Barcelona</p>
          <p class="font-semibold">Full Stack</p>
          <p class="text-gray-500">Abr – Oct 2023 – Bootcamp</p>
        </div>
        <div>
          <p>Neoland School</p>
          <p class="font-semibold">UX/UI Designer</p>
          <p class="text-gray-500">Enero – Maezo 2019 - Bootcamp</p>
        </div>
        <div>
          <p>Idep Barcelona</p>
          <p class="font-semibold">Fotografía General</p>
          <p class="text-gray-500">Septiembre 2011 - Junio 2012</p>
        </div>
        <div>
          <p>Universidad Politécnica de Cataluña</p>
          <p class="font-semibold">Master en Arquitectura Sostenible</p>
          <p class="text-gray-500">2004 - 2005</p>
        </div>
        <div>
          <p>Universidad Central de Venezuela</p>
          <p class="font-semibold">Arquitecto</p>
          <p class="text-gray-500">1998 - 2004</p>
        </div>
      </div>
    </div>

     <div class="lg:flex lg:pt-0 text-gray-600 lg:mt-20">
        <div class="lg:w-1/2 space-y-2">
            <h2 class="font-bold lg:text-xl">Software and Tools</h2>
            <p class="lg:text-sm lg:pr-20">HTML5, CSS3,  JavaScript, Vue, React, Tailwind, PHP,  Axios, MySQL,  Visual Studio,  Figma, Trello,  Notion,  Slack,  Discord.</p>
        </div>
        <div class="lg:w-3/4 space-y-2 pl-12 pr-40">
            <h2 class="font-bold text-xl">Skills Design</h2>
            <p class="lg:text-sm" >Design Thinking, Design Research, Creative Strategy, Web Design, UI/UX, Typography, User Flow, Testing, Atomic Design, Responsive Design, Prototyping, Guerrilla Testing,
Heuristic evaluation, Questionnaires, Interviews</p>
        </div>
     </div>
    </section>
  </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
        showSecondSection: false,
    };
  },
  methods: {
    toggleSection(){
        this.showSecondSection = !this.showSecondSection;
    },
  },
};
</script>
