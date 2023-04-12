<script>
import { store } from './store.js'
import AppNav from './components/AppNav.vue';
import AppHero from './components/AppHero.vue';
import AppShowcase from './components/AppShowcase.vue';
import AppSpecialCategory from './components/AppSpecialCategory.vue';


export default {
    data() {
        return {
            store,
        };
    },
    components: { AppNav, AppHero, AppShowcase, AppSpecialCategory }
}

</script>

<template>
    <AppNav></AppNav>
    <AppHero></AppHero>
    <AppShowcase></AppShowcase>
    <AppSpecialCategory></AppSpecialCategory>
</template>

<style lang="scss"></style>
