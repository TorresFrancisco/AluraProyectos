const ciudadesDisponibles = new Array(
  "Bogotá",
  "Lima",
  "Santiago",
  "Montevideo"
);

const precioCiudad = new Array(500, 400, 380, 200);
const presupuestoDisponible = 190;

let i = 0;

// While... 0 o más veces
// Do... 1 o más veces

while (
  precioCiudad[i] > presupuestoDisponible &&
  i < ciudadesDisponibles.length
) {
  i++;
}
if (i == ciudadesDisponibles.length) {
  console.log("No hay ciudades disponibles para viajar");
} else {
  console.log(`Puedes comprar pasaje para: ${ciudadesDisponibles[i]}`);
}
