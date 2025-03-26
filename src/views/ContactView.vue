<template>
    <div class="lg:flex lg:justify-center w-full lg:min-h-screen items-center justify-center px-4 lg:px-20">
        <div class="lg:w-1/2 p-10">
            <h2 class="font-semibold text-4xl">Get in touch</h2>
        <div class="mt-6">
            <span class="block text-gray-600">Connect with me at</span>
            <span class="font-medium text-lg">zoraidamorenocadenas79@gmail.com</span>
        </div>
        <ul class="flex gap-4 mt-8">
            <RouterLink to="/">
                <li><img src="../assets/GithubBlack.png" alt="Github Logo"></li>
            </RouterLink>
            <RouterLink to="/">  
            <li><img src="../assets/LinkedinBlack.png" alt="Linkeding Logo"></li>
            </RouterLink>
            <RouterLink>
                <li>CV</li>
            </RouterLink>
        </ul>
    </div>

    <form action="" class="lg:w-1/2 lg:p-10 px-10 pb-10">
        <div class="flex flex-col space-y-4">
            <div class="flex flex-col">
                <label for="name" class=" text-gray-700 font-medium mb-2">Name</label>
                <input type="text" id="name" class=" bg-white rounded-md p-3 focus:outline-none focus:ring-gray-400" placeholder="Enter your full name">
            </div>
            <div class="flex flex-col">
                <label for="email" class=" text-gray-700 font-medium mb-2">Email</label>
                <input type="email" id="email" class=" bg-white rounded-md  p-3 focus:outline-none focus:ring-gray-300" placeholder="Enter your Email">
            </div>
            <div class="flex flex-col">
                <label for="message" class=" text-gray-700 font-medium mb-2">Message</label>
                <textarea id="message" class=" bg-white rounded-md p-3 focus:outline-none focus:ring-gray-300" placeholder="Whrite your message here..."></textarea>
            </div>
            
        </div>
        <button class="mt-8 lg:mt-4 bg-black px-8 py-3 text-ml text-white rounded-3xl hover:bg-[#f69494] transition-all">Send</button>
    </form>
    </div>
</template>

<script>
export default {
    name: "ContactView",
}

</script>


