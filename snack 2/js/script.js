/*
 * Generatore di “nomi cognomi” casuali: prendendo
 * una lista di nomi e una lista di cognomi,
 * Gatsby vuole generare una falsa lista di invitati.
 */





let firstName = ['Francesco', 'Rita', 'Giovanni'];
let lastName = ['Bianchi', 'Marelli', 'Palumbo'];



// let thisName;
// let thisLastName;
// let randomName;
// for ( i = 0; i < firstName.length; i++ ) {
//     // console.log(Math.floor( Math.random() * ( firstName.length)) );
//     thisName = firstName[ Math.floor( Math.random() * ( firstName.length - 1 + 1 )) ];
//     thisLastName = lastName[ Math.floor( Math.random() * ( lastName.length - 1 + 1 )) ];
//     randomName = `
//     ${thisName} ${thisLastName}
//     `;
//     console.log(randomName)
// }


let thisName;
let thisLastName;
let randomName;
let randomNameArray = [];
for ( i = 0; i < firstName.length; i++ ) {
    // console.log(Math.floor( Math.random() * ( firstName.length)) );
    thisName = firstName[ Math.floor( Math.random() * ( (firstName.length - 1) + 1 )) ];
    thisLastName = lastName[ Math.floor( Math.random() * ( (lastName.length - 1) + 1 )) ];
    randomName = `
    ${thisName} ${thisLastName}
    `;
    randomNameArray.push(randomName);
};

console.log(randomNameArray);

