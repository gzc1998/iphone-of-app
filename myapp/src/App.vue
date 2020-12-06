<template>
<div id="app">
    <div id="nav">
        <my-header></my-header>
        <router-view />
        <my-footer></my-footer>
    </div>
</div>
</template>

<script>
import myHeader from './components/myHeader.vue'
import myFooter from './components/myFooter.vue'
export default {
    components: {
        myFooter,
        myHeader
    }
}
</script>

<style lang="scss" scoped>
#nav {
    margin-bottom: 0.85rem;
}
</style>
