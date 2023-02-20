
const cuidadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");


const paisesDisponibles = ["Colombia", "Perú", "Chile", "Brasil", "Argentina", "Uruguay", "Venezuela"];

const cantidadCuidades = cuidadesDisponibles.length;

console.log(`En la lista de cuidades tenemos ${cantidadCuidades} elementos`);
console.log(`En la lista de paises tenemos ${paisesDisponibles.length} elementos`);

// Eliminar el primer elemento de la lista

cuidadesDisponibles.shift()
console.log(cuidadesDisponibles);
console.log(`En la lista de cuidades tenemos ${cuidadesDisponibles.length} elementos`);

// Eliminar el ultimo elemento de la lista

cuidadesDisponibles.pop();
console.log(cuidadesDisponibles);
console.log(`En la lista de cuidades tenemos ${cuidadesDisponibles.length} elementos`);

// Filtro de elementos de la lista 

const paisesFiltrados = paisesDisponibles.filter((e) => e.length > 6);
console.log(paisesFiltrados);

// Todo en una lista 

console.log(paisesDisponibles.join('-'));

// Ordenar una lista

console.log(paisesDisponibles.sort());

// Conociendo la posicion

console.log(`Perú está en la posición: ${paisesDisponibles.indexOf('Perú')}`);

// Unificar 2 listas

const listaPaisesYCiudades = paisesDisponibles.concat(cuidadesDisponibles);
console.log('Lista de paises y cuidades')
console.log(listaPaisesYCiudades);
console.log('lista de paises')
console.log(paisesDisponibles);