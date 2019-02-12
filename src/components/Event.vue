<template>
    <div class="event">
        <div class="event__inner" v-if="!event.edit">
            <div class="event__title">{{ event.title }}</div>
            <div class="event__btns">
                <div class="btn btn--change" @click="editEvent(day.id, index)">Edit</div>
                <div class="btn btn--remove" @click="deleteEvent(day.id, index)">Delete</div>
            </div>
        </div>
        <div class="event__inner" v-if="event.edit">
            <input class="event__input" type="text" :placeholder="event.title" required v-model="newEventTitle"/>
            <div class="btn" @click="updateEvent(day.id, index, newEventTitle)">Save</div>
        </div>
    </div>
</template>

<script>
    import { store } from '../store'
    
    export default {
        name: 'Event',
        props: ['day', 'event', 'index'],
        data() {
            return {
                newEventTitle: ''
            }
        },
        methods: {
            updateEvent(dayId, index, newEeventTitle) {
                store.updateEvent(dayId, index, newEeventTitle)
            },
            editEvent(dayId, index) {
                store.editEvent(dayId, index)
            },
            deleteEvent(dayId, index) {
                store.deleteEvent(dayId, index)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .event {
        padding: 10px;
        background-color: #e7ebf6;
        border-radius: 4px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
        
        &:not(:last-of-type) {
           margin-bottom: 15px;
        }
        
        &__title {
            margin-bottom: 10px;
        }
        
        &__btns {
            display: flex;
            justify-content: center;
        }
        
        &__input {
            height: 25px;
            width: calc(100% - 22px);
            padding: 0 10px;
            margin-bottom: 10px;
            border-radius: 2px;
            border: 1px solid grey;
        }
    }
</style>
