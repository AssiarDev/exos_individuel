let message = "Bonjour !"
let firstname = window.prompt("Entrez un prenom")
message = `Bonjour ${firstname} !`

// Créer une fonction sayHello()
const sayHello = (firstname, hour) => {
    // condition 
    if (hour >= 18){
        message = `Bonsoir ${firstname}`
    } else {
        message = `Bonjour ${firstname}`
    }
    // manipulation du dom
    document.querySelector('h1').innerText = message;
};
sayHello(firstname, 22); 

