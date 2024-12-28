import { describe, it, expect } from "vitest";
import { tryWord} from "../script.js";
import { use } from "chai";


describe('tryWord', () => {
    it('should return every words well placed', () => {
        let userWord = 'dictionnaire'
        const result = tryWord(userWord)
        expect(result.wellPlaced).toEqual(userWord.toLocaleLowerCase().split(''))
    });

    it('should return misplaced letters correctly for a partial match', () => {
        const userWord = 'indication';
        const result = tryWord(userWord)
        expect(result.missplaced).toEqual(['i', 'n', 'd','i', 'c', 'a', 't', 'i', 'o', 'n'])
    
    });

    it('should return letters not in the word for a not-matching word', () => {
        const userWord = 'alphabet';
        const result = tryWord(userWord);
        expect(result.notInWord).toEqual([ 'l', 'p', 'h', 'b'])
    })

    it('should return win condition correctly for "dictionnaire"', () => {
        const userWord = 'dictionnaire';
        const result = tryWord(userWord);
        expect(result.wellPlaced.length).toEqual(userWord.length)
    })
})