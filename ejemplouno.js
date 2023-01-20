// EJERCICIO UNO

//Un comerciante compra un artículo a un costo dado. 
// Determine el precio al cual debe venderlo si desea 
// ganar el 15%.

let nombreArticulo = prompt("escriba el nombre del articulo");
let costoOriginal = parseInt(prompt("escriba el precio del articulo"));

let porcentaje = (costoOriginal * 15)/100;
let nuevoCosto = (costoOriginal + porcentaje);

document.write(`Usted debe vender su producto ${nombreArticulo} en $${nuevoCosto} pesos`);