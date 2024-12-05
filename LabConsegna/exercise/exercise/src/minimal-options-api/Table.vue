<script>
import { h, createTextVNode } from 'vue';
import List from "./List.vue";
import TableHeader from "./TableHeader.vue";
import TableData from "./TableData.vue";
import { loadData } from "./dbUtils";

export default {
    components: { List, TableHeader, TableData },
    data() {
        return {
            data: [],
            dbUrl: "http://localhost:3000/recipes.json",
            dbParser: db => db.slice(0, 50),
            tableBuildingData: {
                "Name": recipe => createTextVNode(recipe.name),
                "Description": recipe => createTextVNode(recipe.description),
                "Image": recipe => h('img', { src: recipe.image }),
                "Nutrients": recipe => h(List, { list: Object.entries(recipe.nutrients).map(k => k[0] + ": " + k[1]) }),
                "Author": recipe => createTextVNode(recipe.author),
                "Website": recipe => h('a', { href: recipe.url, style: { 'white-space': 'nowrap' } }, "Visit Website"),
            }
        }
    },
    mounted() { loadData(this.dbUrl).then(response => this.data = this.dbParser(response)) },
}
</script>

<template>
    <h1>Minimal Options API Table</h1>
    <div class="table responsive">
        <table class="table" v-if="tableBuildingData != null">
            <TableHeader v-bind:headers="Object.keys(tableBuildingData)" scopeInfo="col"></TableHeader>
            <TableData v-bind:data="data" v-bind:renderers="Object.values(tableBuildingData)"></TableData>
        </table>
    </div>
</template>

<style scoped>
:deep(img) {
    width: width;
    height: 200px;
    object-fit: cover;
    border-radius: 24px;
}
</style>
