<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-nav p-0">
        <div class="container custom-div">
            <a class="navbar-brand" href="#">
                <img src="/logo.png" alt="" height="40" class="d-inline-block align-text-top">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-flex justify-content-center align-items-center" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item mx-3">
                        <a class="nav-link active" aria-current="page" href="#">Сервисы и услуги</a>
                    </li>
                    <li class="nav-item mx-3">
                        <a class="nav-link" href="#">Информация</a>
                    </li>
                    <li class="nav-item mx-3">
                        <a class="nav-link" href="#">Бриз Бонус</a>
                    </li>
                    <li class="nav-item mx-3">
                        <a class="nav-link" href="#">Пассажирам</a>
                    </li>
                    <li class="nav-item mx-3">
                        <a class="nav-link" href="#">Бизнесу</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <hr class="custom-hr bg-main1 border-color-main1" />
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { routes } from "@/router";

const siteUrl = import.meta.env.VITE_BUILD_ADDRESS;
const router = useRouter();
const activeRoute = computed(() => router.currentRoute.value.path);
const isActive = (path: string) => path === activeRoute.value;
</script>

<style lang="scss" scoped>
ul {
    list-style: none;
}

.custom-hr {
    margin-top: 0;
    border-width: 8px;
    opacity: 1;
    position: relative;
    z-index: 9999;
}

.custom-div {
    height: 85px;
}

.nav-link {
    color: textc;
    font-weight: 600;
}
</style>