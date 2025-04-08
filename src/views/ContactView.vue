<template>
    <div class="lg:flex lg:justify-center w-full lg:min-h-screen lg:min-w-screen items-center justify-center px-4 lg:px-18">
        <div class="lg:w-1/2 p-10">
            <h2 class="font-semibold text-4xl">Get in touch</h2>
        <div class="mt-6">
            <span class="block text-gray-600">Connect with me at</span>
            <a href="mailto:zoraidamorenocadenas79@gmail.com" class="lg:font-lg text-gray-600 text-md font-bold hover:underline">
                zoraidamorenocadenas79@gmail.com
              </a>
        </div>
        <ul class="flex gap-4 mt-8 items-center">
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
              alt="Linkeding Logo"
            />
            <img
              class="hidden lg:block absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100"
              src="../assets/LinkedinRedS.png"
              alt="Linkeding Logo"
            />
          </li>
        </a>
        <a href="/CV Resume Zoraida Moreno.pdf" target="_blank" class="cursor-pointer">
          <li class="bg-[#f69494] rounded-full px-4 py-2 text-white font-medium hover:bg-black transition-all">
            CV
          </li>
        </a>
        </ul>
    </div>

    <form action="https://formspree.io/f/movepzzq" method="POST" class="lg:w-1/2 lg:p-6 px-10 pb-10">
        <div class="flex flex-col space-y-4">
            <div class="flex flex-col">
                <label for="name" class=" text-gray-700 font-medium mb-2">Name</label>
                <input type="text" id="name" name="name" class=" bg-white rounded-md p-3 focus:outline-none focus:ring-gray-400" placeholder="Enter your full name">
            </div>
            <div class="flex flex-col">
                <label for="email" class=" text-gray-700 font-medium mb-2">Email</label>
                <input type="email" id="email" name="email" class=" bg-white rounded-md  p-3 focus:outline-none focus:ring-gray-300" placeholder="Enter your Email">
            </div>
            <div class="flex flex-col">
                <label for="message" class=" text-gray-700 font-medium mb-2">Message</label>
                <textarea id="message" name="message" class=" bg-white rounded-md p-3 focus:outline-none focus:ring-gray-300" placeholder="Whrite your message here..."></textarea>
            </div>
            
        </div>
        <button type="submit" class="mt-8 lg:mt-6 bg-black px-10 py-3 text-ml text-white rounded-3xl hover:bg-[#f69494] transition-all">Send</button>
    </form>
    </div>
</template>

<script>
export default {
    name: "ContactView",
}

</script>


