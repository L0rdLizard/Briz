<template>
    <div class="row mt-4 mb-0 ms-0 me-2 gap-4 grid-container2">
        <div class=" m-1">
            <div class="row ">
                <p class="col custom-font inter-400">Вылет</p>
                <p class="col custom-font inter-400 ms-5">Прибытие</p>
            </div>
        </div>

        <div class=" m-1">
            <p class="custom-font inter-400">Туда</p>
        </div>

        <div class="ms-3 m-1">
            <p class="custom-font inter-400">Обратно</p>
        </div>
    </div>
    <div class="row ms-0 mb-0 gap-4 grid-container" style="margin-top: -16px;">
        <div class=" square-container rounded-4 p-1 d-flex justify-content-center align-items-center">
            <div class="row">
                <input v-model="formData.SFrom" type="text" ref="input1"
                    class="col form-control custom-input-group rounded-4 m-0 me-2 ms-2 custom-font inter-400"
                    placeholder=" " aria-label="Username" aria-describedby="basic-addon1">
                <!-- <button type="button" class="col p-0 "></button> -->
                <button type="button" class="btn col-1 p-0" @click="swap"><span
                        class="bi-arrow-left-right"></span></button>
                <input v-model="formData.STo" type="text" ref="input2"
                    class="col form-control custom-input-group rounded-4 m-0 me-2 ms-2 custom-font inter-400"
                    placeholder=" " aria-label="Username" aria-describedby="basic-addon1">
            </div>

        </div>
        <div class=" square-container rounded-4 p-1 d-flex justify-content-center align-items-center">
            <!-- <img class="ms-2" src="/calendar-month.svg" alt="Описание иконки"> -->
            <input v-model="formData.SDate" type="date"
                class="form-control custom-input-group m-0 rounded-4 custom-font inter-400" placeholder="Туда"
                aria-label="SDate" aria-describedby="basic-addon1">
        </div>
        <div class=" square-container rounded-4 p-1 d-flex justify-content-center align-items-center">
            <!-- <img class="ms-2" src="/calendar-month.svg" alt="Описание иконки"> -->

            <input v-model="formData.SDateBack" type="date"
                class="form-control custom-input-group m-0 rounded-4 custom-font inter-400" placeholder="Обратно"
                aria-label="SDateBack" aria-describedby="basic-addon1">
        </div>
        <div class=" square-container rounded-4 p-0 d-flex justify-content-center align-items-center">
            <select class="form-select square-container custom-btn rounded-4 custom-font inter-400 px-3"
                id="inputGroupSelect01" style="width: 100%; height: 100%;">
                <option class="custom-font inter-400" selected>1 клиент</option>
                <option class="custom-font inter-400" value="1">1 клиент</option>
                <option class="custom-font inter-400" value="2">2 клиента</option>
                <option class="custom-font inter-400" value="3">2+ клиента</option>
            </select>
        </div>
        <div class="square-container2 rounded-4 p-0 d-flex justify-content-center align-items-center">
            <button @click="submitForm" type="button"
                class="square-container2 custom-btn p-0 m-0 rounded-4 custom-font inter-700"
                style="width: 100%; height: 100%; color: #FBFBFB;">Найти</button>
        </div>
    </div>
    <div class="row">

        <div class="col-2 ms-1 me-2" style="margin-top: 16px;">
            <div class="form-check mt-2">
                <input class="form-check-input custom-border" type="checkbox" value="" id="flexCheckDefault1"
                    style="margin-top: 4px;">
                <label class="form-check-label custom-font inter-400 ms-2" for="flexCheckDefault1"
                    style="color: #134C67;">
                    Лечу с питомцем
                </label>
            </div>
        </div>

        <div class="col-2 ms-1 me-2" style="margin-top: 16px;">
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
import Tab1 from "@/components/Tab1.vue";
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
// import { store } from '@/store';

const formData = ({
    SFrom: '',
    STo: '',
    SDate: '',
    SDateBack: ''
})

const store = useStore()
const router = useRouter()

function submitForm() {
    store.commit('setFormData', formData)
    router.push('/tickets')
}

// export { formData, submitForm }


window.onload = function () {
    var element = document.getElementById('btnradio1') as HTMLInputElement;
    if (element) {
        element.checked = true;
    }
}

const input1 = ref<HTMLInputElement | null>(null)
const input2 = ref<HTMLInputElement | null>(null)

const swap = () => {
    if (input1.value && input2.value) {
        let temp = input1.value.value
        input1.value.value = input2.value.value
        input2.value.value = temp

        let tempData = formData.SFrom
        formData.SFrom = formData.STo
        formData.STo = tempData
    }
}

// const strfrom = ref('');
// const strto = ref('');
// function swap(event: any) {
//     const strtemp = strfrom.value;
//     strfrom.value = strto.value;
//     strto.value = strtemp;
// }

</script>

<style lang="scss" scoped>
// @import "../scss/variables.scss";

.grid-container {
    display: grid;
    grid-template-columns: 7fr 2fr 2fr 2fr 4fr; 
}

.grid-container2 {
    display: grid;
    grid-template-columns: 5fr 2fr 7fr; 
}

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
    padding: 0px;
    background-color: #e1f1f0;
}

.square-container2 {
    padding: 10px;
    background-color: #EF8B77;
    // background-color: $ral3022;
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