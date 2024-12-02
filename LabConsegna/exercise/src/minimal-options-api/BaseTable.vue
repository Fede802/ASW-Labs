<script>
    import axios from "axios";
    export default {
        data() {
            return {
                pokedex: [],
            }
        },
        props: {
            tableClass: String
        },
        methods: {
            listPokemon() {
                axios.get("http://localhost:3000/pokedex.json")
                .then(response => {
                    this.pokedex = response.data.pokemon
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
                <th>Pokedex Number</th>
                <th>Name</th>
                <th>Image</th>
                <th>Type</th>
                <th>Weaknesses</th>
                <th>Evolution</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="pokemon in pokedex" :key="pokemon.id">
                <td>{{ pokemon.num }}</td>
                <td>{{ pokemon.name }}</td>
                <td><img v-bind:src="pokemon.img" alt=""></td>
                <td>
                    <ul>
                        <li v-for="type in pokemon.type">{{ type }}</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li v-for="weakness in pokemon.weaknesses">{{ weakness }}</li>
                    </ul>
                </td>
                <td v-if="pokemon.next_evolution">
                    <a v-bind:href="'#' + Number(pokemon.next_evolution[0].num)">{{ pokemon.next_evolution[0].name }}</a>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
</template>