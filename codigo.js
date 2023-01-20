// _____________________________________________________
//TIPOS DE VARIABLES Y FORMAS DE UTILIZARLAS
//IMPRESION EN PANTALLA DE VARIABLES

// let nombre = prompt("escriba su nombre");
// edad = prompt("ahora su edad porfavor");
// ocupacion = prompt("por ultimo escriba su ocupacion");
// let años = 32;
// let valor1 = true;
// let valor2 = false;
// document.write(valor1 || valor2);
// document.write(" ")
// document.write(`soy ${nombre}`);
// document.write(` tengo ${edad} años`);
// document.write(` actualmente me desempeño como ${ocupacion}`);
//____________________________________________________________

//_____________________________________________________________
//CONDICIONALES
//if

// document.write(" ");
// if (nombre === "alvaro pajaro"){
//     document.write(`mi nombre es ${nombre}`);
// }else {
//     document.write(`mi nuevo nombre es ${nombre}`);
// }
//____________________________________________________________

// ejemplo de precios de heladeria
let saldoRoberto = 1.5, saldoPedro = 1.7, saldoCofla = 3.0;
let palitoHeladoDeAgua = "Palito helado de agua que vale: $0.6 UDS";
let pAgua = 0.6;
let palitoHeladoDeCrema = "Palito helado de crema que vale: $1 UDS";
let pCrema = 1;
let heladoHeladix = "Helado heladix que vale $1.6 UDS";
let hHeladix = 1.6;
let heladoHelavich = "Helado helavich que vale $1.7 UDS";
let hHeladovich = 1.7;
let heladoHelardo = "Helado helavich que vale $1.8 UDS";
let hHelardo = 1.8;
let poteConfite = "helado pote confite que vale $2.9 UDS"
let pConfite = 2.9;
let poteuncuarto = "heldo un duzto que vale $2.9 UDS";
let pUnCuarto = 2.9; 

document.write("BIENVENIDOS A LA HELADERIA ");
let nombre = prompt("escriba su nombre");
if (nombre == "roberto"){
    var dinero = prompt("¿Cuanto dinero tiene?");
    if (dinero == saldoRoberto){
        document.write(` ${nombre} cuenta con $${dinero} UDS, puede coprar ${palitoHeladoDeAgua}, ${palitoHeladoDeCrema}`);
    }else{
        document.write("este saldo NO le corresponde");
    }
}else if (nombre == "pedro"){
    var dinero = prompt("¿Cuanto dinero tiene?");
    if (dinero == saldoPedro){
        document.write(` ${nombre} cuenta con $${dinero} UDS, puede comprar ${palitoHeladoDeAgua}, ${palitoHeladoDeCrema}, ${heladoHeladix}`);
    }else{
        document.write("ojo no es su saldo");
    }
}else if (nombre == "cofla"){
    var dinero = prompt("¿Cuanto dinero tiene?");
    if (dinero == saldoCofla){
        document.write(` ${nombre} cuenta con $${dinero} UDS, puede comprar ${palitoHeladoDeAgua}, ${palitoHeladoDeCrema}, ${heladoHeladix}, ${hHeladovich}, ${pUnCuarto}`);
    }else{
        document.write("saldo invalido")
    }
}else {
    document.write("escriba un nombre autorizado");
}












    











