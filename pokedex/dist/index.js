"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = ' https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';
const fetchingData = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(url);
    if (!response.ok) {
        throw new Error('Erreur lors du fetch');
    }
    ;
    const result = yield response.json();
    const pokemon = result.pokemon;
    console.log('result: ', result);
    console.log('pokemon: ', pokemon);
    return pokemon;
});
fetchingData();
