// Importación de Clases
import { CuentaCorriente } from "./CuentaCorriente.js";
import { Cliente } from "./Cliente.js";

// Instanciar la clase Cliente

const cliente = new Cliente("Francisco", "19509129", "19509129-3");
const cliente2 = new Cliente("María", "18508128", "18508128-3");

const cuentaDeFrancisco = new CuentaCorriente(cliente, "1", "001");
const cuentaDeMaria = new CuentaCorriente(cliente2, "2", "002");

// console.log(cuentaDeFrancisco.cliente);
// console.log(cuentaDeMaria.cliente);

let saldoCuenta = cuentaDeFrancisco.verSaldo();
saldoCuenta = cuentaDeFrancisco.depositoEnCuenta(150);
console.log(CuentaCorriente.cantidadCuentas);

// console.log(cuentaDeMaria.getCliente)
// cuentaDeMaria.setCliente = 0;
// console.log(cuentaDeMaria.getCliente)

// ||

// console.log(cuentaDeMaria.cliente)
// cuentaDeMaria.cliente = 0;
// console.log(cuentaDeMaria.cliente)

// cuentaDeFrancisco.trasferirParaCuentas(100, cuentaDeMaria);
// console.log('Cuenta de maria ', cuentaDeMaria)

// const saldoMaria = cuentaDeMaria.verSaldo();
// console.log('El saldo actual: (CuentaMaria) '  + saldoMaria);

// const saldoFrancisco = cuentaDeFrancisco.verSaldo();
// console.log('El saldo actual: (CuentaFrancisco) '  + saldoFrancisco);

// // Instanciar la clase Cliente
// const cliente1 = new Cliente();
// cliente1.nombreCliente = 'José';
// cliente1.dniCliente = '12332';
// cliente1.rutCliente = '19509129-3'
// const cuentaCorriente1 = new CuentaCorriente();
// cuentaCorriente1.numeroCuenta = '232323';
// cuentaCorriente1.saldoCuenta = 5000;
// cuentaCorriente1.agencia = 'Santiago';

// const cliente2 = new Cliente();
// cliente2.nombreCliente = 'Leonardo';
// cliente2.dniCliente = '13804050';
// cliente2.rutCliente = '13106444-6'
// const cuentaCorriente2 = new CuentaCorriente();
// cuentaCorriente2.numeroCuenta = '123434343';
// cuentaCorriente2.saldoCuenta = 2000;
// cuentaCorriente2.agencia = 'Concepción';

// const cliente3 = new Cliente();
// cliente3.nombreCliente = 'María';
// cliente3.dniCliente = '2324';
// cliente3.rutCliente = '27079927-3'
// const cuentaCorriente3 = new CuentaCorriente();
// cuentaCorriente3.numeroCuenta = '9829382';
// cuentaCorriente3.saldoCuenta = 1000;
// cuentaCorriente3.agencia = 'Temuco';

// console.log( cliente1, cuentaCorriente1 );
// console.log( cliente2, cuentaCorriente2 );
// cuentaCorriente2.depositoEnCuenta(1000);
// console.log( cliente2, cuentaCorriente2 );
// console.log( cliente3, cuentaCorriente3 );
