<template>
    <div class="container-fluid g-0">
        <img style="object-fit: cover;" class="img-fluid w-100 min-vh-25 min-vh-md-50 mb-n7 custom-image"
            src="/airplane.png" alt="Photo by Irene Dávila">
    </div>

    <div class="container pt-4 ps-4 bg-body mt-md-n6 position-relative rounded-5 shadow bg-main2 custom-div"
        style="margin-bottom: 100px;">

        <TabSelector />


        <!-- <div class="row">
            <div class="col-md-4 text-center align-self-center">
                <div class="lc-block border-lg-end border-2 ">
                    <div editable="rich">
                        <p class="display-4 text-secondary">WHY BRIZ?</p>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="lc-block ">
                    <div editable="rich">
                        <p class="display-4">Think different and create a wonderful kind of digital agency.</p>
                    </div>
                </div>
            </div>
        </div> -->



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
        margin-top: 50px;
    }
}
</style>
