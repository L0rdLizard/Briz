<template>
    <nav class="navbar navbar-expand-lg p-0 fixed-top pb-2">
        <div class="bg-nav m-0 p-0 container-fluid">
            <div class="container p-0 d-flex justify-content-center align-items-center custom-div">
                <a class="navbar-brand d-flex mb-2" href="/">
                    <img src="/logoBriz.png" alt="" height="64" class="d-inline-block align-text-top logo">
                </a>

                <!-- d-flex justify-content-center align-items-center -->
                <div class="collapse navbar-collapse custom-div2 me-0" id="navbarNav">
                    <ul class="navbar-nav mr-auto mt-0 me-0">
                        <li class="nav-item1 right1">
                            <RouterLink class="nav-link helio" to="/#dop-service">Сервисы и услуги</RouterLink>
                            <!-- <a class="nav-link helio" href="#">Сервисы и услуги</a> -->
                        </li>

                        <li class="nav-item1">
                            <!-- <a class="nav-link helio" href="#">Информация</a> -->
                            <RouterLink class="nav-link helio" to="/Info">Информация</RouterLink>
                        </li>

                        <li class="nav-item1">
                            <!-- <a class="nav-link inter-400" href="/#best-offer">Пассажирам</a> -->
                            <RouterLink class="nav-link helio" to="/#best-offer">Пассажирам</RouterLink>
                        </li>

                        <li class="nav-item2 right2">
                            <a class="nav-link helio" href="#">Личный кабинет</a>
                        </li>
                        <li class="">
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
    margin-left: 30px;
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

.nav-item1 {
    margin-left: 1.5cap;
    margin-right: 1.5cap;
}

.nav-item2 {
    margin-left: 6cap;
    margin-right: 1cap;
}

.right1{
    margin-left: 160px;
}

.right2{
    margin-left: 200px;
}

@media (max-width: 1440px) {

    .custom-div2 {
        margin-left: 0px;
    }

    .nav-item1 {
        margin-left: 0cap;
        margin-right: 0cap;
    }

    .nav-item2 {
        margin-left: 0cap;
        margin-right: 0cap;
    }

    .nav-link {
        font-size: 14px;
    }

}

@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
    }

    .navbar-right {
        display: flex;
        justify-content: space-between;
    }

    .nav-item1 {
        margin-left: 0cap;
        margin-right: 0cap;
    }

    .nav-item2 {
        margin-left: 0cap;
        margin-right: 0cap;
    }


    .nav-link {
        font-size: 18px;
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

    .nav-link {
        font-size: 14px;
    }

    .logo {
        height: 54px;
        margin-right: 0px;
    }

    .navbar-toggler {
        margin-right: 20px;
    }
}
</style>
