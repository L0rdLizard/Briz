<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-main1 p-0 fixed-top pb-2">
        <div class="bg-nav m-0 p-0 container-fluid">
            <div class="container custom-div d-flex justify-content-center align-items-center">
                <a class="navbar-brand d-flex" href="#">
                    <img src="/logo.png" alt="" height="40" class="d-inline-block align-text-top">
                </a>

                <!-- d-flex justify-content-center align-items-center -->
                <div class="collapse navbar-collapse custom-div2" id="navbarNav">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item mx-3 dropdown">
                            <a class="nav-link inter-400 dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown">Сервисы и
                                услуги</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>

                        <li class="nav-item mx-3">
                            <a class="nav-link inter-400" href="#">Информация</a>
                        </li>
                        <li class="nav-item mx-3">
                            <a class="nav-link inter-400" href="#">Бриз Бонус</a>
                        </li>
                        <li class="nav-item mx-3">
                            <!-- <a class="nav-link inter-400" href="/#best-offer">Пассажирам</a> -->
                            <RouterLink class="nav-link inter-400" to="/#best-offer">Пассажирам</RouterLink>
                        </li>
                        <li class="nav-item mx-3">
                            <a class="nav-link inter-400" href="#">Бизнесу</a>
                        </li>
                    </ul>

                    <div class="col navbar-right d-flex justify-content-end">
                        <div class="mx-3">
                            <div class="row">
                                <div class="col-sm">
                                    <p><i class="fas fa-phone inter-400"></i>Call-центр: <a class="inter-400"
                                            href="tel:+79014535382">+7 (901) 453 53
                                            82</a></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="nav-item col" style="white-space: nowrap;">
                                    <a class="nav-link" href="#">Личный кабинет</a>
                                </div>
                                <div class="nav-item col" style="margin-top: -6px;">
                                    <select class="form-select" aria-label="Выбор языка">
                                        <option selected>RU</option>
                                        <option value="1">EN</option>
                                        <option value="2">DE</option>
                                        <option value="3">FR</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>

        <!-- <div class="" style="position: absolute; bottom: 0;">
            <hr class="custom-hr bg-main1 border-color-main1" />
        </div> -->
        <!-- <hr class="custom-hr bg-main1 border-color-main1" style="position: relative;" /> -->
    </nav>


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
    // position: relative;
    z-index: 9998;
}

.custom-div {
    min-height: 85px;
}

.custom-div2 {
    margin-left: 100px;
}

.nav-link {
    color: #134C67;
    font-weight: 600;
}

.dropdown-menu {
    margin-top: 30px;
    left: -522px;
    right: 0px;
    width: 98vw;
    position: absolute;
    z-index: 9999;
}

@media (max-width: 1200px) {
    .custom-div2 {
        margin-left: 0px;
    }
}

@media (max-width: 800px) {
    .navbar {
        flex-direction: column;
    }

    .navbar-right {
        display: flex;
        justify-content: space-between;
    }

    .nav-item {
        margin: 10px 0;
    }

    // .custom-div {
    //     height: auto;
    // }
}

@media (max-width: 550px) {
    .navbar {
        flex-direction: column;
    }

    .navbar-right {
        flex-direction: column;
        align-items: flex-start;
    }

    .nav-item {
        margin: 5px 0;
    }

    // .custom-div {
    //     height: auto;
    // }
}
</style>
