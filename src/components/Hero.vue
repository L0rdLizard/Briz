<template>
    <div class="container-fluid g-0" >
        <div id="carouselExampleAutoplaying" class="carousel slide custom-image" data-bs-ride="carousel">
            <div class="carousel-inner" >
                <div class="carousel-item active">
                    <img src="/back1.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="/airplane.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="/airplane.png" class="d-block w-100" alt="...">
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


    <div class="container mx-6 pt-4 p-4 mt-n6 bg-body position-relative rounded-5 shadow custom-div">

        <TabSelector />

    </div>


</template>

<script lang="ts" setup>
import TabSelector from "@/components/TabSelector.vue";
</script>

<style lang="scss" scoped>
.custom-div {
    min-height: 282px;
}

.carousel-item {
    transition: transform 1.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

.square-container {
    padding: 10px;
    background-color: #e1f1f0;
}

.mt-n6 {
    margin-top: -6rem !important;
}

.custom-image {
    margin-top: -120px;
}


@media (max-width: 1280px) {
    .custom-div2 {
        margin-left: 0px;
    }

    .custom-image {
        margin-top: 30px;
    }

    .mt-n6{
        margin-top: -3rem !important;
    }
    
}

@media (max-width: 768px) {
    .custom-image {
        margin-top: 0px;
    }

    .mt-n6{
        margin-top: 0rem !important;
    }
}

@media (max-width: 550px) {
    .custom-image {
        margin-top: 80px;
    }

    .mt-n6{
        margin-top: 0rem !important;
    }
}
</style>
