<script>
    export default {
        props: {
            link: String,
            text: String 
        }
    }
</script>

<template>
    <a :href=link>{{ text }}</a>
</template>