<template>
    <Nav style="zoom: 100%;" />

    <main class="flex-shrink-0 mb-4" style="zoom: 100%;">
        <router-view />
    </main>

    <footer class="container footer mb-2 mt-auto custom-footer" style="zoom: 100%;">
        <Footer />
    </footer>

</template>

<script lang="ts" setup>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
</script>

<style lang="scss" scoped>
.custom-footer {
    background-color: #F2F2F2;
}
</style>