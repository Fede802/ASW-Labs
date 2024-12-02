<script>
import { h } from 'vue';
import Image from "@/commons-options-api/Image.vue";
import PlainText from "@/commons-options-api/PlainText.vue";
import List from "@/commons-options-api/List.vue";
import Link from "@/commons-options-api/Link.vue";
import TableHeader from "@/commons-options-api/TableHeader.vue";
import TableData from "@/commons-options-api/TableData.vue";
import { loadData } from "../utils/dbUtils";

export default {
    components: { Image, PlainText, List, Link, TableHeader, TableData },
    data() {
        return {
            data: [],
            dbUrl: "http://localhost:3000/recipes_with_alt.json",
            dbParser: function (db) { return db.slice(0,2) },
            tableBuildingData: {
                "Name": function (recipe) {
                    return h(PlainText, { text: recipe.name })
                },
                "Description": function (recipe) {
                    return h(PlainText, { text: recipe.description })
                },
                "Image": function (recipe) {
                    return h(Image, { img: recipe.image, alt: recipe.alt })
                },
                "Nutrients": function (recipe) {
                    return h(List, { list: Object.entries(recipe.nutrients).map(k => k[0]+": "+k[1]) })
                },
                "Author": function (recipe) {
                    return h(PlainText, { text: recipe.author })
                },
                "Website": function (recipe) {
                    return h(Link, { link: recipe.url, text: "Visit Website", style: {'white-space': 'nowrap'} })
                },
            }
        }
    },
    mounted() {
        loadData(this.dbUrl).then(response => {
            this.data = this.dbParser(response)
        });
    },
}
</script>

<template>
    <h1>Accessible Options API Table</h1>
    <div class="table responsive">
        <table class="table" v-if="tableBuildingData != null">
            <thead class="table-dark">
                <TableHeader v-bind:headers="Object.keys(tableBuildingData)" scopeInfo="col" ></TableHeader>
            </thead>
            <tbody>
                <TableData v-bind:data="data" v-bind:renderers="Object.values(tableBuildingData)"></TableData>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
    ::v-deep th, ::v-deep td {
        border: 2px solid #000000;
        vertical-align: middle;
    }
</style>
