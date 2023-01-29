// let numero = 0;
// while(numero < 10){
//     numero++;
//     document.write(numero+"<br>");
// }
// let num2 = 11;
// while(num2 > 1){
//     num2--;
//     document.write(`${num2}<br>`);
// }
let tope = parseInt(prompt("ingrese el monto que quiere ahorrar"));
let ingreso = parseInt(prompt("Cuanto quiere ahorrar??"));
while(ingreso < tope){
    document.write(`${ingreso}<br>`);
    var ingreso2 = parseInt(prompt("debe ingresar mas"));
    ingreso = ingreso + ingreso2;
}
document.write(`${tope}<br>`);

