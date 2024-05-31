<template>
    <div class="container p-4 rounded-4" style="margin-top: 140px; background-color: white;">
        <div class="container-liquid ms-2">
            <p class="custom-font gunterz mb-0" style="font-size: 30px;">Выбор билета и класса обслуживания</p>
            <p class="mb-0 custom-font helio mt-0">За перелёт в одну сторону на одного взрослого пассажира.</p>
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
    font-weight: 800;
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

.left-right-button {
    border-style: solid;
    border-width: 3px;
    border-color: #e1f1f0;
    background-color: #e1f1f0;
    color: #0E4B66;
    font-weight: 600;
    font-size: 18px;
}

.left-right-button:hover {
    border-color: white !important;
}

.date-font {
    color: #56869C;
    font-weight: 600;
    font-size: 18px;
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