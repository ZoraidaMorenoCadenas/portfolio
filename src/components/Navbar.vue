<template>
    <nav class="flex w-full items-center justify-end lg:justify-center relative">
        <ul class="md:flex items-center gap-8">
            <li v-for="link in navLinks" :key="link.path">
                <RouterLink :to="link.path" exact-active-class="active-link" class="hidden md:block lg:font-light">
                    {{ link.sectionName }}
                </RouterLink>
            </li>
               <!-- Button hamburguer -->
            <div class="block md:hidden lg:me-2">
        <button @click="showLinks()" class="text-gray">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
        </ul>
        <!-- Menú desplegable (en columna) -->
    <div
      :class="['absolute top-full right-0 w-full bg-gray-600 opacity-90 text-gray-300', isMenuHamb ? 'flex flex-col items-center py-4 z-10' : 'hidden']"
      class="md:hidden" @click="this.isMenuHamb = false">
      <!-- Enlaces en columna -->
      <ul class="space-y-4 w-full px-4">
        <li v-for="link in navLinks" :key="link.path">
          <RouterLink @click="closeMenu()" :to="link.path"
            class="text-gray hover:border-b-2 font-montserrat tracking-wide hover:border-gray block text-center"
            exact-active-class="active-link">
            {{ link.sectionName }}
          </RouterLink>
        </li>
        <li class="mt-3 text-center"></li>
      </ul>
    </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    props: ["navLinks"],
    data(){
        return {
            isMenuHamb: false,
            isLoading: true,
        };
    },
    methods:{
        showLinks(){
             // Alternar la visibilidad del menú
            this.isMenuHamb = !this.isMenuHamb;
        },
        closeMenu() {
            this.isMenuHamb = false;
        }
    },  
}

</script>

<style>
    .active-link {
  border-bottom: 3px solid #e74c3c;
  /* color anterior #f69494; */
}
</style>
