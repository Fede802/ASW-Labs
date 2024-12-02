<script>
import { h } from 'vue';
import Table from "./Table.vue";
import Image from "@/commons-options-api/Image.vue";
import PlainText from "@/commons-options-api/PlainText.vue";
import List from "@/commons-options-api/List.vue";
import Link from "@/commons-options-api/Link.vue";
export default {
    components: { Table, Image, PlainText, List, Link },
    data() {
        return {
            dbUrl: "http://localhost:3000/recipes_with_alt.json",
            dbParser: function (db) { return db.slice(0,10) },
            tableBuildingData: {
                "Name": function (recipe) {
                    return h(PlainText, { text: recipe.name })
                },
                "Description": function (recipe) {
                    return h(PlainText, { text: recipe.description })
                },
                "Image": function (recipe) {
                    return h(Image, { img: recipe.image })
                },
                "Nutrients": function (recipe) {
                    return h(List, { list: Object.entries(recipe.nutrients).map(k => k[0]+": "+k[1]) })
                },
                "Author": function (recipe) {
                    return h(PlainText, { text: recipe.author })
                },
                "Website": function (recipe) {
                    return h(Link, { link: recipe.url, text: "Visit Website" })
                },
            }
        }
    }
}
</script>

<template>
    <h1>Minimal Options API Table</h1>
    <Table v-bind:dbUrl="dbUrl" v-bind:dbParser="dbParser" v-bind:tableBuildingData="tableBuildingData" ></Table>
</template>
