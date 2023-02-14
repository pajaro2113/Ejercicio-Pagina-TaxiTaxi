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

const sumar = (num1,num2)=>{
    num1 = parseInt(prompt("primer numero"));
    num2 = parseInt(prompt("numero dos porfa"));
    suma = num1+num2;
    return suma;
}
document.write('el resultado primero es '+sumar());
document.write("<br>");
document.write(sumar());
document.write("<br>");
document.write(sumar());