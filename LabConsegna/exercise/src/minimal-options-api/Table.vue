<script>
    import { h } from 'vue';
    import AbstractTable from "@/commons-options-api/Table.vue";
    import BaseImage from "@/minimal-options-api/BaseImage.vue";
    import BaseText from "@/minimal-options-api/BaseText.vue";
    export default {
        data() {
            return {
                getDataFrom: function(db) {
                    return db.pokemon
                },
                data: {"num":{
                            "name": "Pokedex Number",
                            "rendering": function (pokemon) { 
                                // console.log(pokemon.num)
                                return h(BaseText, {text: pokemon.num}) }
                        },
                        "name":{
                            "name": "Name",
                            "rendering": function (pokemon) { 
                                // console.log(pokemon.num)
                                return h(BaseText, {text: pokemon.name}) }
                        },
                        "img":{
                            "name": "Image",
                            "rendering": function (pokemon) {
                                // console.log(pokemon.num) 
                                return h(BaseImage, {img: pokemon.img}) }
                        },
                        "type":{
                            "name": "Type",
                            "rendering": function (pokemon) { 
                                // console.log(pokemon.num)
                                return h(BaseText) }
                        },
                        "weaknesses":{
                            "name": "Weaknesses",
                            "rendering": function (pokemon) { 
                                // console.log(pokemon.num)
                                return h(BaseText) }
                        },
                        "next_evolution":{
                            "name": "Evolution",
                            "rendering": function (pokemon) { 
                                // console.log(pokemon.num)
                                return h(BaseText) }
                        },
                    }
            }
        },
        components: { AbstractTable, BaseImage, BaseText },
    }
</script>

<template>
    <h1>Minimal Options API Table</h1>
    <abstract-table v-bind:headers="data" v-bind:getDataFrom="getDataFrom"></abstract-table>
</template>
