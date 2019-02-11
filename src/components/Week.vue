<template>
    <div class="week">
        <Day v-for="day in myDays.defData"
                :key="day.id"
                :day="day"
        ></Day>
    </div>
</template>

<script>
    import { store } from '../store'
    import Day from './Day.vue'
    
    export default {
        name: 'Week',
        data() {
            return {
                myDays: store.state
            }
        },
        components: {Day}
    }
</script>

<style lang="scss" scoped>
.week {
    display: flex;
    width: 1406px;
    margin: 50px auto 0;
    border: 1px solid grey;
    border-radius: 4px;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
}
</style>
