<template>
    <div class="container-fluid g-0">
        <!-- <img style="object-fit: cover;" class="img-fluid w-100 min-vh-25 min-vh-md-50 mb-n7 custom-image"
            src="/airplane.png" alt="Photo by Irene Dávila"> -->
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://picsum.photos/1200/350" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://picsum.photos/1200/350" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://picsum.photos/1200/350" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="col carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>

            <button class="col carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

    </div>

    <div class="col container">
        <div class="row">



        </div>
        <div class="row container pt-4 ps-4 bg-body mt-md-n6 position-relative rounded-5 shadow custom-div">

            <TabSelector />

        </div>
    </div>

</template>

<script lang="ts" setup>
import TabSelector from "@/components/TabSelector.vue";
</script>

<style lang="scss" scoped>
.custom-div {
    min-height: 282px;
}

.square-container {
    padding: 10px;
    background-color: #e1f1f0;
}

@media (max-width: 2000px) {
    .custom-div2 {
        margin-left: 0px;
    }

    .custom-image {
        margin-top: -200px;
    }
}

@media (max-width: 1200px) {
    .custom-div2 {
        margin-left: 0px;
    }

    .custom-image {
        margin-top: -200px;
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

    .custom-image {
        margin-top: -200px;
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

    .nav-item {
        margin: 5px 0;
    }

    .custom-image {
        margin-top: -30px;
    }

    .custom-div {
        margin-top: -50px;
    }
}
</style>
