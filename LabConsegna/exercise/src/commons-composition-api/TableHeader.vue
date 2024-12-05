<script setup>
import { h } from 'vue';
const TableHeader = defineProps({
    scopeInfo: {
        type: String,
        default: ""
    },
    headers: Array,
});
const getRender = () => h('tr', TableHeader.headers.map(header => TableHeader.scopeInfo != "" ? h('th', { scope: TableHeader.scopeInfo }, header) : h('th', header)))

</script>

<template>
    <component :is="getRender()"></component>
</template>
