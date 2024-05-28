<template>
    <div class="container" style="margin-bottom: 100px;">

        <div class="row">
            <p class="m-4 mb-2 custom-text1 custom-color-text1 inter-700">ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ</p>
            <p class="m-4 mt-0 custom-text2 custom-color-text2 inter-700">ДЛЯ ВАШЕГО КОМФОРТНОГО ПУТЕШЕСТВИЯ</p>
            <div class="col-md pb-2">
                <div class="card w-auto rounded-4" style="width: 18rem;">
                    <div class="ratio ratio-16x9" style="margin-top: -1px;">
                        <img src="/place.jpg" class="card-img-top rounded-4" alt="...">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Выбор места</h5>
                        <p class="card-text mb-4">Выберите себе место в самолёте заранее!</p>
                        <a href="#" class="btn btn-primary bg">Подробнее</a>
                    </div>
                </div>
            </div>

            <div class="col-md pb-2">
                <div class="card w-auto rounded-4" style="width: 18rem;">
                    <div class="ratio ratio-16x9" style="margin-top: -1px;">
                        <img src="/lunch.jpg" class="card-img-top rounded-4" alt="...">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Еда на заказ</h5>
                        <p class="card-text mb-4">Выбор еды заранее</p>
                        <a href="#" class="btn btn-primary bg">Подробнее</a>
                    </div>
                </div>
            </div>

            <div class="col-md pb-2">
                <div class="card w-auto rounded-4" style="width: 18rem;">
                    <div class="ratio ratio-16x9" style="margin-top: -1px;">
                        <img src="/pet.jpg" class="card-img-top rounded-4" alt="...">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Перевозка питомцев</h5>
                        <p class="card-text mb-4">Путешествие с питомцем</p>
                        <a href="#" class="btn btn-primary bg">Подробнее</a>
                    </div>
                </div>
            </div>

        </div>
    </div>


</template>

<style lang="scss" scoped>
@import "../scss/variables.scss";
.custom-text1 {
    font-size: 2rem;
}

.custom-text2 {
    font-size: 1rem;
}

.bg {
    background-color: $ral3022;
    border-width: 0px;
}

.btn-primary:hover {
    background-color: $ral3022;
}
</style>
