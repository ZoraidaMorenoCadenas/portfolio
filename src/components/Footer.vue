<template>
    <footer class="bg-black pt-5 lg:pt-10 pb-6 px-6 lg:px-20 text-sm w-full ">
        <div class="flex mx-auto gap-24 justify-between h-auto text-white lg:px-8">
           <ul class="">
            <RouterLink to="/">
        <!-- <img class="w-[40px]" src="../assets/ZoLogo.png" alt="Logo Profile" /> -->
        <!-- <img src="../assets/ZoLogoBlack.svg" alt="Logo Profile"> -->
        <img class="w-[40px]" src="../assets/LogoF.png" alt="Logo Profile">
        <!-- <span class="font-openSanz font-medium text-2xl lg:text-4xl whitespace-nowrap">Z.</span> -->
      </RouterLink>
                <li class="mt-2 lg:pt-2 lg:font-light">Zoraida Moreno</li>
                <li class="lg:pt-2 lg:font-light">
                    <a href="mailto:zoraidamorenocadenas79@gmail.com" class=" lg:text-md font-regular text-white hover:underline">
                zoraidamorenocadenas79@gmail.com
              </a>
                </li>
                <li class="lg:pt-2 lg:font-light">+34 691809125</li>
           </ul>
           <ul class="flex gap-x-2 lg:gap-x-4 mt-2">
            <a href="https://github.com/ZoraidaMorenoCadenas" target="_blank" rel="noopener noreferrer">
            <li class="relative">
              <img
                class="hidden lg:block transition-all duration-300 transform hover:scale-120"
                src="../assets/GithubWhite.svg"
                alt="Github Logo"
              />

            </li>
          </a>
          <a href="https://www.linkedin.com/in/zoraida-moreno/" target="_blank" rel="noopener noreferrer">
            <li class="relative">
              <img
                class="hidden lg:block transition-all duration-300 transform hover:scale-120"
                src="../assets/LinkedinWhite.svg"
                alt="Linkedin Logo"
              />
            </li>
          </a>
           </ul>
        </div>
           <div class="text-white font-light text-center lg:px-8 lg:flex my-5 lg:mt-10 lg:justify-between">
            <span class="text-sm lg:text-xs">Made with ♡, HTML5, CSS5 y JS</span> <br>
            <span class="text-sm lg:text-xs">©️ 2025 Zoraida Moreno. All Right Reserved</span>
           </div>
    </footer>
</template>

<script>
export default {
    name: "Footer"
};
</script>