<template>
<div class="flex flex-col lg:min-h-screen">
    <Header />
    <main class="flex-grow pt-20">
       <RouterView />
    </main>
    <Footer />
</div>

</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
    name: 'Layout',
    components: { 
        Header, 
        Footer
    },
};
</script>

<style>

</style>