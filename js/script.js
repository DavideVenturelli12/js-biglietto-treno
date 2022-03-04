console.log('JS OK')

/* viene chiesto all'utente di inserire il numero di 
   km che sidesidera percorrere e la propria età.
   Il prezzo del biglietto è definito in base ai km (0.21 € al km)
   va applicato uno sconto del 20% per i minorenni
   va applicato uno sconto del 40% per gli over 65. 
*/

// chiedi i chilometri da percorrere

const chilometri = prompt('Quanti chilometri vuoi percorrere?');

console.log('Chilometri da percorrere:' + chilometri)

// chiedi l'età del passeggero

const età = prompt('Qual è la tua età?');

console.log('Età:' + età)

// calcolo costo biglietto intero in base ai km

console.log('Costo per km = 0,21 euro');

const BigliettoIntero = chilometri * 0.21

console.log('Costo biglietto intero: ' + (BigliettoIntero.toFixed(2) + ' euro'));

// calcolo costo biglietto con e senza sconto 

if (età < 18) {
    alert('Hai diritto allo sconto del 20% sul prezzo del biglietto intero!')
    const sconto20 = (BigliettoIntero / 100) * 20;
    const Biglietto20 = (BigliettoIntero - sconto20);
    console.log('Costo biglietto scontato del 20%: ' + Biglietto20.toFixed(2) + 'euro');

    document.getElementById('dati').innerHTML =
        '<li> Età passeggero: ' + età + '</li> <li> chilometri percorsi: ' + chilometri + '</li> <li> sconto applicato: 20%</li>';

    document.getElementById('biglietto').innerHTML =
        'Il costo del tuo biglietto è di: <strong>' + Biglietto20.toFixed(2) + '</strong>';

} else if (età > 65) {
    alert('Hai diritto allo sconto del 40% sul prezzo del biglietto intero!')
    const sconto40 = (BigliettoIntero / 100) * 40;
    const Biglietto40 = (BigliettoIntero - sconto40);
    console.log('Costo biglietto scontato del 40%: ' + Biglietto40.toFixed(2) + 'euro');

    document.getElementById('dati').innerHTML =
        '<li> Età passeggero: ' + età + '</li> <li> chilometri percorsi: ' + chilometri + '</li> <li> sconto applicato: 40%</li>';

    document.getElementById('biglietto').innerHTML =
        'Il costo del tuo biglietto è di: <strong>' + Biglietto40.toFixed(2) + '</strong>';

} else {
    alert('Purtoppo non hai diritto ad alcuno sconto :(')
    console.log('Costo biglietto:' + BigliettoIntero.toFixed(2) + 'euro');
    document.getElementById('biglietto').innerHTML = 'Il costo del tuo biglietto è di: <strong>' + BigliettoIntero.toFixed(2) + '</strong>';

    document.getElementById('dati').innerHTML =
        '<li> Età passeggero: ' + età + '</li> <li> chilometri percorsi: ' + chilometri + '</li> <li> sconto applicato: nessuno</li>';

    document.getElementById('biglietto').innerHTML =
        'Il costo del tuo biglietto è di: <strong>' + BigliettoIntero.toFixed(2) + '</strong>';
}

