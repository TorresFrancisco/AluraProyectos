/*Importación de clases*/
import { Cliente } from "./Cliente.js";
import { SistemaAutenticacion } from "./SistemaAutenticacion.js";
// import { CuentaCorriente } from "./Cuentas/CuentaCorriente.js";
// import { CuentaAhorro } from "./Cuentas/CuentaAhorro.js";
// import { CuentaNomina } from "./Cuentas/CuentaNomina.js";
import { Empleado } from './Empleados/Empleado.js'
import { Gerente } from './Empleados/Gerente.js'
import { Director } from './Empleados/Director.js'


const empleado = new Empleado('Francisco Torres', '19509129-3' , 10000);
empleado.asignarClave('12345');
console.log(SistemaAutenticacion.login(empleado,'12345'));

const gerente = new Gerente('Pedro Rivas', '19500012-3', 12000);
gerente.asignarClave('655');
console.log(SistemaAutenticacion.login(gerente,'655'));

// const director = new Director('Franco Moreno', '15578129-3', 15000);


const cliente = new Cliente("Leonardo", "13804050", "123224");
cliente.asignarClave('01111');
console.log(SistemaAutenticacion.login(cliente,'11111'));



// const cliente2 = new Cliente("María", "16979808", "8989");


// console.log(empleado.verBonificacion());
// console.log(director.verBonificacion());
// console.log(gerente.verBonificacion());

// console.log(SistemaAutenticacion.login(empleado,'12345'));








// const cuentaDeLeonardo = new CuentaCorriente(cliente, "1", "001");
// const cuentaDeMaria = new CuentaCorriente(cliente2, "2", "002");
// const cuentaAhorroDeLeonardo = new CuentaAhorro(cliente, "9985", "001");

// const cuentaNominaLeonardo = new CuentaNomina(cliente, '111', '003', 0);
// cuentaNominaLeonardo.depositoEnCuenta(150);
// console.log(cuentaNominaLeonardo.verSaldo());

// cuentaNominaLeonardo.retirarDeCuenta(50);
// console.log(cuentaNominaLeonardo.verSaldo());

// console.log(cuentaNominaLeonardo)