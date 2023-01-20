// EJERCICIO DOS

// Un alumno desea saber cual será su calificación final en 
// cierta materia. Dicha calificación se compone de lo siguiente:

// 60% corresponde al examen escrito.
// 20% corresponde a las lecciones
// 15% corresponde a las tareas.
// 5% corresponde a las prácticas en el laboratorio

// El dato del examen escrito es un valor entre 0 y 100 y 
// los otros datos son valores entre 0 y 10. La calificación 
// final debe ser un valor entre 0 y 20.

let nombreMateria = prompt("Ingrese el nombre de la materia");
if (nombreMateria == "matematicas" || nombreMateria == "sociales" || nombreMateria == "fisica" || nombreMateria == "quimica" || nombreMateria == "español"){
    let escrito = parseInt(prompt("Digite la nota en examen escrito"));
    let lecciones = parseInt(prompt("Escriba cuanto saco en lecciones"));
    let tareas = parseInt(prompt("Digite a nota que obtuvo en tareas"));
    let laboratorio = parseInt(prompt("y por ultimo, cuanto saco en Laboratorio"));
    escrito = escrito * 0.6;
    lecciones = lecciones * 0.2;
    tareas = tareas * 0.15;
    laboratorio = laboratorio * 0.05;
    var promedio = escrito + lecciones + tareas + laboratorio;
    document.write(`Su nota final es ${promedio}`)
}else {
    document.write(`esta materia NO EXISTE en nuestro programa`);
}



