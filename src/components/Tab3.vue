<template>

    <div class="row mt-4 ms-0 mb-0 gap-4" style="margin-top: -16px;">
        <div class="col-4 square-container rounded-4 p-1 d-flex justify-content-center align-items-center">
            <input v-model="formData.SDate" type="text"
                class="form-control custom-input-group ms-0 m-0 p-4 rounded-4 custom-font myriad"
                placeholder="Фамилия клиента" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        <div class="col-4 square-container rounded-4 p-1 d-flex justify-content-center align-items-center">
            <input v-model="formData.SDateBack" type="text"
                class="form-control custom-input-group ms-0 m-0 p-4 rounded-4 custom-font myriad"
                placeholder="Номер бронирования или билета" aria-label="Username" aria-describedby="basic-addon1">
        </div>

        <div class="col-3 square-container2 rounded-4 p-0 d-flex justify-content-center align-items-center">
            <button @click="submitForm" type="button"
                class="square-container2 custom-btn p-0 m-0 rounded-4 custom-font myriad"
                style="width: 100%; height: 100%; color: #FBFBFB;">Поиск</button>
        </div>
    </div>
    <p class="col d-flex justify-content-start align-items-start myriad ps-3 pt-4"
        style="color: #9D9D9F; font-size: 18px">
        Добавляйте необходимые услуги онлайн - это дешевле, чем в аэропорту.</p>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

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