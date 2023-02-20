const datos = [
  {
    ciudad: "Bogotá",
    precio: 500,
  },
  {
    ciudad: "Lima",
    precio: 400,
  },
  {
    ciudad: "Santiago",
    precio: 380,
  },
  {
    ciudad: "Montevideo",
    precio: 200,
  },
];

const presupuestoDisponible = 2000;

let i = 0;

let ciudadSeleccionada = '';
do {
  if (datos[i].precio < presupuestoDisponible) {
    ciudadSeleccionada = datos[i].ciudad;
    break;
  }
  i++;
} while (i < datos.length && ciudadSeleccionada == '')

if (i > datos.length) {
  console.log("No hay ciudades disponibles para viajar");
} else {
  console.log(`Puedes comprar pasaje para: ${ciudadSeleccionada}`);
}
