<script>
    export default {
        props: {
            data: Array,
            renderers: Array,
        }
    }
</script>

<template>
    <tr v-for="element in data" :key="element.id" :id="element.id">
        <td v-for="renderer in renderers">
            <component :is="renderer(element)"></component>
        </td>         
    </tr>
</template>

