// Definicion de una lista con tipo de dato alfanumerico

const cuidadesDisponibles = new Array("Bogotá", "Lima", "Santiago");
console.log(cuidadesDisponibles);

// Definicion de una lista con tipo de forma abreviada

const paisesDisponibles = ["Colombia", "Perú", "Chile", "Brasil", "Argentina"];
console.log(paisesDisponibles);

//push() agregar al final del array

{
  paisesDisponibles.push("Uruguay");
  cuidadesDisponibles.push("Montevídeo");
}

console.log(paisesDisponibles);
console.log(cuidadesDisponibles);

// unshift() agregar al principio del array

paisesDisponibles.unshift("Ecuador");
cuidadesDisponibles.unshift("Quito");

console.log(paisesDisponibles);
console.log(cuidadesDisponibles);

// Mostrando el primer elemento de la lista

console.log(paisesDisponibles[0]);
console.log(cuidadesDisponibles[0]);

// Reemplaza la posicion indicada de los elementos

paisesDisponibles.splice(1,2, 'Venezuela', 'Pagaguay');
console.log(paisesDisponibles);

