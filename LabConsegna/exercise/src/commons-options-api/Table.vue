<script>
import { loadData } from "../utils/dbUtils";

export default {
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
            <thead>
                <tr>
                    <th v-for="header in Object.keys(tableBuildingData)">{{ header }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="element in data" :key="element.id" :id="element.id">
                    <td v-for="renderer in Object.values(tableBuildingData)">
                        <component :is="renderer(element)"></component>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
