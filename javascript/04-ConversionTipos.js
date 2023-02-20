// Tipos de Datos
// Alfanumericos

let nombrePasajero1 = 'Pedro Silva';
nombrePasajero1 = 'Ramón Silva';


// Numericos

let valorBoleto = 1000;
const impuestoAeropuerto = 100;
const porcentajeTasaDeEmbarque = 60/100;
var gestionAgencia = 100;

// Logicos (True , False)

let boletoActivo = true;

// Operaciones Aritmeticas

let totalBoletos = valorBoleto + porcentajeTasaDeEmbarque + gestionAgencia;


// Orden de precedencia
// 1. Parentesis
// 2. Multiplicacion y Division
// 3. Suma y Resta

let totalBoletos2 = (valorBoleto + impuestoAeropuerto)*porcentajeTasaDeEmbarque + gestionAgencia;
console.log(totalBoletos2);

// Concatenacion 

let nombrePasajero =  'Leonardo' ;
let apellidoPasajero = 'Perez';

let nombreCompleto = nombrePasajero + ' ' + apellidoPasajero;
let pasaporte = '1000' + '12';
let multiplicacion = parseInt('1000') / parseFloat('10');

console.log(nombreCompleto);
console.log(pasaporte);
console.log(multiplicacion);

// NaN

let noesNumero = parseInt('AASAAA');
console.log(noesNumero);