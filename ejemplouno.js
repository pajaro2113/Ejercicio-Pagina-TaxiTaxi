
// const mensaje = () => {
//     let mensaje1 = " es inteligente".toUpperCase();
//     let mensaje2 = " es sabio";
//     let mensaje3 = "es capaz".toUpperCase();
//     let nombre = prompt('escriba el nombre del usuario');
//     if(nombre == "alvaro"){
//         document.write(nombre," ",mensaje1,"<br>");
//         document.write(nombre, " ",mensaje2,"<br>");
//         document.write(nombre, " ",mensaje3,"<br>");
//     }else{
//         document.write("no escribio el nombre correcto");
//     }
    
// }
// mensaje();

// const sumar = (num1,num2) =>{
//     num1 = parseInt(prompt("primer numero"));
//     num2 = parseInt(prompt("numero dos porfa"));
//     return num1 + num2;
    
// }
// const restar = (num1,num2) =>{
//     num1 = parseInt(prompt("primer numero a restar"));
//     num2 = parseInt(prompt("numero dos porfavor"));
//     return num1 - num2;
    
// }

// const opcion = (miOpcion)=>{
//     miOpcion = parseInt(prompt("escriba la operacio que desea realizar"));
//     if(miOpcion == 1){
//        document.write("la suma es ",sumar());
//     }else{
//         document.write("la suma es ",restar());
//     }
//     return miOpcion;
// }
// opcion();

// class animal{
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.informacion = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`
//     }
//     verinfo(){
//         document.write(this.informacion+"<br>");
//     }
// }
// class dog extends animal{
//     constructor(especie,edad,color,raza){
//         super(especie,edad,color);
//         this.raza = null;
//     }
//     set setRaza(newName){
//         this.raza = newName ;
//     }
//     get getRaza(){
//         return this.raza;
//     }
// }

// const canino = new dog("perro",5,"blanco","doberman");
// const felino = new animal("gato",2,"gris");
// const ave = new animal("pajaro",4,"amarillo");

// canino.setRaza = "pedroo";
// document.write(canino.getRaza);
// // felino.verinfo();
// // ave.verinfo();


// class celulares {
//     constructor(color,peso,tamaño,resoPantalla,resoCamara,ram){
//         this.color = color;
//         this.peso = peso;
//         this.tamaño = tamaño;
//         this.resoluciondePantalla = resoPantalla;
//         this.resoluciondeCamara = resoCamara;
//         this.memoriaRam = ram;
//         this.encendido = false;
//     }
//     prender(){
//         if (this.encendido == false){
//             alert('el celular esta encendido');
//             this.encendido = true;
//         }else{
//             alert('el telefono esta apagado');
//         }
//     }
//     reiniciar(){
//         if(this.encendido == true){
//             alert('reiniciando celular...');
//         }else{
//             alert('el telefono no se puede reinicial, pues esta apagado');
//         }
//     }
//     tomarFotos(){
//         alert(`foto tomada a una resolucion de ${this.resoluciondeCamara}`);
//     }
//     grabarVideo(){
//         alert(`video grabado a ${this.resoluciondeCamara} Megapixeles`);
//     }
//     mostrarInfo(){
//         return `
//         Color: <b>${this.color}</b></br>
//         Peso: <b>${this.peso}</b></br>
//         Tamaño: <b>${this.tamaño}</b></br>
//         Resolucion de camara: <b>${this.resoluciondePantalla}</b></br>
//         Resolucion de video: <b>${this.resoluciondeCamara}</b></br>
//         Memoria Ram: <b>${this.memoriaRam}</b></br>`;
//     }
// }

// class altaGama extends celulares{
//     constructor(color,peso,tamaño,resoPantalla,resoCamara,ram,camExtra){
//         super(color,peso,tamaño,resoPantalla,resoCamara,ram);
//         this.camExtra = camExtra;
//     }
//     reconocimientoFaial(){
//         alert('el telefono esta haciendo uso de reconocimeinto facial');
//     }
//     camaraLenta(){
//         alert('Ahora estamos rabando en camara lenta');
//     }
//     mostrarInfo_AltaGama(){
//         return this.mostrarInfo() + ` Resolucion camara extra: <b>${this.camExtra}</b>`
//     }
// }

// const celularUno = new celulares("rojo","150g","5'","1024px","724px","4Mb"); 
// const celularDos = new celulares("blanco","10g","15'","2048px","724px","2Mb"); 
// const celularTres = new celulares("gris","250g","10'","1024px","1024px","2Mb"); 
// const celularUno_AltaGama = new altaGama("rojo","150g","5'","1024px","724px","4Mb","FULL HD");
// const celularDos_AltaGama = new altaGama("rojo","150g","5'","1024px","724px","4Mb","4K");

// // celularUno.prender();
// // celularUno.reiniciar();
// // celularUno.grabarVideo();
// // celularUno.tomarFotos();
// document.write(`
// ${celularUno.mostrarInfo()}<br>
// ${celularDos.mostrarInfo()}<br>
// ${celularTres.mostrarInfo()}<br>
// ${celularUno_AltaGama.mostrarInfo_AltaGama()}<br><br>
// ${celularDos_AltaGama.mostrarInfo_AltaGama()}<br>`);

// ---------------------------------------------------------------------------

// class app{
//     constructor(cantDescargas,puntuacion,peso){
//         this.cantDescargas = cantDescargas;
//         this.puntuacion = puntuacion;
//         this.peso = peso;
//         this.instalarApp = false;
//         this.desinstalarApp = false;
//         this.abirapp = false;
//         this.cerrarApp = false;
//     }
    
//     listarApp(){
//         return `Cantidad de descargas: <b>${this.cantDescargas}</b><br>
//                 Puntuacion de la App: <b>${this.puntuacion}</b><br>
//                 Peso de  aplicacion: <b>${this.peso}</b><br><br>`;
//     }
//     instalada(){
//         if(this.instalarApp == false){
//             alert('la aplicacion esta intalada');
//             this.instalarApp = true;
//         }
//     }
//     desinstalada(){
//         if(this.instalarApp == true){
//             alert('la aplicacion ha sido desinstaada');
//         }else if (this.instalarApp = false) {
//             alert('la aplicacion o existe en el dispositivo');
//         }
//     }
//     abierta(){
//         if(this.abirapp == false && this.instalarApp == true){
//             alert('Aplicacion abierta');
//             this.abirapp = true;
//         }else{
//             alert('la app no se pudo abrir por qe ya esta abierta o por qe no esta instalada');
            
//         }
//     }
//     cerada(){
//         if(this.abirapp == true && this.instalarApp == true){
//             alert('Aplicacion ha sido cerrada');
//         }else{
//             alert('la app o se pudo cerrar por qe ya esta cerrada o por qe no esta instalada');
            
//         }
//     }
// }
// let dato1 = parseInt(prompt('escriba la cantidad de descargas...'));
// const appUno = new app(dato1,"6.3","40Mb");
// const appDos = new app("10","5.3","40Mb");
// const appTes = new app("1","5.0","60Mb");
// const appCuatro = new app("47","8.0","30Mb");
// const appCinco = new app("10","3.8","70Mb");
// const appSeis = new app("70","9.9","10Mb");
// const appSiete = new app("10","15.3","20Mb");

// appUno.instalada();
// appUno.desinstalada();
// appUno.cerada();

// document.write(`${appUno.listarApp()}`);
// document.write(`${appDos.listarApp()}`);
// document.write(`${appTes.listarApp()}`);
// document.write(`${appCuatro.listarApp()}`);
// document.write(`${appCinco.listarApp()}`);
// document.write(`${appSeis.listarApp()}`);
// document.write(`${appSiete.listarApp()}`);


//______________________________________________________________________________
//CADENAS o metodos de string

let cadena1 = "cadenadeprueba";
let cadena2 = "prueba"

//resultado = cadena1.concat(cadena2); 
//concat junta dos o mas cadenas

// resultado = cadena1.startsWith(cadena2);
// resultado = cadena1.endsWith(cadena2);
// startsWith o endswith-> si una cadena comienza o termina con los caracteres de la otra muestra TRUE sino FALSE

// resultado = cadena1.includes(cadena2);
// includes -> si lo qe esta en al cadena dos pertenece a la cadena uno;

// resultado = cadena1.substring(2,7);
//substring -> muestra solo los caracteres desde el que empieza hasta el que termina -1;


// document.write(resultado);

// _________________________________________________________
//metodos de array ( transformadores)

// let nombres =["pedro","maria","jorge"];

// let resultado = nombres.pop()

// document.write(resultado);

// pop -> elimina el utimo objeto de un array

// let nombres =["pedro","maria","jorge"];

// let resultado = nombres.shift();

// document.write(resultado);

// shift -> remueve el primer elemento de un array

// let nombres =["pedro","maria","jorge"];

// let resultado = nombres.push("alvaro")

// document.write(nombres);

//push -> agrga un nuevo elemento  a mi array

// let nombres =["pedro","maria","jorge","adriana","josefa"];
// document.write(nombres+"<br>");

// let resultado = nombres.reverse();

// document.write(resultado);

// reverse -> muestra de mnra inversa o alrevez el array, de atras para adelante


// let nombres =["pedro","maria","jorge"];

// let resultado = nombres.unshift("pajaro")

// document.write(nombres);

// unshift -> agrega elementos al inicio del array

// let nombres =[1,5,2,8,5,7,3,5,9,2,100,11,2];

// document.write(nombres+"<br>");

// let resultado = nombres.sort()

// document.write(nombres);

// sort -> organiza u ordena el arreglo e manera alfabetica


// let nombres =[1,5,2,8,5,7,3,5,9,2,100,11,2];

// document.write(nombres+"<br>");

// let resultado = nombres.splice(3,6,"oigalo");

// document.write(nombres);

// splice -> cambia en contenido del array agregando o elimminando elementos existentes
















