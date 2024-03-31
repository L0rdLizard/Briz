<template>
    <div class="col">
        <div class="row m-0">
            <div class="col-9 square-container rounded-5 p-1 menu1">
                <div class="btn-group container-fluid p-1" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="btnradio1" id="btnradio1" autocomplete="off" checked>
                    <label class="btn btn-outline-primary rounded-5 custom-btn item active" for="btnradio1">Купить
                        билет</label>

                    <input type="radio" class="btn-check" name="btnradio1" id="btnradio2" autocomplete="off">
                    <label class="btn btn-outline-primary rounded-5 custom-btn item"
                        for="btnradio2">Онлайн-регистрация</label>

                    <input type="radio" class="btn-check" name="btnradio1" id="btnradio3" autocomplete="off">
                    <label class="btn btn-outline-primary rounded-5 custom-btn item" for="btnradio3">Управление
                        бронированием</label>
                </div>
            </div>

            <div class="modal fade" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <!-- Заголовок модального окна -->
                        <div class="modal-header">
                            <h4 class="modal-title">Меню</h4>
                            <button type="button" class="close" data-bs-dismiss="modal">&times;</button>
                        </div>

                        <!-- Тело модального окна -->
                        <div class="modal-body">
                            <label for="btnradio1">Купить билет</label>
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"
                                checked>

                            <label for="btnradio2">Онлайн-регистрация</label>
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">

                            <label for="btnradio3">Управление бронированием</label>
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                        </div>

                        <!-- Подвал модального окна -->
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-primary"
                                data-bs-dismiss="modal">Закрыть</button>
                        </div>

                    </div>
                </div>
            </div>

            <button type="button" class="btn btn-outline-primary col-5 square-container rounded-5 menu2"
                data-bs-toggle="modal" data-bs-target="#myModal">
                Меню
            </button>

            <!-- Модальное окно -->


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
        <div class="row mt-4 mb-0 ms-0 me-2">
            <div class="col-2 m-1">
                <p class="custom-font">Город вылета</p>
            </div>
            <div class="col-2 m-1">
                <p class="custom-font">Город прибытия</p>
            </div>
            <div class="col-2 m-1">
                <p class="custom-font">Туда</p>
            </div>
            <div class="col-2 m-1">
                <p class="custom-font">Обратно</p>
            </div>
        </div>
        <div class="row ms-0 mb-0" style="margin-top: -16px;">
            <div class="col-4 square-container rounded-4 m-1 p-1 d-flex justify-content-center align-items-center">
                <div class="row">
                    <input type="text" class="col form-control custom-input-group rounded-4 m-0 me-4 ms-2"
                        placeholder="Откуда" aria-label="Username" aria-describedby="basic-addon1">

                    <input type="text" class="col form-control custom-input-group rounded-4 m-0 me-2 ms-4"
                        placeholder="Куда" aria-label="Username" aria-describedby="basic-addon1">
                </div>

            </div>
            <div class="col-2 square-container rounded-4 m-1 p-1 d-flex justify-content-center align-items-center">
                <img src="/calendar-month.svg" alt="Описание иконки">
                <input type="text" class="form-control custom-input-group m-0 rounded-4" placeholder="Туда"
                    aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="col-2 square-container rounded-4 m-1 p-1 d-flex justify-content-center align-items-center">
                <img src="/calendar-month.svg" alt="Описание иконки">
                <input type="text" class="form-control custom-input-group m-0 rounded-4" placeholder="Обратно"
                    aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="col-2 square-container rounded-4 m-1 p-1 d-flex justify-content-center align-items-center">
                <select class="form-select square-container custom-btn rounded-4" id="inputGroupSelect01"
                    style="width: 100%; height: 100%;">
                    <option selected>Choose...</option>
                    <option value="1">1 клиент</option>
                    <option value="2">2 клиента</option>
                    <option value="3">2+ клиента</option>
                </select>
            </div>
            <div class="col-1 square-container2 rounded-4 m-1 p-0 d-flex justify-content-center align-items-center">
                <button type="button" class="square-container2 custom-btn p-0 m-0 rounded-4"
                    style="width: 100%; height: 100%;">Найти</button>
            </div>
        </div>
    </div>

</template>


<script lang="ts" setup>
import TabSelector from "@/components/TabSelector.vue";
window.onload = function () {
    var element = document.getElementById('btnradio1') as HTMLInputElement;
    if (element) {
        element.checked = true;
    }
}
</script>

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

.custom-input-group {
    border-color: #e1f1f0;
    background-color: #e1f1f0;
    color: #134C67;
}

.square-container {
    padding: 10px;
    background-color: #e1f1f0;
}

.square-container2 {
    padding: 10px;
    background-color: #EF8B77;
}

.custom-btn {
    border-width: 0px;
}

.custom-font {
    font-size: 18px;
    font-weight: 400;
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
