<template>
    <div class="row m-0">

        <div class="col-8 square-container rounded-5 p-1 menu1">
            <div class="btn-group container-fluid p-1" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
                <label class="btn btn-outline-primary rounded-5 custom-btn item" for="btnradio1">Купить билет</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                <label class="btn btn-outline-primary rounded-5 custom-btn item"
                    for="btnradio2">Онлайн-регистрация</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                <label class="btn btn-outline-primary rounded-5 custom-btn item" for="btnradio3">Управление
                    бронированием</label>
            </div>
        </div>



        <button type="button" class="btn btn-outline-primary col-5 square-container rounded-5 menu2" data-toggle="modal"
            data-target="#myModal">
            Меню
        </button>

        <!-- Модальное окно -->
        <div class="modal fade" id="myModal">
            <div class="modal-dialog">
                <div class="modal-content">

                    <!-- Заголовок модального окна -->
                    <div class="modal-header">
                        <h4 class="modal-title">Меню</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Тело модального окна -->
                    <div class="modal-body">
                        <label for="btnradio1">Купить билет</label>
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>

                        <label for="btnradio2">Онлайн-регистрация</label>
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">

                        <label for="btnradio3">Управление бронированием</label>
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                    </div>

                    <!-- Подвал модального окна -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-primary" data-dismiss="modal">Закрыть</button>
                    </div>

                </div>
            </div>
        </div>



        <div class="col d-flex justify-content-end align-items-center me-4">
            <div class="form-check">
                <input class="form-check-input custom-border" type="checkbox" value="" id="flexCheckDefault"
                    style="margin-top: 4px;">
                <label class="form-check-label custom-font" for="flexCheckDefault">
                    Есть промокод
                </label>
            </div>
        </div>

    </div>

</template>

<style lang="scss" scoped>
@media (max-width: 800px) {
    .menu1 {
        display: none;
    }

    .menu2 {
        display: block;
    }
}

@media (min-width: 801px) {
    .menu1 {
        display: block;
    }

    .menu2 {
        display: none;
    }
}

.square-container {
    padding: 10px;
    background-color: #e1f1f0;
}

.custom-btn {
    border-width: 0px;
}

.custom-font {
    font-size: 18px;
    font-weight: 500;
}

.custom-border {
    width: 20px;
    height: 20px;
    border-width: 2px;
    border-radius: 30%;
    border-color: #0E4B66;
}

.btn-check:checked+.custom-btn {
    background-color: white;
    color: #134C67;
    font-weight: 600;
    font-size: 18px;
}

.btn-check:not(:checked)+.custom-btn {
    background-color: #e1f1f0;
    color: #56869C;
    font-weight: 600;
    font-size: 18px;
}

.item {
    flex: 1 1 0;
    width: 0;
}
</style>
