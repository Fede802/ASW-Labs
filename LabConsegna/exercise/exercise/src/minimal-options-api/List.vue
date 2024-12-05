<script>
export default {
    props: {
        list: Array,
    }
}
</script>

<template>
    <ul>
        <li v-for="element in list">{{ element }}</li>
    </ul>
</template>

<style>
li {
    display: block;
    white-space: nowrap;
}
</style>