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
                return h(
                    'tr',
                    this.headers.map(header => {
                        if(this.scopeInfo != "")
                            return h('th', { scope: this.scopeInfo }, header)
                        return h('th', header)
                    })
                )
            }
        }
    }
</script>

<template>
        <component :is="getRender()"></component>
</template>

