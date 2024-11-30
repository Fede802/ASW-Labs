<script>
    import axios from "axios";

    export default {
        data() {
            return {
                pokedex: [],
                headers: [],
            }
        },
        props: {
            tableClass: String
        },
        methods: {
            listPokemon() {
                axios.get("http://localhost:3000/pokedex.json")
                .then(response => {
                    console.log(response.data);
                    this.pokedex = response.data.pokemon
                    this.headers = ["num", "name", "img"];
                });
            }
        },
        mounted() {
            this.listPokemon();
        },
    }
</script>

<template>
    <div class="table responsive">
        <table class="table" v-if="headers != []">
            <thead v-bind:class="tableClass">
                <tr>
                    <th v-for="header in headers">{{ header }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="pokemon in pokedex" :key="pokemon.id">
                    <td>{{ pokemon.num }}</td>
                    <td>{{ pokemon.name }}</td>
                    <td><img v-bind:src="pokemon.img" alt=""></td> 
                </tr>
            </tbody>
        </table>
    </div>
</template>
