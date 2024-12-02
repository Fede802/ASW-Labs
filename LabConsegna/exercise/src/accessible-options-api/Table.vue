<script>
import { loadData } from "../utils/dbUtils";
import TableHeader from "../commons-options-api/TableHeader.vue";
import TableData from "../commons-options-api/TableData.vue";
import PlainText from "../commons-options-api/PlainText.vue";
import { h } from 'vue';

export default {
    components: { TableHeader, TableData, PlainText },
    data() {
        return {
            data: [],
        }
    },
    props: {
        dbUrl:String,
        dbParser: Function,
        tableBuildingData: Object,
    },
    mounted() {
        loadData(this.dbUrl).then(response => {
            this.data = this.dbParser(response)
        });
    },
}
</script>

<template>
    <div class="table responsive">
        <table class="table" v-if="tableBuildingData != null">
            <thead class="thead-dark">
                <TableHeader v-bind:headers="Object.keys(tableBuildingData)" scopeInfo="col"></TableHeader>
            </thead>
            <tbody>
                <TableData v-bind:data="data" v-bind:renderers="Object.values(tableBuildingData)"></TableData>
            </tbody>
        </table>
    </div>
</template>
