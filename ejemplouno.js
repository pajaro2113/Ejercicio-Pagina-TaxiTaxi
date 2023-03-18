
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


class celulares {
    constructor(color,peso,tamaño,resoPantalla,resoCamara,ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resoluciondePantalla = resoPantalla;
        this.resoluciondeCamara = resoCamara;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    prender(){
        if (this.encendido == false){
            alert('el celular esta encendido');
            this.encendido = true;
        }else{
            alert('el telefono esta apagado');
        }
    }
    reiniciar(){
        if(this.encendido == true){
            alert('reiniciando celular...');
        }else{
            alert('el telefono no se puede reinicial, pues esta apagado');
        }
    }
    tomarFotos(){
        alert(`foto tomada a una resolucion de ${this.resoluciondeCamara}`);
    }
    grabarVideo(){
        alert(`video grabado a ${this.resoluciondeCamara} Megapixeles`);
    }
    mostrarInfo(){
        return `
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Tamaño: <b>${this.tamaño}</b></br>
        Resolucion de camara: <b>${this.resoluciondePantalla}</b></br>
        Resolucion de video: <b>${this.resoluciondeCamara}</b></br>
        Memoria Ram: <b>${this.memoriaRam}</b></br>`;
    }
}

class altaGama extends celulares{
    constructor(color,peso,tamaño,resoPantalla,resoCamara,ram,grabarLento,rFacial,camExtra){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resoluciondePantalla = resoPantalla;
        this.resoluciondeCamara = resoCamara;
        this.memoriaRam = ram;
        this.encendido = false;
        this.grabarLento = grabarLento;
        this.rFacial = rFacial;
        this.camExtra = camExtra;
    }
}

const celularUno = new celulares("rojo","150g","5'","1024px","724px","4Mb"); 
const celularDos = new celulares("blanco","10g","15'","2048px","724px","2Mb"); 
const celularTres = new celulares("gris","250g","10'","1024px","1024px","2Mb"); 

// celularUno.prender();
// celularUno.reiniciar();
// celularUno.grabarVideo();
// celularUno.tomarFotos();
document.write(`
${celularUno.mostrarInfo()}<br>
${celularDos.mostrarInfo()}<br>
${celularTres.mostrarInfo()}<br>`);