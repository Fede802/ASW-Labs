<script setup>
import { h } from 'vue';
const TableHeader = defineProps({
    scopeInfo: {
        type: String,
        default: ""
    },
    headers: Array,
});
const getRender = () => { return h('tr', TableHeader.headers.map(header => { 
    if(TableHeader.scopeInfo != "") 
        return h('th', { scope: TableHeader.scopeInfo }, header) 
    return h('th', header) })) 
}
</script>

<template>
        <component :is="getRender()"></component>
</template>

