<template>
    <div class="row ms-0 me-2 gap-4 grid-container2" id="dop-service">
        <div class="m-1">
            <div class="row ">
                <p class="col custom-font myriad">Вылет</p>
                <p class="col custom-font myriad ms-5">Прибытие</p>
            </div>
        </div>

        <div class="ms-4 m-1">
            <p class="custom-font myriad">Туда</p>
        </div>

        <div class="ms-3 m-1">
            <p class="custom-font myriad">Обратно</p>
        </div>
    </div>

    <div class="row ms-0 mb-0 gap-4 grid-container">
        <div class="square-container rounded-4">
            <div class="row">
                <input v-model="formData.SFrom" type="text" ref="input1"
                    class="col form-control custom-input-group rounded-4 m-0 me-2 ms-2 custom-font inter-400"
                    placeholder=" " aria-label="Username" aria-describedby="basic-addon1">
                <!-- <button type="button" class="col p-0 "></button> -->
                <button type="button" class="col btn col-1 p-0" @click="swap"><span
                        class="bi-arrow-left-right"></span></button>
                <input v-model="formData.STo" type="text" ref="input2"
                    class="col form-control custom-input-group rounded-4 m-0 me-2 ms-2 custom-font inter-400"
                    placeholder=" " aria-label="Username" aria-describedby="basic-addon1">
            </div>

        </div>

        <div class=" square-container rounded-4">
            <!-- <img class="ms-2" src="/calendar-month.svg" alt="Описание иконки"> -->
            <input v-model="formData.SDate" type="date"
                class="form-control custom-input-group m-0 rounded-4 custom-font myriad" placeholder="Туда"
                aria-label="SDate" aria-describedby="basic-addon1">
        </div>

        <div class=" square-container rounded-4">
            <!-- <img class="ms-2" src="/calendar-month.svg" alt="Описание иконки"> -->

            <input v-model="formData.SDateBack" type="date"
                class="form-control custom-input-group m-0 rounded-4 custom-font myriad" placeholder="Обратно"
                aria-label="SDateBack" aria-describedby="basic-addon1">
        </div>

        <div class="rounded-4 p-0">
            <select class="form-select square-container custom-btn rounded-4 custom-font myriad px-3"
                id="inputGroupSelect01" style="width: 100%; height: 100%;">
                <option class="custom-font myriad" selected>1 клиент</option>
                <option class="custom-font myriad" value="1">1 клиент</option>
                <option class="custom-font myriad" value="2">2 клиента</option>
                <option class="custom-font myriad" value="3">2+ клиента</option>
            </select>
        </div>

        <div class="square-container2 rounded-4 d-flex justify-content-center align-items-center">
            <!-- <button @click="submitForm" type="button"
                class="square-container2 custom-btn  m-0 rounded-4 custom-font myriad"
                style="width: 100%; height: 100%; color: #FBFBFB;">Найти
            </button> -->
            <button type="button" @click="saveData" class="square-container2 custom-btn m-0 rounded-4 custom-font myriad "
                data-bs-toggle="modal" data-bs-target="#ticketModal" style="width: 100%; height: 100%; color: #FBFBFB">
                Найти
            </button>
        </div>

        <div class="modal fade" id="ticketModal">
            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="modal-header">
                        <h4 class="modal-title myriad m-2 p-2">Билеты найдены!</h4>
                        <button type="button" class="close" data-bs-dismiss="modal">&times;</button>
                    </div>

                    <div class="row modal-body p-4" style="zoom: 100%;">
                        <div class="col">
                            <p class="helio mb-0 custom-font2"> Откуда: </p>
                            <p class="helio mt-0 mb-0 custom-font2"> {{ formData.SFrom }} </p>
                            <p class="helio mt-0 custom-font2"> {{ formData.SDate }} </p>
                        </div>

                        <div class="col">
                            <p class="helio mb-0 custom-font"> Куда: </p>
                            <p class="helio mt-0 mb-0 custom-font2"> {{ formData.STo }} </p>
                            <p class="helio mt-0 custom-font2"> {{ formData.SDate }} </p>
                        </div>

                        <button @click="submitForm" type="button"
                            class="square-container2 custom-btn close m-0 rounded-4 custom-font2 myriad p-2"
                            style="width: 100%; height: 100%; color: #FBFBFB;" data-bs-dismiss="modal">Перейти к
                            билетам
                        </button>

                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="row">

        <div class="col-2 ms-1 me-5" style="margin-top: 16px;">
            <div class="form-check mt-2">
                <input class="form-check-input custom-border" type="checkbox" value="" id="flexCheckDefault1"
                    style="margin-top: 4px;">
                <label class="form-check-label custom-font inter-400 ms-2" for="flexCheckDefault1"
                    style="color: #134C67;">
                    Лечу с питомцем
                </label>
            </div>
        </div>

        <div class="col-2 ms-5 me-2" style="margin-top: 16px;">
            <div class="form-check mt-2">
                <input class="form-check-input custom-border" type="checkbox" value="" id="flexCheckDefault2"
                    style="margin-top: 4px;">
                <label class="form-check-label custom-font inter-400 ms-2" for="flexCheckDefault2"
                    style="color: #134C67;">
                    Оплата бонусами
                </label>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const formData = ref({
    SFrom: '',
    STo: '',
    SDate: '',
    SDateBack: ''
})

const store = useStore()
const router = useRouter()

function saveData() {
    store.commit('setFormData', formData.value)
}

function submitForm() {
    if (!formData.value.SFrom || !formData.value.STo || !formData.value.SDate) {
        alert('Поля с вылетом, прибытием и датой должны быть заполнены!')
        return
    }
    store.commit('setFormData', formData.value)
    router.push('/tickets')
}

window.onload = function () {
    var element = document.getElementById('btnradio1') as HTMLInputElement;
    if (element) {
        element.checked = true;
    }
}

const input1 = ref<HTMLInputElement | null>(null)
const input2 = ref<HTMLInputElement | null>(null)



const swap = () => {
    if (formData.value.SFrom && formData.value.STo) {
        let tempFrom = formData.value.SFrom;
        formData.value.SFrom = formData.value.STo;
        formData.value.STo = tempFrom;
    }
}


</script>

<style lang="scss" scoped>
// @import "../scss/variables.scss";

.custom-font2 {
    font-size: 18px;
    font-weight: 500;
    color: #134C67;
}

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.each-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.grid-container {
    margin-top: 0px;
    display: grid;
    grid-template-columns: 7fr 2fr 2fr 2fr 4fr;
}

.grid-container2 {
    margin-top: 18px;
    margin-bottom: -12px;
    display: grid;
    grid-template-columns: 5fr 2fr 7fr;
}


.custom-input-group {
    border-color: #e1f1f0;
    background-color: #e1f1f0;
    color: #134C67;
}

.square-container {
    padding: 4px;
    background-color: #e1f1f0;
}

.square-container2 {
    padding: 0px;
    background-color: #EF8B77;
    // background-color: $ral3022;
}

.custom-btn {
    border-width: 0px;
}

.custom-font {
    font-size: 18px;
    font-weight: 400;
    color: #134C67;
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

@media (max-width: 1280px) {
    .grid-container {
        grid-template-columns: auto;
        margin-right: 50%;
        margin-top: 20px;
        // margin-left: 200px;
    }


    .square-container2 {
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .grid-container2 {
        display: none;
    }
}

@media (max-width: 768px) {
    .grid-container {
        margin-right: 0px;

    }

}

@media (max-width: 550px) {
    .grid-container {
        margin-right: 0px;

    }

}
</style>