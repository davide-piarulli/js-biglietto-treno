const km = prompt('Quanti km dovrai percorrere?');
console.log(km);

const age = prompt('Quanti anni hai?')
console.log(age);

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


let message;

if(age < 18){
  // console.log(('Sei minorenne, quindi con lo sconto del 20% il biglietto costa: €') + childTicket);
  message = (('Sei minorenne, quindi con lo sconto del 20% il biglietto costa: €') + childTicket); 
} else if (age >= 65){
  // console.log(('Sei over 65, quindi con lo sconto del 40% il biglietto costa: €') + seniorTicket);
  message = (('Sei over 65, quindi con lo sconto del 40% il biglietto costa: €') + seniorTicket);
} else {
  // console.log(('Senza nessuno sconto il biglietto costa: €') + ticketPrice);
  message = (('Senza nessuno sconto il biglietto costa: €') + ticketPrice);
}

document.getElementById('output').innerHTML = message;

