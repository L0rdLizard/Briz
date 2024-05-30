<template>
    <!-- <hr class="custom-hr bg-main1 border-color-main1" /> -->
    <div class="py-1 d-flex justify-content-between align-items-center bg-main2">
        <!-- <section>
            <Refs /> <a href="https://github.com/L0rdLizard" class="text-decoration-none"
                title="My Github">L0rdLizard</a>
            <a href="https://github.com/L0rdLizard" class="text-decoration-none ms-1" title="My Github">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                    <g id="feGithub0" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                        <g id="feGithub1" fill="currentColor">
                            <path id="feGithub2"
                                d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.338 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.912-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z" />
                        </g>
                    </g>
                </svg>
            </a>
        </section> -->
        <div class="container p-0 pe-4 ps-4">
            <div class="row mt-0 mb-3">
                <div class="col ">
                    <div>
                        <img src="/logoBriz.png" alt="" height="56" class="d-inline-block align-text-top mb-0">
                    </div>
                    <div class="mt-2 ms-2">
                        <a class="dropdown-item" href="#">Онлайн-сервисы</a>
                        <a class="dropdown-item" href="#">Покупка билетов</a>
                        <a class="dropdown-item" href="#">Управление бронирование</a>
                        <a class="dropdown-item" href="#">Онлайн-регистрация</a>
                    </div>
                </div>
                <div class="col">
                    <div class="mt-4">
                        <a class="dropdown-item custom-color-text1 custom-text1 inter-700" href="#">Услуги</a>
                    </div>
                    <div class="mt-1">
                        <a class="dropdown-item" href="#">Выбор места</a>
                        <a class="dropdown-item" href="#">Еда на гейт</a>
                        <a class="dropdown-item" href="#">Дполнительное место</a>
                        <a class="dropdown-item" href="#">Все услуги и сервисы</a>
                    </div>
                </div>
                <div class="col">
                    <div class="mt-4">
                        <a class="dropdown-item custom-color-text1 custom-text1 inter-700" href="#">Перед полётом</a>
                    </div>
                    <div class="mt-1">
                        <a class="dropdown-item" href="#">Ручная кладь</a>
                        <a class="dropdown-item" href="#">Регестрация на рейс</a>
                        <a class="dropdown-item" href="#">Путешествие с детьми</a>
                        <a class="dropdown-item" href="#">Вопросы и ответы</a>
                    </div>
                </div>
                <div class="col">
                    <div class="mt-4">
                        <a class="dropdown-item custom-color-text1 custom-text1 inter-700" href="#">О компании</a>
                    </div>
                    <div class="mt-1">
                        <a class="dropdown-item" href="#">Контакты</a>
                        <a class="dropdown-item" href="#">Новости</a>
                        <a class="dropdown-item" href="#">О нас</a>
                        <a class="dropdown-item" href="#">Направления</a>
                    </div>
                </div>

            </div>
            <div class="col d-flex flex-column">
                <div class="mt-auto rounded-4">
                    <p class="custom-text gunterz ms-3"><i class="fas fa-phone"></i>
                    <p class="inter-400 custom-text helio" href="tel:+79014535382">Call-центр: +7(901) 453 53 82
                    </p>
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>


<style lang="scss" scoped>
.custom-tel {
    background-color: #EF8B77;
    align-content: center;
    align-items: center;
}

.custom-text {
    color: #56869C;
    font-size: 18px;
    align-content: center;
    align-items: center;
}

.custom-hr {
    margin-top: 0;
    border-width: 1px;
    opacity: 1;
    position: relative;
    z-index: 9999;
}

.dropdown-item {
    margin-bottom: 1pc;
}

.custom-text1 {
    font-size: 18px;
    font-weight: 700;
}
</style>