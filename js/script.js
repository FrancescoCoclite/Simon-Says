// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


var numeriRandom =[];

while (numeriRandom.length < 5) {
    
    var numRan = (randomNumb(1,100));
    if (!numeriRandom.includes(numRan)) {
        numeriRandom.push(numRan); 
    }
    
}

console.log(numeriRandom);


alert(numeriRandom + 'memorizza questi numeri');

var risultato = numeriRicordi();
console.log(risultato);



for (var i = 0; i < risultato.length; i++) {
    

    if(risultato[i] == numeriRandom[i]){
        console.log(risultato[i] + ' Numero corretto');
    }else{
        console.log(risultato[i] + ' Numero sbagliato');
    }
    
}



var timer = 30;
var scorrimento = setInterval(function(){
  if(timer == 0){
    clearInterval(scorrimento);
    
  }else {
    console.log(timer + " secondi rimanenti");
  }
  timer -= 1;
}, 1000);









// **** SEZIONE FUNZIONI*****

function randomNumb(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}


function numeriRicordi() {
    var array = [];
    for (var i = 0; i < 5; i++) {
        var numUtente = parseInt(prompt('Inserisci uno alla volta numeri che hai visualizzato prima!'));
        if (!array.includes(numUtente)) {
            array.push(numUtente); 
        }else{
            array.push(numUtente);
            alert ('errore ripetizione numero inserire nuovo numero');
        }
    }
    return array;
}

