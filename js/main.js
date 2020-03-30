// verifica corretto import script
console.log('my js is here');


// ESERCIZIO 1 CERCA IN UN ARRAY
// Creazioni delle variabili necessarie per l'esecuzione
var listEmail = ['michele@boolean.careers', 'fabio@boolean.careers', 'roberto@boolean.careers'];
var yourEmail = prompt('Inserisci il tuo indirizzo e-mail').toLowerCase();
var yourEmailFound = false;
//console log formato tabella
console.table(listEmail);

// Verificare  che l'email utente sia presente nell'Array
for (var i = 0; i < listEmail.length; i++) {
    var item = listEmail[i];

  if (yourEmail == item) {
    yourEmailFound = true;
}
}

// Feedback per utente
if (yourEmailFound == true) {
  // Email trovata
  console.log('E-mail trovata, accesso consentito');
}
else {
  //email nono trovata
  console.log('E-mail non trovata, accesso negato');
}


//ESERCIOZIO 2 GIOCO DEI DADI
// Creazioni delle variabili necessarie per l'esecuzione
var umanNumber;
var computerNumber;

// Generazione numeri random per giocatore e computer
umanNumber = (Math.floor ((Math.random() * 6) + 1));
console.log("Il Giocatore ha totalizzato: " + umanNumber);

computerNumber = (Math.floor ((Math.random() * 6) + 1));
console.log("Il Computer ha totalizzato: " + computerNumber);


// Vincitore, perdente e pareggio in base al punteggio ottenuto
if (computerNumber > umanNumber){
  console.log("Spicente ha vinto il computer");
}

else if (umanNumber > computerNumber){
  console.log("Bravo, hai vinto!");
}

else {
  console.log("Hai pareggiato");
}
