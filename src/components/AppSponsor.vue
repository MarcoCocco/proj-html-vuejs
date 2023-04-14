<script>
import { store } from '../store.js'

export default {
    name: 'AppSponsor',
    data() {
        return {
            store,
        };
    },
    
    
}
</script>

<template>
    <div class="brands container-centered">
        <div v-for="sponsor in store.sponsors" class="sponsor-image">
            <img :src="sponsor.image" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>

.brands {
    padding: 4em 0;
    display: flex;
    justify-content: space-between;
}
</style>