<script>
import { h } from 'vue';
import { createTextVNode } from 'vue';
import List from "@/commons-options-api/List.vue";
import TableHeader from "@/commons-options-api/TableHeader.vue";
import TableData from "@/commons-options-api/TableData.vue";
import { loadData } from "../utils/dbUtils";

export default {
    components: { List, TableHeader, TableData },
    data() {
        return {
            data: [],
            dbUrl: "http://localhost:3000/recipes_with_alt.json",
            dbParser: function (db) { return db.slice(0,2) },
            tableBuildingData: {
                "Name": function (recipe) {
                    return createTextVNode(recipe.name)
                },
                "Description": function (recipe) {
                    return createTextVNode(recipe.description)
                },
                "Image": function (recipe) {
                    return h('img', { src: recipe.image, alt: recipe.alt })
                },
                "Nutrients": function (recipe) {
                    return h(List, { list: Object.entries(recipe.nutrients).map(k => k[0]+": "+k[1]) })
                },
                "Author": function (recipe) {
                    return createTextVNode(recipe.author)
                },
                "Website": function (recipe) {
                    return h('a', { href: recipe.url,  style: {'white-space': 'nowrap'} }, "Visit Website")
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
    ::v-deep img {
        width: width;
        height: 200px;
        object-fit: cover;
        border-radius: 24px;
    }
</style>
