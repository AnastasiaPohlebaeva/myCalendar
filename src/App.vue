<template>
    <div id="app">
        <Week></Week>
        <div class="container">
            <Entry></Entry>
        </div>
    </div>
</template>

<script>
    import Week from './components/Week.vue'
    import Entry from './components/Entry.vue'
    
    export default {
        name: 'App',
        components: {
            Week: Week,
            Entry: Entry
        }
    }
</script>

<style lang="scss">
    html, body {
        height: 100%;
        padding: 0;
        margin: 0;
    }
    
    body {
        font-family: "Comic Sans MS", sans-serif;
    }
    
    .container {
        max-width: 1180px;
        margin: 90px auto 0;
    }

    .btn {
        cursor: pointer;
        padding: 5px;
        color: #fff;
        font-size: 12px;
        background-color: #77adde;
        border-radius: 2px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        border: 1px solid transparent;
    
        &:hover {
            color: #fff;
            background-color: #004484;
            border: 1px solid transparent;
        }
    
        &--change {
            margin-right: 10px;
        }
    
        &--remove {
            color: black;
            border: 1px solid #77adde;
            background-color: transparent;
        }
    }
</style>
