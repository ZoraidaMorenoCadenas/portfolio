<template>
  <header
    :class="[
      'px-10 fixed top-0 left-0 w-full transition-all duration-300 z-50 lg:px-20 lg:pt-0 lg:py-0 py-10',
      scrolled
        ? 'bg-[rgba(245,236,236,0.4)] shadow-md backdrop-blur-md'
        : 'bg-[#F5ECEC]',
    ]"
  >
    <div class="flex w-full lg:p-8">
      <RouterLink to="/">
        <img class="w-[70px]" src="../assets/ZoLogo.png" alt="Logo Profile" />
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
