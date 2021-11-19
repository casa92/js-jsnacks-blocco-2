
/*
 * Crea un array di numeri interi e fai la somma di tutti gli elementi
 * che sono in posizione dispari
 */




let numbersContainer = [ 1, 2, 3, 4, 5 ];
let oddNumbers = [];
let somma = 0;

for ( i = 0; i < numbersContainer.length; i++ ) {
    let thisNumber = numbersContainer[i];

    if ( i % 2 != 0) {
        // oddNumbers.push(thisNumber);
        somma += thisNumber;
    }

}

console.log(somma);