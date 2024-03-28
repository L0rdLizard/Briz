<template>
    <div>
        <!-- Переключатель с тремя кнопками -->
        <b-button-group>
            <b-button variant="primary">Поиск билета</b-button>
            <b-button variant="primary">Онлайн-регистрация</b-button>
            <b-button variant="primary">Управление бронированием</b-button>
        </b-button-group>

        <!-- Первая форма -->
        <form @submit.prevent="submitForm1">
            <label for="clientSurname">Фамилия клиента:</label>
            <input type="text" id="clientSurname" v-model="clientSurname">
            <button type="submit" class="btn btn-primary">Подтвердить</button>
        </form>

        <!-- Вторая форма -->
        <form @submit.prevent="submitForm2">
            <label for="ticketNumber">Номер билета:</label>
            <input type="text" id="ticketNumber" v-model="ticketNumber">
            <button type="submit" class="btn btn-primary">Подтвердить</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            clientSurname: '',
            ticketNumber: ''
        };
    },
    methods: {
        submitForm1() {
            // Обработка первой формы
            console.log('Форма 1 отправлена');
        },
        submitForm2() {
            // Обработка второй формы
            console.log('Форма 2 отправлена');
        }
    }
};
</script>