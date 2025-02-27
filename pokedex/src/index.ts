interface Pokemon {
    id: number,
    num: string,
    name: string,
    img: string,
    type: string[],
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

}

interface Evolution {
    num: string,
    name: string
}

interface Pokedex {
    pokemon: Pokemon[]
}

const url: string = ' https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';

const fetchingData = async (): Promise<Pokemon[]> => {
    const response = await fetch(url);

    if(!response.ok){
        throw new Error('Erreur lors du fetch')
    };

    const result: Pokedex = await response.json();
    const pokemon: Pokemon[] = result.pokemon
    console.log('result: ', result)
    console.log('pokemon: ', pokemon)

    return pokemon;
};

fetchingData();