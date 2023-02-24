// let free = false;
// const validarCliente = (time)=>{
//     let edad = parseInt(prompt("cual es tu edad"));
//     if(edad >= 18){
//         if(time)
//     }
// }

// const estadoSaludo = ()=>{
//     let saludo = prompt("¿como estas?");
//     if (saludo == "bien"){
//         return 'genial';
//     }else{
//         return 'una pena';
//     }
// }
// document.write(estadoSaludo());

// const sumar = (num1,num2)=>{
//     num1 = parseInt(prompt("primer numero"));
//     num2 = parseInt(prompt("numero dos porfa"));
//     let suma = num1+num2;
//     return suma;
// }
// const restar = (num1,num2)=>{
//     num1 = parseInt(prompt("primer numero a restar"));
//     num2 = parseInt(prompt("numero dos porfavor"));
//     let resta = num1-num2;
//     return resta;
// }

// const opcion = (miOpcion)=>{
//     miOpcion = parseInt(prompt("escriba la operacio que desea realizar"));
//     if(miOpcion == 1){
//         return sumar();
//     }else if(miOpcion == 2){
//        return restar();
//     }else{
//         document.write(opcion());
//     }
//     return miOpcion;
// }
// document.write(opcion());
// ___________________________________________________
// let free = false;

// const fiesta = (edad,hora)=>{
//     edad = parseInt(prompt("escriba su edad"));
//     hora = parseInt(prompt("escriba la hora que es"));
//     if(edad >= 18){
//         if(hora >= 2 && hora <= 6 && free == false){
//             document.write("puedes pasar GRATIS");
//             free = true;
//         }else{
//             document.write ("puedes pasar pero debes pagar");
//         }
//     }else {
//         document.write("ERES MENOR DE EDAD NO PUEDES PASAR");
//     }
// }
// fiesta();
// document.write("<br>");
// fiesta();
// document.write("<br>");
// fiesta();
// ________________________________________________

//________________________________________________
// const miComida = () =>{
//    const comidaFavorita = Array.of();
//    let conta = 0;
//    let tamañoArreglo = parseInt(prompt("cuantos platos son"));
//    while(conta < tamañoArreglo){
//       let nombrePlato = prompt("nombre del plato");
//       let precioPlato = parseInt(prompt("precio del plato"));
//       comidaFavorita.push({"nombre":nombrePlato,
//    "precio":precioPlato});
//    conta++;
// }
// return comidaFavorita;
// }
// //console.log(miComida());

// const deportes = ()=>{
//    const hacerDeporte = Array.of();
//    let conta = 0;
//    let numDeporte = parseInt(prompt("cuantos deportes hara hoy"));
//    while(conta < numDeporte){
//       let nombreDeporte = prompt("nombre del deporte");
//       hacerDeporte.push(nombreDeporte);
//       conta++;
//    }
//    return hacerDeporte;
// }
// //console.log(deportes());
// //___________________________________________________
// document.write("+---------------------------+");
// document.write("<br>");
// document.write("            OPCION 1         ");
// document.write("<br>");
// document.write("            OPCION 2         ");
// document.write("<br>");
// document.write("+---------------------------+");

// const actividades = ()=>{
// let actividad = parseInt(prompt("escoja una opcion"));
// if(actividad == 1){
//    console.log(miComida());
// }else if(actividad == 2){
//   console.log(deportes());
// }else{
//    alert("escoja una opcion valida");
//    actividades();
// }

// }
// actividades();


//_______________________________________________

// let estado = false;

// const puedeIngresar = (edad,hora)=>{
//    edad = parseInt(prompt("escriba su edad"));
//    if(edad >= 18){
//       hora = parseInt(prompt("que HORA es"));
//       if(hora >= 2 && hora < 5 && estado==false){
//          document.write("puedes estrar GRATIS");
//          estado = true;
//       }else{
//          document.write('puedes estrar PERO DEBES PAGAR');
//       }
//    }else{
//       document.write("eres menor de edad")
//    }
// }
// puedeIngresar();
// document.write("<br>");
// puedeIngresar();
// document.write("<br>");
// puedeIngresar();
// document.write("<br>");
// puedeIngresar();
// document.write("<br>");
// puedeIngresar();
//__________________________________________________________________

// const estidiante = (nombreEstudiante,estado)=>{
   
// }

//------------------------------------------------------------
// CALCULADORA
var n1=0;
var n2=0;
const sumar = (numero1,numero2)=>{
   return numero1+numero2;
}

const restar = (numero1,numero2)=>{
   return numero1-numero2;
}

const operaciones = ()=>{
   let opciones = parseInt(prompt("1:SUMAR  2:RESTAR"));
   
   if(opciones==1){
      n1 = parseInt(prompt("ingrese numero1"));
      n2 = parseInt(prompt("ingrese numero2"));
      return sumar(n1,n2);
   }else if(opciones==2){
      n1 = parseInt(prompt("ingrese numero1"));
      n2 = parseInt(prompt("ingrese numero2"));
      return restar(n1,n2);
}
}
document.write(operaciones());























