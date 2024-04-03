<template>
    <div class="container p-2 rounded-4" style="margin-top: 100px; background-color: white;">
        <div class="container-liquid col p-4 m-4 mb-3 rounded-4 custom-element1">
            <div class="container-liquid row-3 ">
                <p>9:15</p>
                <p>Калининград</p>
                <p>Храброво</p>

            </div>
        </div>

        <div class="container-liquid row p-4 m-4 mt-3 rounded-4 custom-element2">
            <div class="container-liquid col-3">
                <p>Базовый</p>
            </div>
            <div class="container-liquid col-3">
                <p class="mb-0">Ручная кладь 1 место</p>
                <p>10 кг, 40x30x20 см</p>
                <p class="mt-4">без багажа</p>
            </div>
            <div class="container-liquid col-3">
                <p class="mb-5">Возврат не доступен</p>

                <p class="mt-0">Обмен не доступен</p>
            </div>
            <!-- <hr style="width: 1px; height: 150px; background-color:black; border:none;"> -->
            <!-- <hr class="custom-hr bg-main1 border-color-main1" /> -->

            <div class="container-liquid col-3">
                <div class="row">
                    <div class="create-line col"></div>
                    <div class="col">
                        <p>БазовыйБазовыйБазовыйБазовый</p>
                    </div>
                </div>
            </div>

        </div>
    </div>


</template>

<style lang="scss" scoped>
.custom-element1 {
    border-color: black;
    border-width: 10px;
    background-color: #ffffff;
}

.custom-element2 {
    border-color: black;
    border-width: 10px;
    background-color: #E1F0F1;
}

.custom-hr {
    margin-top: 0;
    border-width: 3px;
    opacity: 2;
    // position: relative;
    z-index: 9999;
}

.create-line {
    height: 100px;
    border-left: 3px solid #32a1ce;
}
</style>
