<script>
import { h } from 'vue';
import Table from "@/commons-options-api/Table.vue";
import Image from "@/commons-options-api/Image.vue";
import PlainText from "@/commons-options-api/PlainText.vue";
import List from "@/commons-options-api/List.vue";
import Link from "@/commons-options-api/Link.vue";
export default {
    components: { Table, Image, PlainText, List, Link },
    data() {
        return {
            dbUrl: "http://localhost:3000/pokedex.json",
            dbParser: function (db) {
                return db.pokemon
            },
            tableBuildingData: {
                "Pokedex Number": function (pokemon) {
                    return h(PlainText, { text: pokemon.num })
                },
                "Name": function (pokemon) {
                    return h(PlainText, { text: pokemon.name })
                },
                "Image": function (pokemon) {
                    return h(Image, { img: pokemon.img })
                },
                "Type": function (pokemon) {
                    return h(List, { list: pokemon.type })
                },
                "Weaknesses": function (pokemon) {
                    return h(List, { list: pokemon.weaknesses })
                },
                "Evolution": function (pokemon) {
                    if (pokemon.next_evolution) {
                        return h(Link, { link: '#' + Number(pokemon.next_evolution[0].num), text: pokemon.next_evolution[0].name })
                    }
                    return h(PlainText, { text: "No Evolution" })
                },
            }
        }
    }
}
</script>

<template>
    <h1>[ADVANCED] Minimal Options API Table</h1>
    <Table v-bind:dbUrl="dbUrl" v-bind:dbParser="dbParser" v-bind:tableBuildingData="tableBuildingData" ></Table>
</template>
