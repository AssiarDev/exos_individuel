"use strict";
;
;
;
const url = "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";
class App {
    constructor(pokemons = [], weightPokemon = []) {
        this.pokemons = pokemons;
        this.weightPokemon = weightPokemon;
    }
    async fetch() {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Erreur lors du fetch");
        }
        ;
        const result = await response.json();
        this.pokemons = result.pokemon;
    }
    ;
    countPokemon() {
        console.log(`Il y a ${this.pokemons.length} pokemons.`);
    }
    ;
    pkmnWeightMoreThan10kgs() {
        this.pokemons.forEach(pkmn => {
            const weight = parseFloat(pkmn.weight.replace('kg', ''));
            if (weight > 10) {
                this.weightPokemon.push(pkmn);
            }
            ;
        });
        console.log(`Il y a ${this.weightPokemon.length} pokemons qui pèsent plus de 10kg.`);
    }
    sortPokemon() {
        const sortAscending = this.weightPokemon;
        sortAscending.sort((a, b) => {
            const weightA = parseFloat(a.weight.replace('kg', ''));
            const weightB = parseFloat(b.weight.replace('kg', ''));
            return weightA - weightB;
        });
        console.log(sortAscending);
    }
}
;
const app = new App();
app.fetch().then(() => {
    app.countPokemon();
    app.pkmnWeightMoreThan10kgs();
    app.sortPokemon();
}).catch(error => {
    console.error(error);
});
