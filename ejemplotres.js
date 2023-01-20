// EJERCICIO TRES

// Una frutería ofrece las manzanas con descuento 
// según la siguiente tabla:
// Numero de kilos comprados	% Descuento
// 0 – 2	0%
// 2.01 – 5	10%
// 5.01 – 10	15 %
// 10.01 en adelante	20%
// Dado el precio por kilo, y el peso, determinar cuánto pagará 
//una persona que compre manzanas es esa frutería.

let precio = parseInt(prompt("Digite el precio del kilo de manzana HOY"));
let kilo = parseInt(prompt("Cuantos kilos desea comprar"));
let descuento;
if (kilo >= 0 && kilo <= 2){
    precio = precio*kilo;
    document.write(`Total a pagar: $${precio}`);
}else if(kilo > 2 && kilo <= 5){
    descuento = precio * 0.1;
    precio = (precio * kilo) - descuento;
    document.write(`Total a pagar: $${precio}`);
}else if(kilo > 5 && kilo <= 10){
    descuento = precio * 0.15;
    precio = (precio * kilo) - descuento;
    document.write(`Total a pagar: $${precio}`);
}else{
    descuento = precio * 0.2;
    precio = (precio * kilo)- descuento;
    document.write(`Total a pagar: $${precio}`);
}