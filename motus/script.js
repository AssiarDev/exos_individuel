let wordToGuess = 'dictionnaire';

let getTry = document.getElementById('try');
let well = document.getElementById("well");
let miss = document.getElementById("miss");
let not = document.getElementById("not");
let win = document.getElementById("win");

const checkWin = (userWord) => {
    return wordToGuess.toLocaleLowerCase().split('') === userWord.toLocaleLowerCase().split('')
}

export function tryWord(userWord) {

    let arrayWordToGuess = wordToGuess.toLowerCase().split('');
    let arrayWord = userWord.toLowerCase().split('');

    let wellPlaced = [];
    let notInWord = [];
    let missplaced = [];

    let tempWordToGuess = [...arrayWordToGuess]

    if(checkWin(userWord)) {
            return {wellPlaced: wellPlaced, missplaced: [], notInWord: []}
        } else {

        arrayWord.forEach((letter, index) => {
            if(letter === arrayWordToGuess[index]){
                wellPlaced.push(letter)
                tempWordToGuess[index] = null
            }
        });

        // Vérifier les lettres mal placés
        arrayWord.forEach((letter, index) => {
            if(letter !== arrayWordToGuess[index] && tempWordToGuess.includes(letter)){
                missplaced.push(letter);
                tempWordToGuess[tempWordToGuess.indexOf(letter)] = null;
            }
        });

        // Vérifier les lettres qui ne sont pas dans le mot 
        arrayWord.forEach((letter) => { 
            if (!arrayWordToGuess.includes(letter)) { 
                notInWord.push(letter); 
            }
        });
    } 
    console.log(tempWordToGuess)
    return { wellPlaced: wellPlaced, missplaced: missplaced, notInWord: notInWord };
}

function guess(userWord, result) {
    document.getElementById("word").value = '';
    getTry.innerText = userWord;
    well.innerText = `Bien placé: ${result.wellPlaced.join(', ')}`;
    miss.innerText = `Mal placé: ${result.missplaced.join(', ')}`;
    not.innerText = `Pas dans le mot: ${result.notInWord.join(', ')}`;

    if (result.wellPlaced.length === wordToGuess.length) { 
	    win.innerText = 'Vous avez gagné'
    };

};

const handleClick = () => {
    let userWord = document.getElementById("word").value;
    console.log(userWord)
    if(userWord.length === 0){
        alert('Veuillez saisir un mot avant de cliquer')
    }
    let result = tryWord(userWord);
    guess(userWord, result)
};

document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('button');
    button.addEventListener('click', handleClick);
})

