<template>
    <div class="entry">
        <div class="entry__inner">
            <div class="entry__title">Selected day: <b>{{ activeDayName }}</b></div>
            <input class="entry__input" type="text" placeholder="New Entry" required v-model="entryValue"/>
            <button class="btn" type="submit" @click="submitEvent(entryValue)">Submit</button>
            <span class="error" v-if="error">Please, enter some event!</span>
        </div>
    </div>
</template>

<script>
    import { store } from '../store'
    import Event from './Event.vue'
    
    export default {
        name: 'Entry',
        components: {Event},
        data() {
            return {
                entryValue: '',
                error: false
            }
        },
        methods: {
            submitEvent(eventDetail) {
                if (eventDetail == '') {
                    return this.error = true
                }
                store.submitEvent(eventDetail);
                this.entryValue = '';
                this.error = false;
            }
        },
        computed: {
            activeDayName(){
                return store.getActiveDay().name;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .entry {
        
        &__inner {
            width: 400px;
            margin: auto;
            padding: 20px;
            border: 1px solid grey;
            border-radius: 4px;
            background-color: #dce0ee;
            box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
        }
        
        &__title {
            margin-bottom: 15px;
        }
        
        &__input {
            height: 30px;
            width: calc(100% - 32px);
            margin-bottom: 15px;
            padding: 0 15px;
            border-radius: 4px;
            border: 1px solid grey;
        }
        
        .btn {
            margin-right: 10px;
        }
        
        .error {
            color: red;
            font-weight: 700;
        }
    }
</style>
