// chiedo km ed età
const km = prompt('Quanti km dovrai percorrere?');
const age = prompt('Quanti anni hai?')

// fisso il prezzo al km
const priceKm = 0.21 ;

// calcolo biglietto generico
const ticketPrice = km * priceKm;
console.log(ticketPrice);

// calcolo solo sconti bambino e over 65
const childDiscount = (ticketPrice * 20) / 100; 
const seniorDiscount = (ticketPrice *40) / 100;

// sottrazione sconti
const childTicket = ticketPrice - childDiscount;
const seniorTicket = ticketPrice - seniorDiscount;

// creo nuove variabili con prezzi a 2 decimali
const roundedchildTicket = childTicket.toFixed(2);
const roundedseniorTicket = seniorTicket.toFixed(2);
const roundedTicket = ticketPrice.toFixed(2);

// inizializzo message
let message;

if(age < 18){
  message = (('Sei minorenne, quindi con lo sconto del 20% il biglietto costa: €') + roundedchildTicket); 
} else if (age >= 65){
  message = (('Sei over 65, quindi con lo sconto del 40% il biglietto costa: €') + roundedseniorTicket);
} else {
  message = (('Senza nessuno sconto il biglietto costa: €') + roundedTicket);
}

document.getElementById('output').innerHTML = message;

