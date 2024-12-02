<script>
    export default {
        props: {
            link: String,
            text: String 
        }
    }
</script>

<template>
    <a v-bind:href=link>{{ text }}</a>
</template>