<template>
  <div class="relative overflow-auto w-full h-screen">
    <div :class="['lg:p-0 p-6 lg:flex transition-transform duration-500 ease-in-out', { '-translate-x-full': showSecondSection }]"
    class="w-[100%] relative">
    
    <section class="w-full lg:h-screen flex-shrink-0 lg:p-26 text-gray-600 relative">
        <div class="lg:flex lg:h-full">
      <div class="flex flex-col items-center lg:flex lg:flex-col lg:items-start lg:w-1/2 lg:pr-6 mt-10">
        <div class="flex gap-8 items-center">
        <img
          class="lg:w-20 lg:h-20 w-40 h-40 "
          src="../assets/Zoraida.png"
          alt="Image profile"
        />
        <div class="lg:text-sm lg:flex lg:gap-4 lg:flex-wrap lg:justify-center">
              <span
                class="lg:flex lg:items-center inline-block bg-[#f69494] lg:py-1 rounded-full px-3  text-xs font-semibold text-gray-700"
                >HTML5</span>
                <span
                class="lg:flex lg:items-center inline-block bg-[#f69494]  rounded-full px-3 text-xs font-semibold text-gray-700"
                >CSS3</span>
                <span
                class=" lg:flex lg:items-center inline-block bg-[#f69494] rounded-full px-3 text-xs font-semibold text-gray-700"
                >JavaScript</span>
                <span
                class="lg:flex lg:items-center inline-block bg-[#f69494] rounded-full px-3 text-xs font-semibold text-gray-700"
                >Vue</span>
                <span
                class="lg:flex lg:items-center inline-block bg-[#f69494] rounded-full px-3 text-xs font-semibold text-gray-700"
                >React</span>
                <span
                class="lg:flex lg:items-center inline-block bg-[#f69494] rounded-full px-3 text-xs font-semibold text-gray-700"
                >Tailwind</span>
                <span
                class="lg:flex lg:items-center inline-block bg-[#f69494] rounded-full px-3 text-xs font-semibold text-gray-700"
                >PHP</span>
                <span
                class="lg:flex lg:items-center inline-block bg-[#f69494] rounded-full px-3 text-xs font-semibold text-gray-700"
                >Axios</span>
                <span
                class="lg:flex lg:items-center inline-block bg-[#f69494] lg:py-1 rounded-full px-3 text-xs font-semibold text-gray-700"
                >MySQL</span>
                <span
                class="lg:flex lg:items-center inline-block bg-[#f69494] rounded-full px-3 text-xs font-semibold text-gray-700"
                >Visual Studio</span>
                <span
                class="lg:flex lg:py-1 lg:items-center inline-block bg-[#f69494] rounded-full px-3 text-xs font-semibold text-gray-700"
                >Figma</span>
                <span
                class="lg:flex lg:items-center inline-block bg-[#f69494] rounded-full px-3 text-xs font-semibold text-gray-700"
                >Trello</span>
                <span
                class="lg:flex lg:items-center inline-block bg-[#f69494] rounded-full px-3 text-xs font-semibold text-gray-700"
                >Notion</span>
                <span
                class="lg:flex lg:items-center inline-block bg-[#f69494] rounded-full px-3 text-xs font-semibold text-gray-700"
                >Slack</span>
                <span
                class="lg:flex lg:items-center inline-block bg-[#f69494] rounded-full px-3 text-xs font-semibold text-gray-700"
                >Discord</span>
               </div>

      </div>
        <p class="lg:mt-10 lg:py-5 lg:pl-0 lg:text-base mt-10 text-xl">
          <!-- Obtuve mi título en Arquitectura en Venezuela, con una formación
          enfocada en arte, diseño y pensamiento lógico. Hace trece años me mudé
          a Barcelona para crecer profesionalmente, adquirir nuevas habilidades
          y asumir nuevos desafíos. -->
          I obtained my degree in Architecture in Venezuela, with a focus on art, design, and logical thinking. Thirteen years ago, I moved to Barcelona to grow professionally, acquire new skills, and take on new challenges.
        </p>
        <ul class="flex lg:gap-x-4 lg:mt-4 items-center">
          <a href="https://github.com/ZoraidaMorenoCadenas" target="_blank" rel="noopener noreferrer">
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
          </a>
          <a href="https://www.linkedin.com/in/zoraida-moreno/" target="_blank" rel="noopener noreferrer">
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
          </a>
          <a href="/CV Resume Zoraida Moreno.pdf" target="_blank" class="cursor-pointer">
          <li class="bg-[#f69494] rounded-full px-4 py-2 text-white font-medium hover:bg-black transition-all">
            CV
          </li>
        </a>
        </ul>
        <div class="w-full mt-6">
          <span class="block text-gray-600 lg:text-md text-lg">Connect with me at</span>
          <a href="mailto:zoraidamorenocadenas79@gmail.com" class="lg:font-lg text-md font-bold hover:underline">
                zoraidamorenocadenas79@gmail.com
              </a>
        </div>
      </div>
      <div class="border-l border-gray-400 h-auto mx-8 hidden lg:block"></div>

      <div class="lg:w-1/2 lg:pl-6 lg:px-6 text-gray-600 lg:text-base text-lg">
        <p class="mt-10 ">
          <!-- Inicié mi carrera como Arquitecto, gestionando proyectos de principio
          a fin, lo que me dio una -->
          I began my career as an Architect, managing projects from start to finish, which gave me a
          <strong>comprehensive vision of the entire process.</strong>
          <!-- <strong>vision integral de todo el proceso.</strong> -->
        </p>
        <p class="mt-6">
          <!-- A lo largo de mi trayectoria me he mantenido en aprendizaje constante,
          explorando la fotografia, el <strong>Diseño UX/UI</strong> y
          actualmente el <strong>desarrollo web Front-end.</strong> -->
          Throughout my career, I have remained in constant learning, exploring photography, <strong>UX/UI Design</strong>, and currently <strong>Front-end web development.</strong>
        </p>
        <p class="mt-6">
          <!-- <strong
            >El último año, he trabajado en proyectos a nivel educativo y
            laboral</strong 
          >-->
          <strong>In the past year, I have worked on projects at both educational and professional levels,</strong>
          <!-- lo que me ha permitido aterrizar los conocimientos adquiridos en los
          diferentes cursos que he realizado. -->
          which has allowed me to apply the knowledge I’ve gained in the various courses I’ve taken."
        </p>
        <!-- <p class="mt-6">
          Mi experiencia como Campus Manager en una escuela de tecnología fue un
          punto clave en mi crecimiento profesional. Descubrí lo mucho que
          disfruto conectar con las personas, desarrollando habilidades como la
          <strong>empatía</strong> y la
          <strong>comunicación asertiva.</strong> Este rol me permitió ser el
          puente entre la escuela y los estudiantes, asegurando que ambas partes
          tuvieran una experiencia positiva y enriquecedora.
        </p> -->
        <p class="mt-6">
          My experience as a Campus Manager at a technology school was a key point in my professional growth. I discovered how much I enjoy connecting with people, developing skills such as <strong>empathy</strong> and <strong>assertive communication.</strong> This role allowed me to be the bridge between the school and the students, ensuring that both parties had a positive and enriching experience.
        </p>

      </div>
      <button @click="toggleSection"
        class="absolute right-4 top-1/2 transform hidden bg-[#f69494] w-11 h-11 rounded-full self-center lg:block lg:mr-3 hover:bg-white transition-all"
      >
        >
      </button>
    </div>
    </section>

    <!--Otra pagina -->
     <section class="relative w-full lg:h-screen flex-shrink-0 lg:p-26 text-gray-600">
        <div class="flex h-full">
      <button @click="toggleSection"
        class="absolute left-4 top-1/2 transform hidden bg-[#f69494] w-11 h-11 rounded-full self-center lg:block lg:ml-3 hover:bg-white transition-all"
      >
        <
      </button>

      <div class="lg:w-1/3">
      <h2 class="font-bold lg:text-xl text-lg lg:mb-10">Skills Design</h2>
      <div class="lg:flex">
        <div class="lg:text-sm lg:flex lg:gap-x-4 lg:gap-y-6 space-x-2 lg:flex-wrap">
              <span
                class="lg:flex lg:items-center inline-block bg-[#f69494] lg:py-1 rounded-full px-3 text-xs font-semibold text-gray-700"
                >Design Thinking</span>
                <span
                class="lg:flex lg:items-center inline-block bg-[#f69494] rounded-full px-3 text-xs font-semibold text-gray-700"
                >Design Research</span>
                <span
                class="lg:flex lg:py-1 lg:items-center inline-block bg-[#f69494] rounded-full px-3 text-xs font-semibold text-gray-700"
                >Creative Strategy</span> <span
                class="lg:flex lg:items-center inline-block bg-[#f69494] rounded-full px-3 text-xs font-semibold text-gray-700"
                >Web Design</span> <span
                class="lg:flex lg:items-center inline-block bg-[#f69494] rounded-full px-3 text-xs font-semibold text-gray-700"
                >UX/UI</span> <span
                class="lg:py-1 lg:flex lg:items-center inline-block bg-[#f69494] rounded-full px-3 text-xs font-semibold text-gray-700"
                >Typography</span> <span
                class="lg:flex lg:items-center inline-block bg-[#f69494] rounded-full px-3 text-xs font-semibold text-gray-700"
                >User Flow</span> <span
                class="lg:flex lg:items-center inline-block bg-[#f69494] rounded-full px-3 text-xs font-semibold text-gray-700"
                >Testing</span> <span
                class="lg:flex lg:py-1 lg:items-center inline-block bg-[#f69494] rounded-full px-3 text-xs font-semibold text-gray-700"
                >Atomic Design</span> <span
                class="lg:flex lg:items-center inline-block bg-[#f69494] rounded-full px-3 text-xs font-semibold text-gray-700"
                >Responsive Design</span> <span
                class="lg:py-1 lg:flex lg:items-center inline-block bg-[#f69494] rounded-full px-3 text-xs font-semibold text-gray-700"
                >Prototyping</span>
                <span
                class="lg:flex lg:items-center inline-block bg-[#f69494] rounded-full px-3 text-xs font-semibold text-gray-700"
                >Heuristic evaluation</span><span
                class="lg:flex lg:py-1 lg:items-center inline-block bg-[#f69494] rounded-full px-3 text-xs font-semibold text-gray-700"
                >Guerrilla Testing</span>
                <span
                class="lg:flex lg:py-1 lg:items-center inline-block bg-[#f69494] rounded-full px-3 text-xs font-semibold text-gray-700"
                >Questionaries</span>
                <!-- <div class="lg:flex lg:justify-center lg:w-2/3"> -->
                  <span
                class="lg:flex lg:py-1 lg:items-center inline-block bg-[#f69494] rounded-full px-3 text-xs font-semibold text-gray-700"
                >Interviews</span>
                <!-- </div> -->
                  </div>
    </div>
  </div>

       <!--Linea que divide ambos div -->
       <div class="border-l border-gray-400 h-auto mx-8 hidden lg:block"></div> 

      <div class="lg:w-1/3 space-y-4 mt-10 lg:mt-0">
        <div>
          <div class="space-y-4 mt-10 lg:mt-0">         
        <h2 class="font-bold text-xl">Experience</h2>
        <div>
          <div class="flex gap-4">
            <p >TECH ID Solutions</p>
            <p class="text-gray-500">Ene 2024 – Jun 2024</p>
          </div>
          <p class="font-semibold">Front-end Developer (Remote)</p>
        </div>

        <div>
          <div class="flex gap-4">
            <p >Neoland School</p>
            <p class="text-gray-500">Ene 2019 – Sep 2023</p>
          </div>
          <p class="font-semibold">Campus Manager (Barcelona)</p>
        </div>
     
      <div> 
        <div class="flex gap-4">
          <p >Freelance Project</p>
          <p class="text-gray-500">2013 – Freelance project</p>
        </div>
          <p class="font-semibold">Project Architect (LATAM)</p>
        </div>

        <div>
          <div class="flex gap-4">
            <p >Alcaldía de Sucre</p>
            <p class="text-gray-500">Ene 2009 – Dic 2010</p>
          </div>
          <p class="font-semibold">External advisor for inspection and contracting of construction projects</p>
        </div>

        <div>
          <div class="flex gap-4">
            <p >Alcaldía de Baruta</p>
            <p class="text-gray-500">Mar 2007 – Dic 2010</p>
          </div>
         
          <p class="font-semibold">External advisor for inspection and contracting of construction projects (Caracas)</p>
        </div>

        <div>
          <div class="flex gap-4">
            <p >GAM Associated Architects</p>
            <p class="text-gray-500">2006 - 2010</p>
          </div>
          <p class="font-semibold">Architect - Founder (Caracas)</p>
        </div>
      </div>
    </div>
  </div>

        <!--Linea que divide ambos div -->
       <div class="border-l border-gray-400 h-auto mx-8 hidden lg:block"></div> 

      <!-- segundo div -->
       <div class="hidden lg:block lg:w-1/3 space-y-4 lg:pb-20">
        <h2 class="font-bold text-xl">Certifications</h2>
        <div>
          <div class="flex gap-4">
            <p>Code Op Barcelona</p>
            <p class="text-gray-500">Ene – Feb 2025</p>
          </div>
          <p class="font-semibold">PHP y MySQL</p>
        </div>

        <div>
          <div class="flex gap-4">
            <p>Code Op Barcelona</p>
            <p class="text-gray-500">Sep – Dic 2024</p>
          </div>
          <p class="font-semibold">Front-end Developer</p>
        </div>
        <div>
          <div class="flex gap-4">
            <p>Factoria F5 Barcelona</p>
            <p class="text-gray-500">Abr – Oct 2023</p>
          </div>
          <p class="font-semibold">Full Stack</p>
        </div>

        <div>
          <div class="flex gap-4">
            <p>Neoland School</p>
            <p class="text-gray-500">Enero – Marzo 2019</p>
          </div>
          <p class="font-semibold">UX/UI Designer</p>
        </div>
        <div>
          <div class="flex gap-4">
            <p>Idep Barcelona</p>
            <p class="text-gray-500">Sep 2011 - Jun 2012</p>
          </div>
          <p class="font-semibold">General Photography</p>
        </div>
        <div>
          <div class="flex gap-2">
            <p>Polytechnic University of Catalonia</p>
            <p class="text-gray-500">2004 - 2005</p>
          </div>
          <p class="font-semibold">Master in Sustainable Architecture</p>
        </div>
        <div>
         <div class="flex gap-4">
          <p>Central University of Venezuela</p>
          <p class="text-gray-500">1998 - 2004</p>
         </div>
          <p class="font-semibold">Architect</p>
        </div>
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





