<template>
    <div class="col">
        <div class="row m-0">
            <div class="col-9 square-container rounded-5 p-1 menu1">
                <div class="btn-group container-fluid p-1" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="btnradio1" id="btnradio1" autocomplete="off"
                        v-model="selectedOption" value="buy" checked>
                    <label class="btn btn-outline-primary rounded-5 custom-btn item active myriad"
                        for="btnradio1">Купить билет</label>

                    <input type="radio" class="btn-check" name="btnradio1" id="btnradio2" autocomplete="off"
                        v-model="selectedOption" value="registration">
                    <label class="btn btn-outline-primary rounded-5 custom-btn item myriad"
                        for="btnradio2">Онлайн-регистрация</label>

                    <input type="radio" class="btn-check" name="btnradio1" id="btnradio3" autocomplete="off"
                        v-model="selectedOption" value="management">
                    <label class="btn btn-outline-primary rounded-5 custom-btn item myriad" for="btnradio3">Управление
                        бронированием</label>
                </div>
            </div>

            <div class="modal fade" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h4 class="modal-title myriad m-2 p-2">Меню</h4>
                            <button type="button" class="close" data-bs-dismiss="modal">&times;</button>
                        </div>

                        <div class="row modal-body" style="zoom: 100%;">
                            <div class="col square-container rounded-5 p-0 m-1">
                                <div class="btn-group container-fluid p-1" role="group"
                                    aria-label="Basic radio toggle button group">
                                    <input type="radio" class="btn-check" name="btnradio11" id="btnradio1"
                                        autocomplete="off" v-model="selectedOption" value="buy" checked>
                                    <label class="btn btn-outline-primary rounded-5 custom-btn item active myriad p-3"
                                        for="btnradio1">Купить билет</label>

                                    <input type="radio" class="btn-check" name="btnradio11" id="btnradio2"
                                        autocomplete="off" v-model="selectedOption" value="registration">
                                    <label class="btn btn-outline-primary rounded-5 custom-btn item myriad p-3"
                                        for="btnradio2">Онлайн-регистрация</label>

                                    <input type="radio" class="btn-check" name="btnradio11" id="btnradio3"
                                        autocomplete="off" v-model="selectedOption" value="management">
                                    <label class="btn btn-outline-primary rounded-5 custom-btn item myriad p-3"
                                        for="btnradio3">Управление
                                        бронированием</label>
                                </div>
                            </div>
                        </div>
                        <!-- 
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-primary"
                                data-bs-dismiss="modal myriad">Закрыть</button>
                            <h4 class="modal-title myriad">Закрыть</h4>
                            <button type="button" class="close" >&times;</button>
                        </div> -->

                    </div>
                </div>
            </div>

            <button type="button"
                class="btn btn-outline-primary col-5 square-container rounded-5 menu2 custom-font inter-400"
                data-bs-toggle="modal" data-bs-target="#myModal">
                Меню
            </button>

            <div class="col d-flex justify-content-end align-items-center me-4">
                <div class="form-check">
                    <input class="form-check-input custom-border" type="checkbox" value="" id="flexCheckDefault"
                        style="margin-top: 4px;">
                    <label class="form-check-label custom-font myriad ms-1" for="flexCheckDefault"
                        style="color: #134C67;">
                        Есть промокод
                    </label>
                </div>
            </div>
        </div>

        <div v-if="selectedOption === 'buy'">
            <Tab1 />
        </div>
        <div v-else-if="selectedOption === 'registration'">
            <Tab2 />
        </div>
        <div v-else-if="selectedOption === 'management'">
            <Tab3 />
        </div>
    </div>

</template>


<script lang="ts" setup>
import { ref } from 'vue'
import Tab1 from "@/components/Tab1.vue";
import Tab2 from "@/components/Tab2.vue";
import Tab3 from "@/components/Tab3.vue";

const selectedOption = ref('buy');

window.onload = function () {
    var element = document.getElementById('btnradio1') as HTMLInputElement;
    if (element) {
        element.checked = true;
    }
}

const strfrom = ref('');
const strto = ref('');
function swap(event: any) {
    const strtemp = strfrom.value;
    strfrom.value = strto.value;
    strto.value = strtemp;
}

</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";

.menu1 {
    display: block;
}

.menu2 {
    display: none;
}

@media (max-width: 1280px) {}

@media (max-width: 768px) {

    .menu1 {
        display: none;
    }

    .menu2 {
        display: block;
    }
}

@media (max-width: 550px) {}

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
    // background-color: #EF8B77;
    background-color: $ral3022;
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
