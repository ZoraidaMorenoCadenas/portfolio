<template>
    <footer class="bg-black pt-5 lg:pt-10 pb-6 px-14 lg:px-20 text-sm w-full ">
        <div class="flex mx-auto gap-24 justify-between h-24 text-white lg:px-8">
           <ul class="">
            <RouterLink to="/">
        <!-- <img class="w-[40px]" src="../assets/ZoLogo.png" alt="Logo Profile" /> -->
        <!-- <img src="../assets/ZoLogoBlack.svg" alt="Logo Profile"> -->
        <img class="w-[40px]" src="../assets/ZoLogoWhite.png" alt="Logo Profile">
        <!-- <span class="font-openSanz font-medium text-2xl lg:text-4xl whitespace-nowrap">Z.</span> -->
      </RouterLink>
                <li class="pt-2">Zoraida Moreno</li>
                <li class="pt-2">zoraidamorenocadenas79@gmail.com</li>
                <li class="pt-2">+34 691809125</li>
           </ul>
           <ul class="flex gap-x-4">
            <li><img src="../assets/Github.png" alt="Github Logo"></li>
            <li><img src="../assets/Linkedin.png" alt="Linkeding Logo"></li>
           </ul>
        </div>
           <div class="text-gray-500 text-center lg:px-8 lg:flex lg:mt-10 lg:justify-between">
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