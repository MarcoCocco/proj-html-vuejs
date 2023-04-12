<script>
import { store } from './store.js'
import AppNav from './components/AppNav.vue';
import AppHero from './components/AppHero.vue';
import AppShowcase from './components/AppShowcase.vue';
import AppSpecialCategory from './components/AppSpecialCategory.vue';
import AppProducts from './components/AppProducts.vue';


export default {
    data() {
        return {
            store,
        };
    },
    components: { AppNav, AppHero, AppShowcase, AppSpecialCategory, AppProducts }
}

</script>

<template>
    <AppNav></AppNav>
    <AppHero></AppHero>
    <AppShowcase></AppShowcase>
    <AppSpecialCategory></AppSpecialCategory>
    <AppProducts></AppProducts>
</template>

<style lang="scss"></style>
