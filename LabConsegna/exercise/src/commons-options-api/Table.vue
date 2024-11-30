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
    <div class="table responsive">
        <table class="table" v-if="headers != []">
            <thead>
                <tr>
                    <th v-for="header in Object.values(headers)" >{{ header.name }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="pokemon in data" :key="pokemon.id" :id="pokemon.id">
                    <td v-for="header in Object.values(headers)">

                    <component :is="header.rendering(pokemon)"></component></td>
                    <!-- <td>{{ pokemon.num }}</td>
                    <td>{{ pokemon.name }}</td>
                    <td><img v-bind:src="pokemon.img" alt=""></td>
                    <td>
                        <ul>
                            <li v-for="type in pokemon.type">{{ type }}</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li v-for="weaknesses in pokemon.weaknesses">{{ weaknesses }}</li>
                        </ul>
                    </td>    
                    <td v-if="pokemon.next_evolution">
                        <a :href="'#'+ Number(pokemon.next_evolution[0].num)">
                            {{ pokemon.next_evolution[0].name }}
                        </a>
                    </td> -->
                </tr>
            </tbody>
        </table>
    </div>
</template>
