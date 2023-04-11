<script>
import AppHeader from './components/AppHeader.vue';
import AppHero from './components/AppHero.vue';
import { store } from './store.js'


export default {
    data() {
        return {
            store,
        };
    },
    components: { AppHeader, AppHero }
}

</script>

<template>
    <AppHeader></AppHeader>
    <AppHero></AppHero>
</template>

<style lang="scss"></style>
