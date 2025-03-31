<template>
    <footer class="bg-black pt-5 lg:pt-10 pb-6 px-6 lg:px-20 text-sm w-full ">
        <div class="flex mx-auto gap-24 justify-between h-auto text-white lg:px-8">
           <ul class="">
            <RouterLink to="/">
        <!-- <img class="w-[40px]" src="../assets/ZoLogo.png" alt="Logo Profile" /> -->
        <!-- <img src="../assets/ZoLogoBlack.svg" alt="Logo Profile"> -->
        <img class="w-[40px]" src="../assets/ZoLogoWhite.png" alt="Logo Profile">
        <!-- <span class="font-openSanz font-medium text-2xl lg:text-4xl whitespace-nowrap">Z.</span> -->
      </RouterLink>
                <li class="mt-2 lg:pt-2">Zoraida Moreno</li>
                <li class="lg:pt-2">zoraidamorenocadenas79@gmail.com</li>
                <li class="lg:pt-2">+34 691809125</li>
           </ul>
           <ul class="flex gap-x-2 lg:gap-x4 mt-2">
            <li><img class="h-4 w-4 lg:h-6 lg:w-6" src="../assets/Github.png" alt="Github Logo"></li>
            <li><img class="h-4 w-4 lg:h-6 lg:w-6" src="../assets/Linkedin.png" alt="Linkeding Logo"></li>
           </ul>
        </div>
           <div class="text-gray-500 text-center lg:px-8 lg:flex my-5 lg:mt-10 lg:justify-between">
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