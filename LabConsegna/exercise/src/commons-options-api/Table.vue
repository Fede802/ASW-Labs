<script>
    import {loadData} from "../utils/dbUtils";

    export default {
        data() {
            return {
                data: [],
            }
        },
        methods: {
            listPokemon() {
                loadData(this.dbUrl)
                .then(response => {
                    this.data = this.getDataFrom(response)
                });
            },
            increment() {
                this.data[0].num = 9999999;
            }
        },
        props: {
            dbUrl: {
                type: String,
                default: "http://localhost:3000/pokedex.json"
            },
            getDataFrom: Function,
            headers: Object,
        },
        
        mounted() {
            this.listPokemon();
        },
    }
</script>

<template>
    <button @click="increment">(click)
    </button>
    <div class="table responsive">
        <table class="table" v-if="headers != []">
            <thead>
                <tr>
                    <th v-for="header in Object.values(headers)" >{{ header.name }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="pokemon in data" :key="pokemon.id" :id="pokemon.id">
                    <td v-for="header in Object.values(headers)"><component :is="header.rendering(pokemon)"></component></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
