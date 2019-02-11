<template>
    <div class="day" v-bind:class="{ active:day.active }" @click="setActiveDay(day.id)">
        <div class="day__name">{{day.name}}</div>
        <div class="day__inner">
            <Event v-for="(event, index) in day.events"
                :key="index"
                :index="index"
                :day="day"
                :event="event"></Event>
        </div>
    </div>
</template>

<script>
    import { store } from '../store'
    import Event from './Event.vue'
    
    export default {
        name: 'Day',
        props: ['day'],
        components: {Event},
        methods: {
            setActiveDay(dayId) {
                store.setActiveDay(dayId)
            }
        },
    }
</script>

<style lang="scss" scoped>
    .day {
        cursor: pointer;
        width: 200px;
        background-color: #ebeef6;
        border-right: 1px solid grey;
        text-align: center;
        
        &:first-of-type {
            border-radius: 4px 0 0 4px;
            
            .day__name {
                border-top-left-radius: 4px;
            }
        }
        &:last-of-type {
            border-radius: 0 4px 4px 0;
            border-right: none;
    
            .day__name {
                border-top-right-radius: 4px;
            }
        }
        
        &:hover,
        &.active {
            background-color: #dce0ee;
            
            .day__name {
                color: #004484;
            }
        }
        
        &__name {
            padding: 15px 20px;
            border-bottom: 1px solid grey;
            font-weight: 700;
            font-size: 16px;
            text-transform: uppercase;
            background-color: #dce0ee;
        }
        
        &__inner {
            padding: 15px;
        }
    }
</style>
