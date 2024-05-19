<template>
    <div class="container p-4 rounded-4" style="margin-top: 140px; background-color: white;">
        <div class="container-liquid">
            <p class="custom-font inter-700 mb-0" style="font-size: 36px;">Цены на соседние даты</p>
            <p class="mb-0 custom-font inter-400 mt-0">За перелёт в одну сторону на одного взрослого пассажира.</p>
        </div>
    </div>
    <div class="col-9 square-container rounded-5 p-1 menu1">
        <div class="btn-group container-fluid p-1" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="btnradio1" id="btnradio1" autocomplete="off"
                value="buy" checked>
            <label class="btn btn-outline-primary rounded-5 custom-btn item active inter-400" for="btnradio1">Купить
                билет</label>

            <input type="radio" class="btn-check" name="btnradio1" id="btnradio2" autocomplete="off"
                value="registration">
            <label class="btn btn-outline-primary rounded-5 custom-btn item inter-400"
                for="btnradio2">Онлайн-регистрация</label>

            <input type="radio" class="btn-check" name="btnradio1" id="btnradio3" autocomplete="off"
                value="management">
            <label class="btn btn-outline-primary rounded-5 custom-btn item inter-400" for="btnradio3">Управление
                бронированием</label>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.custom-font {
    font-size: 18;
    color: #2C6179;
}
</style>