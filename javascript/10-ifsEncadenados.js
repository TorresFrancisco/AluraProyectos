const ciudadDestino = "Lima";
const ciudadesDisponibles = new Array(
  "Bogotá",
  "Lima",
  "Santiago",
  "Montevideo"
);

let edadPasajero = 17;
let estaAcompanado = false;

console.log(`Verificando pasajes para ${ciudadDestino}`);
// Verificamos que el pasajero cumple las reglas
if (edadPasajero >= 18 || estaAcompanado) {
  // Verificamos que la ciudad este disponible
  if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0) {
    console.log("Pasaje disponible para la venta");
  } else {
    console.log("Ciudad no disponible para viajar");
  }
} else {
  if (edadPasajero >= 16 && ciudadDestino == "Lima") {
    console.log("Pasaje disponible para la venta");
  } else {
    console.log("Pasajero no cumple las reglas");
  }
}
