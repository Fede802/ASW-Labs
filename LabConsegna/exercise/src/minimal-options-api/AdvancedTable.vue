<script>
    import { h } from 'vue';
    import Table from "@/commons-options-api/Table.vue";
    import Image from "@/commons-options-api/Image.vue";
    import PlainText from "@/commons-options-api/PlainText.vue";
    import List from "@/commons-options-api/List.vue";
    import Link from "@/commons-options-api/Link.vue";
    export default {
        data() {
            return {
                getDataFrom: function(db) {
                    return db.pokemon
                },
                data: {"num":{
                            "name": "Pokedex Number",
                            "rendering": function (pokemon) { 
                                return h(PlainText, {text: pokemon.num}) }
                        },
                        "name":{
                            "name": "Name",
                            "rendering": function (pokemon) { 
                                return h(PlainText, {text: pokemon.name}) }
                        },
                        "img":{
                            "name": "Image",
                            "rendering": function (pokemon) {
                                return h(Image, {img: pokemon.img}) }
                        },
                        "type":{
                            "name": "Type",
                            "rendering": function (pokemon) { 
                                return h(List, {list: pokemon.type}) }
                        },
                        "weaknesses":{
                            "name": "Weaknesses",
                            "rendering": function (pokemon) { 
                                return h(List, {list: pokemon.weaknesses}) }
                        },
                        "next_evolution":{
                            "name": "Evolution",
                            "rendering": function (pokemon) { 
                                if (pokemon.next_evolution) {
                                return h(Link, {link: '#'+ Number(pokemon.next_evolution[0].num), text: pokemon.next_evolution[0].name}) }
                                return h(PlainText, {text: "No Evolution"})}
                        },
                    }
            }
        },
        components: { Table, Image, PlainText, List, Link },
    }
</script>

<template>
    <h1>Minimal Options API Table</h1>
    <Table v-bind:headers="data" v-bind:getDataFrom="getDataFrom"></Table>
</template>
