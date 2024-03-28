<template>
    <div class="container-fluid g-0">
        <img style="margin-top: -200px; object-fit: cover;" class="img-fluid w-100 min-vh-25 min-vh-md-50 mb-n7"
            src="/airplane.png" alt="Photo by Irene Dávila">
    </div>

    <div class="container p-5 bg-body mt-md-n6 position-relative rounded-4 shadow bg-main2 custom-div"
        style="margin-bottom: 100px;">

        <div class="container-fluid square-container rounded-5 p-1">
            <div class="btn-group container-fluid p-1" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
                <label class="btn btn-outline-primary rounded-4 custom-btn" for="btnradio1">Radio 1</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                <label class="btn btn-outline-primary rounded-4 custom-btn" for="btnradio2">Radio 2</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                <label class="btn btn-outline-primary rounded-4 custom-btn" for="btnradio3">Radio 3</label>

            </div>
        </div>


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


<style lang="scss" scoped>
.custom-div {
    height: 282px;
}

.square-container {
    padding: 10px;
    background-color: #e1f1f0;
}

.custom-btn {
    border-width: 0px;
}

/* Стиль для неактивных кнопок */
.btn-check:checked+.custom-btn {
    background-color: white;
    color: #134C67;
}

/* Стиль для неактивных кнопок */
.btn-check:not(:checked)+.custom-btn {
    background-color: e1f1f0;
    color: #134C67;
}
</style>
