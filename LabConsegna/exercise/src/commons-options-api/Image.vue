<script>
    export default {
        props: {
            img: String,
        }
    }
</script>

<template>
    <img v-bind:src="img" alt="">
</template>