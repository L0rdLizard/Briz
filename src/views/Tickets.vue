<template>
    <div style="zoom: 90%;">
        <ExtraTickets />
    </div>

    <div style="zoom: 90%;">
        <ChooseTicket />
    </div>
    
</template>

<script lang="ts" setup>
import ExtraTickets from "@/components/ExtraTickets.vue";
import ChooseTicket from "@/components/ChooseTicket.vue";
import { useStore } from 'vuex'

const store = useStore()
const formData = store.state.formData


</script>

<style lang="scss" scoped>
.custom-element1 {
    border-color: black;
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
