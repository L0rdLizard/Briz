<template>
    <div class="container-fluid square-container rounded-top-5" id="best-offer">
        <!-- <div> -->
        <div class="container" style="margin-bottom: 20px;">
            <div class="row">
                <div class="col">
                    <p class="m-4 mb-2 custom-text1 custom-color-text1 gunterz">ЛУЧШИЕ ПРЕДЛОЖЕНИЯ</p>
                    <p class="m-4 mt-0 custom-text2 custom-color-text2 helio">БИЛЕТЫ ПО ВЫГОДНЫМ ЦЕНАМ</p>
                </div>
                <div class="col m-4 mb-2 d-flex justify-content-end align-items-center">
                    <button class="m-2 chevron" @click="scrollLeft"> <img class="" src="/chevron-left.png" height="34" alt="Назад"> </button>
                    <button class="m-2 chevron" @click="scrollRight"> <img class="" src="/chevron-right.png" height="34" alt="Вперёд"> </button>
                </div>
            </div>


            <section class="cards" ref="cardsID">

                <div class="card text-bg-dark rounded-4 custom-card card--content p-0">
                    <img src="/city1.png" class="card-img custom-card rounded-4" alt="...">
                    <div class="row card-img-overlay d-flex justify-content-bottom align-items-end">
                        <h5 class="card-title myriad">Новгород <br>От 3540₽</h5>
                    </div>
                </div>

                <div class="card text-bg-dark rounded-4 custom-card card--content p-0">
                    <img src="/city2.png" class="card-img custom-card rounded-4" alt="...">
                    <div class="row card-img-overlay d-flex justify-content-bottom align-items-end">
                        <h5 class="card-title myriad">Калининград<br>От 2100₽</h5>
                    </div>
                </div>

                <div class="card text-bg-dark rounded-4 custom-card card--content p-0">
                    <img src="/city3.png" class="card-img custom-card rounded-4" alt="...">
                    <div class="row card-img-overlay d-flex justify-content-bottom align-items-end">
                        <h5 class="card-title myriad">Санкт-Петербург<br>От 5320₽</h5>
                    </div>
                </div>

                <div class="card text-bg-dark rounded-4 custom-card card--content p-0">
                    <img src="/city4.png" class="card-img custom-card rounded-4" alt="...">
                    <div class="row card-img-overlay d-flex justify-content-bottom align-items-end">
                        <h5 class="card-title myriad">Москва<br>От 2360₽</h5>
                    </div>
                </div>

                <div class="card text-bg-dark rounded-4 custom-card card--content p-0">
                    <img src="/city1.png" class="card-img custom-card rounded-4" alt="...">
                    <div class="row card-img-overlay d-flex justify-content-bottom align-items-end">
                        <h5 class="card-title myriad">Новгород<br>От 3540₽</h5>
                    </div>
                </div>

                <div class="card text-bg-dark rounded-4 custom-card card--content p-0">
                    <img src="/city2.png" class="card-img custom-card rounded-4" alt="...">
                    <div class="row card-img-overlay d-flex justify-content-bottom align-items-end">
                        <h5 class="card-title myriad">Калининград<br>От 2100₽</h5>
                    </div>
                </div>

                <div class="card text-bg-dark rounded-4 custom-card card--content p-0">
                    <img src="/city3.png" class="card-img custom-card rounded-4" alt="...">
                    <div class="row card-img-overlay d-flex justify-content-bottom align-items-end">
                        <h5 class="card-title myriad">Санкт-Петербург<br>От 5320₽</h5>
                    </div>
                </div>


                <div class="card text-bg-dark rounded-4 custom-card card--content p-0">
                    <img src="/city4.png" class="card-img custom-card rounded-4" alt="...">
                    <div class="row card-img-overlay d-flex justify-content-bottom align-items-end">
                        <h5 class="card-title myriad">Москва<br>От 2360₽</h5>
                    </div>
                </div>

            </section>

        </div>
    </div>

</template>


<script lang="ts" setup>
import { ref } from 'vue';

const cardsID = ref<HTMLElement | null>(null);

const scrollLeft = () => {
    console.log('scrollLeft called');
    if (cardsID.value) {
        cardsID.value.scrollBy({
            left: -310,
            behavior: 'smooth'
        });
    }
};

const scrollRight = () => {
    console.log('scrollRight called');
    if (cardsID.value) {
        cardsID.value.scrollBy({
            left: 310,
            behavior: 'smooth'
        });
    }
};
</script>




<style lang="scss" scoped>
.cards {
    background-color: #fff;
    min-width: 100%;
    min-height: 200px;
    overflow-x: auto;
}

.chevron {
    border-width: 0pc;
    border-radius: 0pc;
    background-color: white;

}

.cards {
    display: flex
}

.card--content {
    // background-color: #e74c3c;
    max-width: 300px;
    min-width: 300px;
    max-height: 400px;
    margin: 5px;
}

.cards::-webkit-scrollbar {
    display: none;
}

.custom-text1 {
    font-size: 30px;
}

.custom-text2 {
    font-size: 16px;
}

.custom-card {
    border: 0px;
    min-height: 400px;
    object-fit: cover;
    object-position: 20% 50%;
}

.square-container {
    padding: 10px;
    background-color: white;
}
</style>
