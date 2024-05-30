<template>
    <div class="p-3 " style="margin-top: 90px; background-color: #1DABAB; ">
        <div class="container p-2 rounded-4" style="margin-top: 40px;">
            <p class="custom-font gunterz ">Информация</p>
        </div>
    </div>

    <div class="p-3">
        <div class="container p-2 rounded-4" style="margin-top: 40px;">
            <p class="custom-font gunterz m-0">Подготовка к полёту</p>
            <p class="custom-font2 helio m-0">Подробно о тарифах, правилах перевозки, размерах ручной клади и багажа,
                путешествии с ребёнком</p>
        </div>
    </div>

    <div class="container p-2 rounded-4" style="margin-top: 40px;">
        <div class="row">
            <div class="col-sm container p-5 rounded-4 custom-card"
                style="margin-top: 40px; background-color: white; ">
                <p class="custom-font3 helio mb-2">Ручная кладь и багаж</p>
                <p class="custom-font2 myriad m-0">Размеры, стоимость и правила перевозки ручной клади и багажа,
                    подробная информация о перевозке спортинвентаря, колясок, перевесе багажа</p>
            </div>

            <div class="col-sm container p-5 rounded-4 custom-card" style="margin-top: 40px; background-color: white; ">
                <p class="custom-font3 helio mb-2">Способы оплаты</p>
                <p class="custom-font2 myriad m-0">Все доступные варианты оплаты бронирования и дополнительных услуг. 
                    Бронируйте онлайн — это быстрее и дешевле, чем в аэропорту</p>
            </div>

            <div class="col-sm container p-5 rounded-4 custom-card" style="margin-top: 40px; background-color: white; ">
                <p class="custom-font3 helio mb-2">Регистрация на рейс</p>
                <p class="custom-font2 myriad m-0">Зарегистрироваться на рейс можно двумя способами: онлайн или в аэропорту. 
                    Приезжайте в аэропорт заранее для прохождения всех предполётных формальностей</p>
            </div>
        </div>

        <div class="row gap-4">
            <div class="col-sm container p-5 rounded-4 custom-card" style="margin-top: 40px; background-color: white; ">
                <p class="custom-font3 helio mb-2">Возврат и обмен билетов</p>
                <p class="custom-font2 myriad m-0">Есть ряд случаев, когда возврат считается вынужденным, и после подтверждения причин возврата вам вернут деньги. 
                    Обмен билетов не допускается за исключением некоторых изменений</p>
            </div>

            <div class="col-sm container p-5 rounded-4 custom-card" style="margin-top: 40px; background-color: white; ">
                <p class="custom-font3 helio mb-2">Тарифы и условия</p>
                <p class="custom-font2 myriad m-0">Информация о правилах применения тарифов, сборах за дополнительные услуги и изменения в бронировании</p>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.custom-card {
    margin: 12px;
}

.custom-font {
    font-size: 36px;
    color: #134C67;
}

.custom-font2 {
    color: #134C67;
}

.custom-font3 {
    font-size: 20px;
    font-weight: 600;
    color: #134C67;
}

@media (max-width: 1280px) {
    .custom-card {
        margin-left: 20px;
        margin-right: 20px;
    }
}

@media (max-width: 768px) {}

@media (max-width: 550px) {}
</style>