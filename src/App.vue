<script>
import AppNav from './components/AppNav.vue';
import AppHero from './components/AppHero.vue';
import { store } from './store.js'
import AppShowcase from './components/AppShowcase.vue';


export default {
    data() {
        return {
            store,
        };
    },
    components: { AppNav, AppHero, AppShowcase }
}

</script>

<template>
    <AppNav></AppNav>
    <AppHero></AppHero>
    <AppShowcase></AppShowcase>
</template>

<style lang="scss"></style>
