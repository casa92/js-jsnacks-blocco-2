/*
 * Crea un array vuoto e chiedi all’utente un numero
 * da inserire nell’array. Continua a chiedere i numeri
 * all’utente e a inserirli nell’array fino a quando
 * a somma degli elementi è minore di 50.
 */

let numbersArray = [];
let somma = 0;

do {
    const userNumber = parseInt( prompt( 'inserisci un numero intero compreso tra 0 e 50'));
    numbersArray.push(userNumber);
    somma += userNumber;

} while(somma < 50);


// while ( somma < 50 ) {
//     const userNumber = parseInt( prompt( 'inserisci un numero intero compreso tra 0 e 50'));
//     if (!isNaN(userNumber)) {
//         numbersArray.push(userNumber);
//         somma += userNumber;
//     }
// }

console.log('ilrisultato è ' + somma);
