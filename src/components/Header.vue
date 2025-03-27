<template>
  <header
    :class="[
      'px-10 fixed top-0 left-0 w-full transition-all duration-300 z-50 lg:px-20 lg:pt-0 lg:py-0 py-10',
      scrolled
        ? 'bg-[rgba(245,236,236,0.4)] shadow-md backdrop-blur-md'
        : 'bg-[#F5ECEC]',
    ]"
  >
    <div class="flex w-full lg:p-8 items-center justify-between">
      <RouterLink to="/">
     
        <!-- <img class="w-[70px]" src="../assets/ZoLogo.png" alt="Logo Profile" /> -->

        <!-- <div class="flex h-20 w-20">
          <img class="w-[70px] h-[70px]" src="../assets/Frame14.png" alt="Logo Profile"/>
         <img class="w-[70px] animate__animated animate__BounceRight" src="../assets/Frame15.png" alt="Logo Profile"/>
        </div> -->
        <img class="w-[70px] h-[60px]" src="../assets/Frame14.png" alt="Logo Profile"/>
        <img ref="dot" class="absolute w-[10px] h-[100px] top-1/2 transform -traslate-y-1/2 animate-slide-in z-30" src="../assets/Frame15.png" alt="Logo Profile"/>
      
       
        <!-- <img class="w-[70px]" src="../assets/ZoLogoBlack.svg" alt="Logo Profile"> -->
        <!-- <img src="../assets/ZoLogoWhite.png" alt="Logo Profile"> -->
        <!-- <span class="font-openSanz font-medium text-2xl lg:text-4xl whitespace-nowrap">Z.</span> -->
      </RouterLink>
      <Navbar :navLinks="navLinks"></Navbar>

      <ul class="flex lg:gap-x-4 items-center">
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
              alt="Linkeding Logo"
            />
            <img
              class="hidden lg:block absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100"
              src="../assets/LinkedinRedS.png"
              alt="Linkeding Logo"
            />
          </li>
        </RouterLink>
      </ul>
    </div>
  </header>
</template>

<script>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import Navbar from "./Navbar.vue";

export default {
  name: "Header",
  components: { Navbar },

  setup() {
    const scrolled = ref(false);

    const handleScroll = () => {
      scrolled.value = window.scrollY > 50;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    // onUnmounted(() => {
    //     window.removeEventListener("scroll", handleScroll);
    // });

    return { scrolled };
  },

  data() {
    return {
      navLinks: [
        {
          path: "/about",
          sectionName: "About",
        },
        {
          path: "/work",
          sectionName: "Work",
        },
        {
          path: "/contact",
          sectionName: "Contact",
        },
      ],
    };
  },
};
</script>
<style scoped>
/* Animación del punto */
.animate-slide-in {
  animation: slideIn 1s ease-out forwards;
}

@keyframes slideIn {
  0% {
    transform: translateX(400px) translateY(-60%);
  }
  100% {
    transform: translateX(68px) translateY(-66%);
  }
}
</style>
