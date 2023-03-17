const misOpciones = (opcion) =>{
    opcion = parseInt(prompt("escriba una opcion"));
    if (opcion == 1){
        document.write(sumandos());
    }else{
        return restandos();
    }
    //return opcion;
}
document.write(misOpciones());

const sumandos = (frase) =>{
    frase = "hola mundo";
    return frase;
}