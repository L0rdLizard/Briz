<template>
    <div class="container" style="margin-bottom: 100px; margin-top: 30px;">

        <div class="row">
            <p class="m-4 mb-2 custom-text1 custom-color-style3 gunterz">ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ</p>
            <p class="m-4 mt-0 custom-text2 custom-color-text2 helio">ДЛЯ ВАШЕГО КОМФОРТНОГО ПУТЕШЕСТВИЯ</p>
            <div class="col-md pb-2">
                <div class="card w-auto rounded-4 shadow" style="width: 18rem;">
                    <div class="ratio ratio-16x9" style="margin-top: -1px;">
                        <img src="/place.jpg" class="card-img-top rounded-4" alt="...">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title custom-font myriad">Выбор места</h5>
                        <p class="card-text mb-4 custom-font myriad">Выберите себе место в самолёте заранее!</p>
                        <a href="#" class="btn btn-primary bg myriad">Подробнее</a>
                    </div>
                </div>
            </div>

            <div class="col-md pb-2">
                <div class="card w-auto rounded-4 shadow" style="width: 18rem;">
                    <div class="ratio ratio-16x9" style="margin-top: -1px;">
                        <img src="/lunch.jpg" class="card-img-top rounded-4" alt="...">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title custom-font myriad">Еда на заказ</h5>
                        <p class="card-text mb-4 custom-font myriad">Выбор еды заранее</p>
                        <a href="#" class="btn btn-primary bg myriad">Подробнее</a>
                    </div>
                </div>
            </div>

            <div class="col-md pb-2" >
                <div class="card w-auto rounded-4 shadow" style="width: 18rem;">
                    <div class="ratio ratio-16x9" style="margin-top: -1px;">
                        <img src="/pet.jpg" class="card-img-top rounded-4" alt="...">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title custom-font myriad">Перевозка питомцев</h5>
                        <p class="card-text mb-4 custom-font myriad">Путешествие с питомцем</p>
                        <a href="#" class="btn btn-primary bg myriad">Подробнее</a>
                    </div>
                </div>
            </div>

        </div>
    </div>


</template>

<style lang="scss" scoped>
// @import "../scss/variables.scss";
.custom-text1 {
    font-size: 30px;
}

.custom-text2 {
    font-size: 16px;
}

.bg {
    // background-color: $ral3022;
    background-color: #EF8B77;
    border-width: 0px;
}

.btn-primary:hover {
    background-color: #EF8B77;
    // background-color: $ral3022;
}

.custom-font{
    color: #134C67;
}
</style>
