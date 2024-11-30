<script>
    export default {
        props: {
            text: {
                type: String,
                default: "Default Text"
            }
        }
    }
</script>

<template>
    {{ text }}
</template>