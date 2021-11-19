// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo.

let userNumber = parseInt(prompt('inserisci un numero'));

if (userNumber % 2 === 0) {
    alert(userNumber);
} else {
    alert(userNumber + 1);
}

let userNumber = parseInt(prompt('inserisci un numero'));
let numberToPrint;
if (userNumber % 2 === 0) {
    numberToPrint = userNumber;
} else {
    numberToPrint = userNumber + 1;
}

console.log(numberToPrint);