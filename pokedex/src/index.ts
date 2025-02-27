interface KeyData {
    id: number;
    num: string;
    name: string;
    img: string;
    type: string[];
    height: string;
    weight: string;
    candy: string;
    candy_count?: number;
    egg: string;
    spawn_chance?: number;
    avg_spawns?: number;
    spawn_time?: string;
    multipliers?: number[];
    weaknesses: string[];
    next_evolution?: Evolution[];
    prev_evolution?: Evolution[];
  };
  
interface Evolution {
    num: string;
    name: string;
  };
  
interface Pokedex {
    pokemon: KeyData[];
  };

const url: string = "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";

class App {
  constructor(
    public pokemons: KeyData[] = [],
    public weightPokemon: KeyData[] = []
  ) {}

  async fetch(): Promise<void> {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Erreur lors du fetch");
    };

    const result: Pokedex = await response.json();
    this.pokemons = result.pokemon;
  };

countPokemon(): void{
    console.log(`Il y a ${this.pokemons.length} pokemons.`);
};

pkmnWeightMoreThan10kgs(): void{
    this.pokemons.forEach(pkmn => {
        const weight = parseFloat(pkmn.weight.replace('kg', ''));
        if(weight > 10){
            this.weightPokemon.push(pkmn)
        };
    });
    console.log(`Il y a ${this.weightPokemon.length} pokemons qui pèsent plus de 10kg.`)
}


sortPokemon(): void{
    const sortAscending = this.weightPokemon;
    sortAscending.sort((a, b) => {
        const weightA = parseFloat(a.weight.replace('kg', ''));
        const weightB = parseFloat(b.weight.replace('kg', ''));
        return weightA - weightB;
    });
    console.log(sortAscending)
}
};

const app = new App();

app.fetch().then(() => {
    app.countPokemon();
    app.pkmnWeightMoreThan10kgs();
    app.sortPokemon();
}).catch(error => {
    console.error(error);
});