// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


var numeriRandom =[];
for (let i = 0; i < 5; i++) {
    
    var random = randomNum(1,100);
    numeriRandom.push(random);
    
}

alert(numeriRandom);

var risultato = setTimeout(numeriRicordi, 1000);

// var nuova = numeriRicordi();
// console.log(nuova);






// **** SEZIONE FUNZIONI*****

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function numeriRicordi() {
    for (let i = 0; i < 5; i++) {

    
        var numUtente = parseInt(prompt('Inserisci uno alla volta numeri che hai visualizzato prima!'));

        console.log(numUtente[i]);
 
        
        
    }

}