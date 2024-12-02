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
            dbUrl: "http://localhost:3000/products.json",
            dbParser: function (db) {
                return db
            },
            tableBuildingData: {
                "Product Name": function (product) {
                    return h(PlainText, { text: product.title })
                },
                "Image": function (product) {
                    return h(Image, { img: "http://localhost:3000/images/"+product.filename})
                }
            }
        }
    }
}
</script>

<template>
    <h1>[ADVANCED] Accessible Options API Table</h1>
    <Table v-bind:dbUrl="dbUrl" v-bind:dbParser="dbParser" v-bind:tableBuildingData="tableBuildingData" ></Table>
</template>
