let boucle = true;
let guessCheck = 0;
let count = 0;

const game = () => {
    const ask = document.getElementById('Essaye');
    const inputValue = document.getElementById('number');
    const number = Number(inputValue.value);
    const tentatives = document.getElementById('attempts');

    if (boucle && guessCheck === 0) {
        targetNumber = number;
        // condition pour entré un nombre valide pour le joueur 1
        if (targetNumber < 0 || targetNumber > 50 || isNaN(targetNumber))
            ask.textContent = `${number} n'est pas un nombre entre 0 et 50`;
        else {
            ask.textContent = 'Joueur 2, veuillez choisir un nombre';
            document.getElementById('number').value = '';
            guessCheck = 1;
        }
    } else if (boucle && guessCheck === 1) {
        count++;
        tentatives.textContent = `TENTATIVES : ${count}`;
        if (number < 0 || number > 50 || isNaN(number)) {
            ask.textContent = `${number} n'est pas un nombre entre 0 et 50`;
        } else {
            // condition de victoire
            if (number === targetNumber) {
                document.getElementById('victoire').textContent = 'Félicitation Joueur 2, vous avez deviner le bon nombre !';
                ask.textContent = '';
                boucle = false;
            } else {
                ask.textContent = `Essaye encore ! ${number < targetNumber ? 'Plus Grand!' : 'Plus petit!'}`;
            }
            inputValue.value = ''
            console.log(number)
        }

    }
}

// Création de l'évènement click avec le bouton
document.getElementById('click').addEventListener('click', game);
document.getElementById('number').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        game()
    }
});
/*
// Etape 1 qui se transfome en étape 4
// Créer une fonction qui demande à l'utilisateur d'entrer un nombre
const askNumber = (message) => {
    let entryNumber = prompt(message);
    while(isNaN(entryNumber) || entryNumber < 0 || entryNumber > 50){
        alert('Nombre invalide, veuillez saisir un nombre ou un nombre entre 0 et 50')
        entryNumber = prompt(message);
    } 
    return Number(entryNumber)
};

// Etape 2
// Créer une fonction didWin qui a comme paramètre givenNumber
const didIWin = (givenNumber, targetNumber) => {
    console.log(givenNumber)
    // condition pour trouver le nombre 
    if (givenNumber < targetNumber){
        alert ("Plus grand!")
    } else if (givenNumber > targetNumber){
        alert ('Plus petit!')
    } else {
        alert("Bravo ! Vous avez deviné le nombre")
        return true
    }
    return false
};
// Etape 3
// Créer une fonction gamePlay qui gère le jeu
const gamePlay = () => {
    // nombre à trouver
    const targetNumber = askNumber("Joueur 1, entrez un nombre entre 0 et 50 que le joueur 2 doit deviner :");
    let boucle = false; 
    while (!boucle){
        const userGuess = askNumber("Joueur 2, entrez votre nombre pour devniner celui du joueur 1 :");
        boucle = didIWin(userGuess, targetNumber);
        if(boucle){
            alert('Félicitation Joueur 2, vous avez gagné !')
        }
    }
};
// Lancement du jeu 
gamePlay();
*/