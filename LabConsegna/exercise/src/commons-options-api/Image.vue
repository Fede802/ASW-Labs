<script>
    export default {
        props: {
            width: {
                type: String,
                default: "200px"
            },
            height: {
                type: String,
                default: "200px"
            },
            alt: {
                type: String,
                default: ""
            },
            img: String,
        }
    }
</script>

<template>
    <img v-bind:src="img" v-bind:alt="alt">
</template>

<style>
    img {
        width: width;
        height: 200px;
        object-fit: cover;
        border-radius: 24px;
    }
</style>