/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
_______________________________________________________________________________________________*/

// 1. Genero il numero casuale per il giocatore
const playerNumber = Math.floor(Math.random() * 6) + 1;


// 2. Genero il numero casuale per il computer
const computerNumber = Math.floor(Math.random() * 6) + 1;


// 3. Stampo entrambi i numeri in console
console.log("Numero del giocatore:",playerNumber, "Numero del computer:", computerNumber);


// 4. Confronto i due numeri