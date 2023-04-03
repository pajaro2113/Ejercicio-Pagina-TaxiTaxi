// const misOpciones = (opcion) =>{
//     opcion = parseInt(prompt("escriba una opcion"));
//     if (opcion == 1){
//         document.write(sumandos());
//     }else{
//         return restandos();
//     }
//     //return opcion;
// }
// document.write(misOpciones());

// const sumandos = (frase) =>{
//     frase = "hola mundo";
//     return frase;
// }

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
        constructor(color,peso,tamaño,resoPantalla,resoCamara,ram,camExtra){
            super(color,peso,tamaño,resoPantalla,resoCamara,ram);
            this.camExtra = camExtra;
        }
        reconocimientoFaial(){
            alert('el telefono esta haciendo uso de reconocimeinto facial');
        }
        camaraLenta(){
            alert('Ahora estamos rabando en camara lenta');
        }
        mostrarInfo_AltaGama(){
            return this.mostrarInfo() + ` Resolucion camara extra: <b>${this.camExtra}</b>`
        }
    }
    
    const celularUno = new celulares("rojo","150g","5'","1024px","724px","4Mb"); 
    const celularDos = new celulares("blanco","10g","15'","2048px","724px","2Mb"); 
    const celularTres = new celulares("gris","250g","10'","1024px","1024px","2Mb"); 
    const celularUno_AltaGama = new altaGama("rojo","150g","5'","1024px","724px","4Mb","FULL HD");
    const celularDos_AltaGama = new altaGama("rojo","150g","5'","1024px","724px","4Mb","4K");
    
    // celularUno.prender();
    // celularUno.reiniciar();
    // celularUno.grabarVideo();
    // celularUno.tomarFotos();
    document.write(`
    ${celularUno.mostrarInfo()}<br>
    ${celularDos.mostrarInfo()}<br>
    ${celularTres.mostrarInfo()}<br>
    ${celularUno_AltaGama.mostrarInfo_AltaGama()}<br><br>
    ${celularDos_AltaGama.mostrarInfo_AltaGama()}<br>`);
    