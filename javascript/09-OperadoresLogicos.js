// Operadores de comparación

const ciudadDestino = "Bogotá";
const ciudadesDisponibles = new Array(
    "Bogotá",
    "Lima",
    "Santiago",
    "Montevideo"
);

// Palabra reservada if
// Evalua una condición

// const valorPasaje = 1000;

// if (valorPasaje == 1000){
//     console.log('El pasaje vale 1000');
// } else {
//     console.log('El pasaje no vale 1000');
// }

/*
    Operadores Logicos
    && (AND) Se debe cumplir las 2 condiciones 
    || (OR)  Se debe cumplir una condición al menos
    ! (NOT)  No se cumple la condición
*/
let edadPasajero = 17;
let estaAcompanado = true;

console.log(`Verificando pasajes para ${ciudadDestino}`);

if ((ciudadesDisponibles.indexOf(ciudadDestino) >= 0) &&
    (edadPasajero >= 18 || estaAcompanado)) {
    console.log("Pasaje disponible para la venta");
} else {
    console.log("Ciudad no disponible para viajar");
}

// Aplicando logica negativa 

edadPasajero = 17;
estaAcompanado = false;

if (!((ciudadesDisponibles.indexOf(ciudadDestino) >= 0) &&
    (edadPasajero >= 18 || estaAcompanado))) {
    console.log("Pasaje disponible para la venta");
} else {
    console.log("Ciudad no disponible para viajar");
}
