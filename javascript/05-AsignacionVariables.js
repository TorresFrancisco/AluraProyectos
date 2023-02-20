/* Palabra Const 
    Espacio de memoria que luego de asignar su valor no cambia con el tiempo*/

// const valorPasaje = 1650;
// console.log(valorPasaje);

const nombrePasajero = "Leonardo";
const apellidoPasajero = "Lacruz";

// console.log(nombrePasajero);
// console.log(apellidoPasajero);

/* Palabra let
    Espacio de memoria que pueda cambiar durante la ejecucion del programa*/

// let nombreCompleto = nombrePasajero + " " + apellidoPasajero;
// console.log(nombreCompleto);

/* Palabra var 
    Espacio de memoria que puede cambiar durante la ejecucion del programa 
    El Alcance*/

var nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;

// Bloque

{
    let nombreCompleto = nombrePasajero + " " + apellidoPasajero;
    console.log('Variable con let: ' + nombreCompleto);
    console.log('Variable con var: ' + nombreCompletoPasajero);

}

console.log('Variable con var: ' + nombreCompletoPasajero);

