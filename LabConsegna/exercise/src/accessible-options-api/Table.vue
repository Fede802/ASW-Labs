<script>
import { h, createTextVNode } from 'vue';
import List from "@/commons-options-api/List.vue";
import TableHeader from "@/commons-options-api/TableHeader.vue";
import TableData from "@/commons-options-api/TableData.vue";
import { loadData } from '@/utils/dbUtils';

export default {
    components: { List, TableHeader, TableData },
    data() {
        return {
            data: [],
            dbUrl: "http://localhost:3000/recipes.json",
            dbParser: db => db.slice(0, 2),
            tableBuildingData: {
                "Name": recipe => createTextVNode(recipe.name),
                "Description": recipe => createTextVNode(recipe.description),
                "Image": recipe => h('img', { src: recipe.image, alt: recipe.alt }),
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
    <h1>Accessible Options API Table</h1>
    <div class="table responsive">
        <table class="table" v-if="tableBuildingData != null">
            <caption>Recipes</caption>
            <thead class="table-dark">
                <TableHeader v-bind:headers="Object.keys(tableBuildingData)" scopeInfo="col"></TableHeader>
            </thead>
            <tbody>
                <TableData v-bind:data="data" v-bind:renderers="Object.values(tableBuildingData)"></TableData>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
:deep(th),
:deep(td) {
    border: 2px solid #000000;
    vertical-align: middle;
}

:deep(img) {
    width: width;
    height: 200px;
    object-fit: cover;
    border-radius: 24px;
}
</style>
