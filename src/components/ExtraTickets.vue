<template>
    <div class="container p-4 rounded-4" style="margin-top: 140px; background-color: white;">
        <div class="container-liquid">
            <p class="custom-font inter-700 mb-0" style="font-size: 36px;">Цены на соседние даты</p>
            <p class="mb-0 custom-font inter-400 mt-0">За перелёт в одну сторону на одного взрослого пассажира.</p>
        </div>
        <div class="square-container rounded-4 p-1 mt-4">
            <div class="btn-group container-fluid p-2" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio1" id="btnradio1" autocomplete="off" value="1"
                    checked>
                <label class="btn btn-outline-primary rounded-4 custom-btn item active inter-400 p-3 m-1"
                    for="btnradio1">1</label>

                <input type="radio" class="btn-check" name="btnradio1" id="btnradio2" autocomplete="off" value="2">
                <label class="btn btn-outline-primary rounded-4 custom-btn item inter-400 p-3 m-1"
                    for="btnradio2">2</label>

                <input type="radio" class="btn-check" name="btnradio1" id="btnradio3" autocomplete="off" value="3">
                <label class="btn btn-outline-primary rounded-4 custom-btn item inter-400 p-3 m-1"
                    for="btnradio3">3</label>

                <input type="radio" class="btn-check" name="btnradio1" id="btnradio4" autocomplete="off" value="4">
                <label class="btn btn-outline-primary rounded-4 custom-btn item inter-400 p-3 m-1" for="btnradio4">
                    4</label>

                <input type="radio" class="btn-check" name="btnradio1" id="btnradio5" autocomplete="off" value="5">
                <label class="btn btn-outline-primary rounded-4 custom-btn item inter-400 p-3 m-1" for="btnradio5">
                    5</label>

            </div>
        </div>
    </div>


</template>

<style lang="scss" scoped>
.custom-font {
    font-size: 18;
    color: #2C6179;
}

.square-container {
    padding: 10px;
    background-color: #e1f1f0;
}


.btn-check:checked+.custom-btn {
    background-color: white;
    border-color: white;
    color: #134C67;
    font-weight: 600;
    font-size: 18px;
}

.btn-check:not(:checked)+.custom-btn {
    background-color: #e1f1f0;
    border-color: #e1f1f0;
    color: #56869C;
    font-weight: 600;
    font-size: 18px;
}

.custom-btn {
    border-width: 3px;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.custom-btn:hover {
    border-color: white !important;
}

.item {
    flex: 1 1 0;
    width: 0;
}

.square-container2 {
    padding: 10px;
    background-color: #EF8B77;
}



.custom-border {
    width: 20px;
    height: 20px;
    border-width: 2px;
    border-radius: 30%;
    border-color: #0E4B66;
}
</style>