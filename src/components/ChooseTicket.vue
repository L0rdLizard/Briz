<template>
    <div class="container p-2 rounded-4" style="margin-top: 40px; background-color: white; ">
        <div class="container-liquid row p-4 m-4 mt-3 rounded-4 custom-element1">
            <div class="container-liquid col-2">
                <p class="custom-font inter-700 mt-1 mb-1" style="font-size: 36px;"> 9:15 </p>
                <!-- <p class="custom-font inter-400 mt-1 mb-1">Калининград</p> -->
                <p class="custom-font inter-400 mt-1 mb-1"> {{ formData.SFrom }} </p>
                <p class="custom-font inter-400 mt-1 mb-1">Храброво</p>
                <!-- <p class="custom-font inter-400 mt-1 mb-1" style="color: #9D9D9F;">25 марта 2024 г.</p> -->
                <p class="custom-font inter-400 mt-1 mb-1" style="color: #9D9D9F;"> {{ formData.SDate }} </p>
                <p class="mt-3">BR 0235 Boeing 737-800</p>
            </div>

            <div class="container-liquid col-5 pt-0">
                <div class="row">
                    <p class="col d-flex justify-content-start align-items-start custom-font inter-400 ps-1 pb-2 mt-1 mb-1"
                        style="color: #9D9D9F;">
                        <img class="ms-2" src="/plane-departure.png" height="34" alt="Описание иконки">
                    </p>

                    <p class="col d-flex justify-content-center align-items-center custom-font inter-400 pb-2 mt-1 mb-1"
                        style="color: #9D9D9F;">в пути 2 ч</p>

                    <p class="col d-flex justify-content-end align-items-end custom-font inter-400 pb-2 mt-1 mb-1"
                        style="color: #9D9D9F;">
                        <img class="ms-2" src="/plane-arrival.png" height="34" alt="Описание иконки">
                    </p>
                </div>

                <hr class="custom-hr bg-main1 border-color-main1 mb-2" />

                <div class="row pt-0 mb-0 mt-0">
                    <p class="col d-flex justify-content-start align-items-start custom-font inter-400"
                        style="font-weight: 600; font-size: 18px;">KGD</p>
                    <p class="col d-flex justify-content-end align-items-end custom-font inter-400"
                        style="font-weight: 600; font-size: 18px;">LED</p>
                </div>
            </div>

            <div class="container-liquid col-2 " style="text-align: right;">
                <p class="custom-font inter-700 mt-1 mb-1" style="font-size: 36px;">11:45</p>
                <!-- <p class="custom-font inter-400 mt-1 mb-1">Санкт-Петербург</p> -->
                <p class="custom-font inter-400 mt-1 mb-1"> {{ formData.STo }} </p>
                <p class="custom-font inter-400 mt-1 mb-1">Пулково</p>
                <!-- <p class="custom-font inter-400 mt-1 mb-1" style="color: #9D9D9F;">25 марта 2024 г.</p> -->
                <p class="custom-font inter-400 mt-1 mb-1" style="color: #9D9D9F;"> {{ formData.SDate }} </p>
            </div>

            <div class="container-liquid col-3">
                <div class="row">
                    <div class="create-line col"></div>
                    <div class="col container">
                        <button type="button" @click="toggleElements1"
                            class="square-container2 custom-btn1 p-3 m-2 mb-3 rounded-4 custom-font inter-700"
                            style="width: 100%; color: #FBFBFB; min-width: 234px;">
                            {{ isVisible1 ? 'Скрыть' : 'Показать' }}
                        </button>

                    </div>
                </div>
            </div>
        </div>

        <div class="container-liquid row p-4 m-4 mt-3 rounded-4 custom-element2" v-if="isVisible1">
            <div class="container-liquid col-3">
                <p class="custom-font inter-700" style="font-size: 36px;">Базовый</p>
            </div>
            <div class="container-liquid col-3 p-2">
                <p class="mb-0 custom-font inter-400">Ручная кладь 1 место</p>
                <p class="custom-font inter-400">10 кг, 40x30x20 см</p>
                <p class="mt-4 custom-font inter-400" style="color: #9D9D9F;">без багажа</p>
            </div>
            <div class="container-liquid col-3 p-2">
                <p class="mt-0 custom-font" style="color: #9D9D9F;">Возврат не доступен</p>

                <p class="mt-5 custom-font" style="color: #9D9D9F;">Обмен не доступен</p>
            </div>

            <div class="container-liquid col-3">
                <div class="row">
                    <div class="create-line col"></div>
                    <div class="col container">
                        <button type="button"
                            class="square-container2 custom-btn1 p-3 m-2 mb-3 rounded-4 custom-font inter-700"
                            style="width: 100%; color: #FBFBFB; min-width: 234px;">от 4560 руб</button>
                        <button type="button"
                            class="square-container2 custom-btn2 p-3 m-2 mb-3 rounded-4 custom-font inter-700"
                            style="width: 100%; color: #B7B7B8;">от 4060 руб</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-liquid row p-4 m-4 mt-3 rounded-4 custom-element2" v-if="isVisible1">
            <div class="container-liquid col-3">
                <p class="custom-font inter-700" style="font-size: 36px;">Продвинутый</p>
            </div>
            <div class="container-liquid col-3 p-2">
                <p class="mb-0 custom-font inter-400">Ручная кладь 1 место</p>
                <p class="custom-font inter-400">10 кг, 40x30x20 см</p>
                <p class="mt-4 custom-font inter-400">Багаж 1 место до 10 кг</p>
            </div>
            <div class="container-liquid col-3 p-2">
                <p class="mt-0 custom-font" style="color: #9D9D9F;">Обмен до вылета со
                    сбором</p>

                <p class="mt-5 custom-font" style="color: #9D9D9F;">Обмен до вылета со
                    сбором</p>
            </div>

            <div class="container-liquid col-3">
                <div class="row">
                    <div class="create-line col"></div>
                    <div class="col container">
                        <button type="button"
                            class="square-container2 custom-btn1 p-3 m-2 mb-3 rounded-4 custom-font inter-700"
                            style="width: 100%; color: #FBFBFB; min-width: 234px;">от 5100 руб</button>
                        <button type="button"
                            class="square-container2 custom-btn2 p-3 m-2 mb-3 rounded-4 custom-font inter-700"
                            style="width: 100%; color: #B7B7B8;">от 4800 руб</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-liquid row p-4 m-4 mt-3 rounded-4 custom-element2" v-if="isVisible1">
            <div class="container-liquid col-3">
                <p class="custom-font inter-700" style="font-size: 36px;">Максимум</p>
            </div>
            <div class="container-liquid col-3 p-2">
                <p class="mb-0 custom-font inter-400">Ручная кладь 1 место</p>
                <p class="custom-font inter-400">10 кг, 40x30x20 см</p>
                <p class="mt-4 custom-font inter-400">Багаж 1 место до 20 кг</p>
            </div>
            <div class="container-liquid col-3 p-2">
                <p class="mt-0 custom-font inter-400">Бесплатный возврат</p>

                <p class="mt-5 custom-font inter-400">Бесплатный обмен</p>
            </div>

            <div class="container-liquid col-3">
                <div class="row">
                    <div class="create-line col"></div>
                    <div class="col container">
                        <button type="button"
                            class="square-container2 custom-btn1 p-3 m-2 mb-3 rounded-4 custom-font inter-700"
                            style="width: 100%; color: #FBFBFB; min-width: 234px;">от 7230 руб</button>
                        <button type="button"
                            class="square-container2 custom-btn2 p-3 m-2 mb-3 rounded-4 custom-font inter-700"
                            style="width: 100%; color: #B7B7B8;">от 6630 руб</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container p-2 rounded-4" style="margin-top: 40px; background-color: white;">
        <div class="container-liquid row p-4 m-4 mt-3 rounded-4 custom-element1">
            <div class="container-liquid col-2">
                <p class="custom-font inter-700 mt-1 mb-1" style="font-size: 36px;"> 14:15 </p>
                <!-- <p class="custom-font inter-400 mt-1 mb-1">Калининград</p> -->
                <p class="custom-font inter-400 mt-1 mb-1"> {{ formData.SFrom }} </p>
                <p class="custom-font inter-400 mt-1 mb-1">Храброво</p>
                <!-- <p class="custom-font inter-400 mt-1 mb-1" style="color: #9D9D9F;">25 марта 2024 г.</p> -->
                <p class="custom-font inter-400 mt-1 mb-1" style="color: #9D9D9F;"> {{ formData.SDate }} </p>
                <p class="mt-3">BR 0235 Boeing 737-800</p>
            </div>

            <div class="container-liquid col-5 pt-0">
                <div class="row">
                    <p class="col d-flex justify-content-start align-items-start custom-font inter-400 ps-1 pb-2 mt-1 mb-1"
                        style="color: #9D9D9F;">
                        <img class="ms-2" src="/plane-departure.png" height="34" alt="Описание иконки">
                    </p>

                    <p class="col d-flex justify-content-center align-items-center custom-font inter-400 pb-2 mt-1 mb-1"
                        style="color: #9D9D9F;">в пути 2 ч</p>

                    <p class="col d-flex justify-content-end align-items-end custom-font inter-400 pb-2 mt-1 mb-1"
                        style="color: #9D9D9F;">
                        <img class="ms-2" src="/plane-arrival.png" height="34" alt="Описание иконки">
                    </p>
                </div>
                <hr class="custom-hr bg-main1 border-color-main1" />
            </div>

            <div class="container-liquid col-2 " style="text-align: right;">
                <p class="custom-font inter-700 mt-1 mb-1" style="font-size: 36px;">17:45</p>
                <!-- <p class="custom-font inter-400 mt-1 mb-1">Санкт-Петербург</p> -->
                <p class="custom-font inter-400 mt-1 mb-1"> {{ formData.STo }} </p>
                <p class="custom-font inter-400 mt-1 mb-1">Пулково</p>
                <!-- <p class="custom-font inter-400 mt-1 mb-1" style="color: #9D9D9F;">25 марта 2024 г.</p> -->
                <p class="custom-font inter-400 mt-1 mb-1" style="color: #9D9D9F;"> {{ formData.SDate }} </p>
            </div>

            <div class="container-liquid col-3">
                <div class="row">
                    <div class="create-line col"></div>
                    <div class="col container">
                        <button type="button" @click="toggleElements2"
                            class="square-container2 custom-btn1 p-3 m-2 mb-3 rounded-4 custom-font inter-700"
                            style="width: 100%; color: #FBFBFB; min-width: 234px;">
                            {{ isVisible2 ? 'Скрыть' : 'Показать' }}
                        </button>

                    </div>
                </div>
            </div>
        </div>

        <div class="container-liquid row p-4 m-4 mt-3 rounded-4 custom-element2" v-if="isVisible2">
            <div class="container-liquid col-3">
                <p class="custom-font inter-700" style="font-size: 36px;">Базовый</p>
            </div>
            <div class="container-liquid col-3 p-2">
                <p class="mb-0 custom-font inter-400">Ручная кладь 1 место</p>
                <p class="custom-font inter-400">10 кг, 40x30x20 см</p>
                <p class="mt-4 custom-font inter-400" style="color: #9D9D9F;">без багажа</p>
            </div>
            <div class="container-liquid col-3 p-2">
                <p class="mt-0 custom-font" style="color: #9D9D9F;">Возврат не доступен</p>

                <p class="mt-5 custom-font" style="color: #9D9D9F;">Обмен не доступен</p>
            </div>

            <div class="container-liquid col-3">
                <div class="row">
                    <div class="create-line col"></div>
                    <div class="col container">
                        <button type="button"
                            class="square-container2 custom-btn1 p-3 m-2 mb-3 rounded-4 custom-font inter-700"
                            style="width: 100%; color: #FBFBFB; min-width: 234px;">от 4560 руб</button>
                        <button type="button"
                            class="square-container2 custom-btn2 p-3 m-2 mb-3 rounded-4 custom-font inter-700"
                            style="width: 100%; color: #B7B7B8;">от 4060 руб</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-liquid row p-4 m-4 mt-3 rounded-4 custom-element2" v-if="isVisible2">
            <div class="container-liquid col-3">
                <p class="custom-font inter-700" style="font-size: 36px;">Продвинутый</p>
            </div>
            <div class="container-liquid col-3 p-2">
                <p class="mb-0 custom-font inter-400">Ручная кладь 1 место</p>
                <p class="custom-font inter-400">10 кг, 40x30x20 см</p>
                <p class="mt-4 custom-font inter-400">Багаж 1 место до 10 кг</p>
            </div>
            <div class="container-liquid col-3 p-2">
                <p class="mt-0 custom-font" style="color: #9D9D9F;">Обмен до вылета со
                    сбором</p>

                <p class="mt-5 custom-font" style="color: #9D9D9F;">Обмен до вылета со
                    сбором</p>
            </div>

            <div class="container-liquid col-3">
                <div class="row">
                    <div class="create-line col"></div>
                    <div class="col container">
                        <button type="button"
                            class="square-container2 custom-btn1 p-3 m-2 mb-3 rounded-4 custom-font inter-700"
                            style="width: 100%; color: #FBFBFB; min-width: 234px;">от 5100 руб</button>
                        <button type="button"
                            class="square-container2 custom-btn2 p-3 m-2 mb-3 rounded-4 custom-font inter-700"
                            style="width: 100%; color: #B7B7B8;">от 4800 руб</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-liquid row p-4 m-4 mt-3 rounded-4 custom-element2" v-if="isVisible2">
            <div class="container-liquid col-3">
                <p class="custom-font inter-700" style="font-size: 36px;">Максимум</p>
            </div>
            <div class="container-liquid col-3 p-2">
                <p class="mb-0 custom-font inter-400">Ручная кладь 1 место</p>
                <p class="custom-font inter-400">10 кг, 40x30x20 см</p>
                <p class="mt-4 custom-font inter-400">Багаж 1 место до 20 кг</p>
            </div>
            <div class="container-liquid col-3 p-2">
                <p class="mt-0 custom-font inter-400">Бесплатный возврат</p>

                <p class="mt-5 custom-font inter-400">Бесплатный обмен</p>
            </div>

            <div class="container-liquid col-3">
                <div class="row">
                    <div class="create-line col"></div>
                    <div class="col container">
                        <button type="button"
                            class="square-container2 custom-btn1 p-3 m-2 mb-3 rounded-4 custom-font inter-700"
                            style="width: 100%; color: #FBFBFB; min-width: 234px;">от 7230 руб</button>
                        <button type="button"
                            class="square-container2 custom-btn2 p-3 m-2 mb-3 rounded-4 custom-font inter-700"
                            style="width: 100%; color: #B7B7B8;">от 6630 руб</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container p-2 rounded-4" style="margin-top: 40px; background-color: white;">
        <div class="container-liquid row p-4 m-4 mt-3 rounded-4 custom-element1">
            <div class="container-liquid col-2">
                <p class="custom-font inter-700 mt-1 mb-1" style="font-size: 36px;"> 19:15 </p>
                <!-- <p class="custom-font inter-400 mt-1 mb-1">Калининград</p> -->
                <p class="custom-font inter-400 mt-1 mb-1"> {{ formData.SFrom }} </p>
                <p class="custom-font inter-400 mt-1 mb-1">Храброво</p>
                <!-- <p class="custom-font inter-400 mt-1 mb-1" style="color: #9D9D9F;">25 марта 2024 г.</p> -->
                <p class="custom-font inter-400 mt-1 mb-1" style="color: #9D9D9F;"> {{ formData.SDate }} </p>
                <p class="mt-3">BR 0235 Boeing 737-800</p>
            </div>

            <div class="container-liquid col-5 pt-0">
                <div class="row">
                    <p class="col d-flex justify-content-start align-items-start custom-font inter-400 ps-1 pb-2 mt-1 mb-1"
                        style="color: #9D9D9F;">
                        <img class="ms-2" src="/plane-departure.png" height="34" alt="Описание иконки">
                    </p>

                    <p class="col d-flex justify-content-center align-items-center custom-font inter-400 pb-2 mt-1 mb-1"
                        style="color: #9D9D9F;">в пути 2 ч</p>

                    <p class="col d-flex justify-content-end align-items-end custom-font inter-400 pb-2 mt-1 mb-1"
                        style="color: #9D9D9F;">
                        <img class="ms-2" src="/plane-arrival.png" height="34" alt="Описание иконки">
                    </p>
                </div>
                <hr class="custom-hr bg-main1 border-color-main1" />
            </div>

            <div class="container-liquid col-2 " style="text-align: right;">
                <p class="custom-font inter-700 mt-1 mb-1" style="font-size: 36px;">21:45</p>
                <!-- <p class="custom-font inter-400 mt-1 mb-1">Санкт-Петербург</p> -->
                <p class="custom-font inter-400 mt-1 mb-1"> {{ formData.STo }} </p>
                <p class="custom-font inter-400 mt-1 mb-1">Пулково</p>
                <!-- <p class="custom-font inter-400 mt-1 mb-1" style="color: #9D9D9F;">25 марта 2024 г.</p> -->
                <p class="custom-font inter-400 mt-1 mb-1" style="color: #9D9D9F;"> {{ formData.SDate }} </p>
            </div>

            <div class="container-liquid col-3">
                <div class="row">
                    <div class="create-line col"></div>
                    <div class="col container">
                        <button type="button" @click="toggleElements3"
                            class="square-container2 custom-btn1 p-3 m-2 mb-3 rounded-4 custom-font inter-700"
                            style="width: 100%; color: #FBFBFB; min-width: 234px;">
                            {{ isVisible3 ? 'Скрыть' : 'Показать' }}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-liquid row p-4 m-4 mt-3 rounded-4 custom-element2" v-if="isVisible3">
            <div class="container-liquid col-3">
                <p class="custom-font inter-700" style="font-size: 36px;">Базовый</p>
            </div>
            <div class="container-liquid col-3 p-2">
                <p class="mb-0 custom-font inter-400">Ручная кладь 1 место</p>
                <p class="custom-font inter-400">10 кг, 40x30x20 см</p>
                <p class="mt-4 custom-font inter-400" style="color: #9D9D9F;">без багажа</p>
            </div>
            <div class="container-liquid col-3 p-2">
                <p class="mt-0 custom-font" style="color: #9D9D9F;">Возврат не доступен</p>

                <p class="mt-5 custom-font" style="color: #9D9D9F;">Обмен не доступен</p>
            </div>

            <div class="container-liquid col-3">
                <div class="row">
                    <div class="create-line col"></div>
                    <div class="col container">
                        <button type="button"
                            class="square-container2 custom-btn1 p-3 m-2 mb-3 rounded-4 custom-font inter-700"
                            style="width: 100%; color: #FBFBFB; min-width: 234px;">от 4560 руб</button>
                        <button type="button"
                            class="square-container2 custom-btn2 p-3 m-2 mb-3 rounded-4 custom-font inter-700"
                            style="width: 100%; color: #B7B7B8;">от 4060 руб</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-liquid row p-4 m-4 mt-3 rounded-4 custom-element2" v-if="isVisible3">
            <div class="container-liquid col-3">
                <p class="custom-font inter-700" style="font-size: 36px;">Продвинутый</p>
            </div>
            <div class="container-liquid col-3 p-2">
                <p class="mb-0 custom-font inter-400">Ручная кладь 1 место</p>
                <p class="custom-font inter-400">10 кг, 40x30x20 см</p>
                <p class="mt-4 custom-font inter-400">Багаж 1 место до 10 кг</p>
            </div>
            <div class="container-liquid col-3 p-2">
                <p class="mt-0 custom-font" style="color: #9D9D9F;">Обмен до вылета со
                    сбором</p>

                <p class="mt-5 custom-font" style="color: #9D9D9F;">Обмен до вылета со
                    сбором</p>
            </div>

            <div class="container-liquid col-3">
                <div class="row">
                    <div class="create-line col"></div>
                    <div class="col container">
                        <button type="button"
                            class="square-container2 custom-btn1 p-3 m-2 mb-3 rounded-4 custom-font inter-700"
                            style="width: 100%; color: #FBFBFB; min-width: 234px;">от 5100 руб</button>
                        <button type="button"
                            class="square-container2 custom-btn2 p-3 m-2 mb-3 rounded-4 custom-font inter-700"
                            style="width: 100%; color: #B7B7B8;">от 4800 руб</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-liquid row p-4 m-4 mt-3 rounded-4 custom-element2" v-if="isVisible3">
            <div class="container-liquid col-3">
                <p class="custom-font inter-700" style="font-size: 36px;">Максимум</p>
            </div>
            <div class="container-liquid col-3 p-2">
                <p class="mb-0 custom-font inter-400">Ручная кладь 1 место</p>
                <p class="custom-font inter-400">10 кг, 40x30x20 см</p>
                <p class="mt-4 custom-font inter-400">Багаж 1 место до 20 кг</p>
            </div>
            <div class="container-liquid col-3 p-2">
                <p class="mt-0 custom-font inter-400">Бесплатный возврат</p>

                <p class="mt-5 custom-font inter-400">Бесплатный обмен</p>
            </div>

            <div class="container-liquid col-3">
                <div class="row">
                    <div class="create-line col"></div>
                    <div class="col container">
                        <button type="button"
                            class="square-container2 custom-btn1 p-3 m-2 mb-3 rounded-4 custom-font inter-700"
                            style="width: 100%; color: #FBFBFB; min-width: 234px;">от 7230 руб</button>
                        <button type="button"
                            class="square-container2 custom-btn2 p-3 m-2 mb-3 rounded-4 custom-font inter-700"
                            style="width: 100%; color: #B7B7B8;">от 6630 руб</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const formData = store.state.formData
// export { formData }

const isVisible1 = ref(false);
const isVisible2 = ref(false);
const isVisible3 = ref(false);

const toggleElements1 = () => {
    isVisible1.value = !isVisible1.value;
};
const toggleElements2 = () => {
    isVisible2.value = !isVisible2.value;
};
const toggleElements3 = () => {
    isVisible3.value = !isVisible3.value;
};
</script>


<style lang="scss" scoped>
.custom-element1 {
    border-color: black !important;
    border-width: 10px !important;
    background-color: #ffffff;
}

.custom-element1:hover {
    border-color: rgb(192, 37, 37);
    border-width: 10px;
    background-color: #ffffff;
}

.custom-element2 {
    border-color: black;
    border-width: 10px;
    background-color: #E1F0F1;
}

.custom-hr {
    margin-top: 0;
    border-width: 3px;
    opacity: 2;
    // position: relative;
    z-index: 9999;
}

.custom-btn1 {
    border-width: 0px;
    background-color: #EF8B77;
}

.custom-btn2 {
    border: 3px solid #EF8B77;
    border-width: 3px;
    background-color: #FAFBFF;
}

.create-line {
    height: 162px;
    border-left: 3px solid #C3D8DA;
}

.custom-font {
    font-size: 18;
    color: #2C6179;
}
</style>