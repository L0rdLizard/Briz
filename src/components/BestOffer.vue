<template>
    <div class="container-fluid square-container rounded-top-5" id="best-offer">
        <!-- <div> -->
        <div class="container" style="margin-bottom: 20px;">

            <p class="m-4 mb-2 custom-text1 custom-color-text1 inter-700">ЛУЧШИЕ ПРЕДЛОЖЕНИЯ</p>
            <p class="m-4 mt-0 custom-text2 custom-color-text2 inter-700">БИЛЕТЫ ПО ВЫГОДНЫМ ЦЕНАМ</p>
            <div class="row">
                <div class="col-6 col-md-4 col-lg-3 mb-4">
                    <div class="card text-bg-dark custom-card rounded-4">
                        <img src="/holo.gif" class="card-img custom-card rounded-4" alt="...">
                        <div class="row card-img-overlay d-flex justify-content-bottom align-items-end">
                            <h5 class="card-title">Card title <br> Card text</h5>
                        </div>
                    </div>
                </div>

                <div class="col-6 col-md-4 col-lg-3 mb-4">
                    <div class="card text-bg-dark custom-card rounded-4">
                        <img src="/test.jpg" class="card-img custom-card rounded-4" alt="...">
                        <div class=" card-img-overlay d-flex justify-content-bottom align-items-end">
                            <h5 class="card-title">Card title <br> Card text</h5>
                        </div>
                    </div>
                </div>

                <div class="col-6 col-md-4 col-lg-3 mb-4">
                    <div class="card text-bg-dark custom-card rounded-4">
                        <img src="/holo.gif" class="card-img custom-card rounded-4" alt="...">
                        <div class="card-img-overlay d-flex justify-content-bottom align-items-end">
                            <h5 class="card-title">Card title <br> Card text</h5>
                        </div>
                    </div>
                </div>

                <div class="col-6 col-md-4 col-lg-3 mb-4">
                    <div class="card text-bg-dark custom-card rounded-4">
                        <img src="/airplane.png" class="card-img custom-card rounded-4" alt="...">
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
    border: 0px;
    min-height: 400px;
    object-fit: cover;
    object-position: 20% 50%;
}

.square-container {
    padding: 10px;
    background-color: white;
}
</style>