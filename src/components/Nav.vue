<template>
    <nav class="navbar navbar-expand-lg p-0 fixed-top pb-2">
        <div class="bg-nav m-0 p-0 container-fluid">
            <div class="container p-0 d-flex justify-content-center align-items-center custom-div">
                <a class="navbar-brand d-flex mb-2" href="/">
                    <img src="/logoBriz.png" alt="" height="64" class="d-inline-block align-text-top">
                </a>

                <!-- d-flex justify-content-center align-items-center -->
                <div class="collapse navbar-collapse custom-div2 ms-5 me-0" id="navbarNav">
                    <ul class="navbar-nav mr-auto mt-0 me-0">
                        <li class="nav-item mx-4 dropdown">
                            <a class="nav-link helio dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown">Сервисы и услуги</a>
                            <div class="dropdown-menu p-0 pt-4 pb-4" aria-labelledby="navbarDropdown">
                                <div class="container p-0 pe-4 ps-2">
                                    <div class="row">
                                        <div class="col">
                                            <a class="dropdown-item" href="#">Онлайн-сервисы</a>
                                            <a class="dropdown-item" href="#">Покупка билетов</a>
                                            <!-- <div class="dropdown-divider"></div> -->
                                            <a class="dropdown-item" href="#">Управление бронирование</a>
                                            <a class="dropdown-item" href="#">Онлайн-регистрация</a>
                                        </div>
                                        <div class="col">
                                            <a class="dropdown-item" href="#">Услуги</a>
                                            <a class="dropdown-item" href="#">Выбор места</a>
                                            <a class="dropdown-item" href="#">Перевозка питомцев</a>
                                            <a class="dropdown-item" href="#">Несопровождаемый ребенок</a>
                                            <a class="dropdown-item" href="#">Оплата долями</a>
                                            <a class="dropdown-item" href="#">Групповое бронирование</a>
                                        </div>
                                        <div class="col">
                                            <a class="dropdown-item" href="#">От партнеров</a>
                                            <a class="dropdown-item" href="#">Отели</a>
                                            <a class="dropdown-item" href="#">Трансфер</a>
                                            <a class="dropdown-item" href="#">Авто</a>
                                            <a class="dropdown-item" href="#">Экскурсии</a>
                                            <a class="dropdown-item" href="#">Билеты на Аэроэкспресс</a>
                                            <a class="dropdown-item" href="#">Перевозка грузов</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="mx-4">
                            <a class="nav-link helio" href="#">Информация</a>
                        </li>
                        <li class="mx-3">
                            <a class="nav-link helio" href="#">Бриз Бонус</a>
                        </li>
                        <li class="mx-3">
                            <!-- <a class="nav-link inter-400" href="/#best-offer">Пассажирам</a> -->
                            <RouterLink class="nav-link helio" to="/#best-offer">Пассажирам</RouterLink>
                        </li>
                        <li class="mx-3">
                            <a class="nav-link helio" href="#">Бизнесу</a>
                        </li>
                        <li class="ms-5">
                            <a class="nav-link helio" href="#">Личный кабинет</a>
                        </li>
                        <li class="ms-1">
                            <select class="nav-link form-select rounded-3 language helio" aria-label="Выбор языка">
                                <option class="helio" selected>RU</option>
                                <option class="helio" value="1">EN</option>
                                <option class="helio" value="2">DE</option>
                                <option class="helio" value="3">FR</option>
                            </select>
                        </li>
                    </ul>
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
// @import "../scss/variables.scss";

ul {
    list-style: none;
}

.nav-font {
    font-size: 18px;
}

.language {
    border-radius: 0%;
    border-width: 0px;
    // background-color: $nav;
    border-color: #E8E8E8;
}

.custom-hr {
    margin-top: 0;
    border-width: 8px;
    opacity: 1;
    z-index: 9998;
}

.custom-div {
    min-height: 85px;
}

.custom-div2 {
    margin-left: 100px;
}

.navbar {
    // background-color: $ral5001;
    background-color: #00475F;
}

.nav-link {
    color: #00475F;
    // color: $ral5001;
    // color: map-get($colors, redButton);
    font-weight: 600;
}

.dropdown-menu {
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-top: 29px;
    left: -506px;
    right: 0px;
    // width: 99vw;
    width: 207vb;
    position: absolute;
    z-index: 9999;
    background-color: #F5F5F5;
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

}

@media (max-width: 550px) {
    .navbar {
        flex-direction: column;
    }

    .navbar-right {
        flex-direction: column;
        align-items: flex-start;
    }

}
</style>
