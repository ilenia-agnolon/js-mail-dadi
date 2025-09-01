/*Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
‼️ Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota: 
Non è necessario provvedere alla validazione delle email
_______________________________________________________________________________________________*/

//creo array
const guests = [
    "guest1@gmail.com",
    "guest2@gmail.com",
    "guest3@gmail.com",
    "guest4@gmail.com",
    "guest5@gmail.com",
    "guest6@gmail.com",
    "guest7@gmail.com",
    "guest8@gmail.com",
    "guest9@gmail.com",
    "guest10@gmail.com",
]


//INPUT: chiedo all'utente la sua mail
const guestMail = (prompt("inserisci la tua mail"));

    console.log("mail inserita:", guestMail);




//ELABORAZIONE

//Creo una variabile che mi serve a ricordare se l’utente è invitato
let isInvited = false; //di default dico che NON è invitato


    // Ciclo che scorre tutta la lista
    for (let i = 0; i < guests.length; i++) {

        if (guests[i] === guestMail) {
            isInvited = true;
        }

    }

    

//OUTPUT
if (isInvited) {
  console.log("Accesso consentito: sei nella lista!");
} else {
  console.log("Accesso negato: non sei nella lista.");
}

    
    