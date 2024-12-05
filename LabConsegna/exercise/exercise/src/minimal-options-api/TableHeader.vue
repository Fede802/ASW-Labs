<script>
import { h } from 'vue';
export default {
    props: {
        scopeInfo: {
            type: String,
            default: ""
        },
        headers: Array,
    },
    methods: {
        getRender() {
            return h('tr', this.headers.map(header => this.scopeInfo != "" ? h('th', { scope: this.scopeInfo }, header) : h('th', header)))
        }
    }
}
</script>

<template>
    <component :is="getRender()"></component>
</template>
