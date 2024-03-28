<template>
    <div class="container-fluid bg-red square-container rounded-top-5 ">
        <!-- <div> -->
        <div class="container" style="margin-bottom: 20px;">

            <div class="row">
                <p class="m-4 mb-2 custom-text1 custom-color-text1 inter-700">ЛУЧШИЕ ПРЕДЛОЖЕНИЯ</p>
                <p class="m-4 mt-0 custom-text2 custom-color-text2 inter-700">БИЛЕТЫ ПО ВЫГОДНЫМ ЦЕНАМ</p>
                <div class="col-md">
                    <div class="card text-bg-dark custom-card">
                        <img src="/holo.gif" class="card-img custom-card" alt="...">
                        <div class="row card-img-overlay d-flex justify-content-bottom align-items-end">
                            <h5 class="card-title">Card title <br> Card text</h5>
                        </div>
                    </div>
                </div>

                <div class="col-md">
                    <div class="card text-bg-dark custom-card">
                        <img src="/test.jpg" class="card-img custom-card" alt="...">
                        <div class=" card-img-overlay d-flex justify-content-bottom align-items-end">
                            <h5 class="card-title">Card title <br> Card text</h5>
                        </div>
                    </div>
                </div>

                <div class="col-md">
                    <div class="card text-bg-dark custom-card">
                        <img src="/holo.gif" class="card-img custom-card" alt="...">
                        <div class="card-img-overlay d-flex justify-content-bottom align-items-end">
                            <h5 class="card-title">Card title <br> Card text</h5>
                        </div>
                    </div>
                </div>

                <div class="col-md">
                    <div class="card text-bg-dark custom-card">
                        <img src="/airplane.png" class="card-img custom-card" alt="...">
                        <div class="card-img-overlay d-flex justify-content-bottom align-items-end">
                            <h5 class="card-title">Card title <br> Card text</h5>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.custom-text1 {
    font-size: 2rem;
}

.custom-text2 {
    font-size: 1rem;
}

.custom-card {
    min-height: 400px;
    object-fit: cover;
    object-position: 20% 50%;
}

.square-container {
    padding: 10px;
    background-color: white;
}
</style>