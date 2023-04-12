<script>
import AppNav from './components/AppNav.vue';
import AppHero from './components/AppHero.vue';
import { store } from './store.js'


export default {
    data() {
        return {
            store,
        };
    },
    components: { AppNav, AppHero }
}

</script>

<template>
    <AppNav></AppNav>
    <AppHero></AppHero>
</template>

<style lang="scss"></style>
