// Importación de Cliente
import { Cliente } from "./Cliente.js";

// Clase CuentaCorriente   // # or _  es privado
export class CuentaCorriente {
  #cliente;
  numeroCuenta;
  agencia;
  #saldoCuenta;
  static cantidadCuentas = 0;

  set cliente(valor) {
    if (valor instanceof Cliente) {
      this.#cliente = valor;
    }
  }

  get cliente() {
    return this.#cliente;
  }

  constructor(cliente, numeroCuenta, agencia) {
    this.cliente = cliente;
    this.numeroCuenta = numeroCuenta;
    this.agencia = agencia;
    CuentaCorriente.cantidadCuentas++;
  }

  depositoEnCuenta(valor) {
    if (valor > 0) this.#saldoCuenta += valor;
    return this.#saldoCuenta;
  }

  retirarDeCuenta(valor) {
    if (valor <= this.#saldoCuenta) this.#saldoCuenta -= valor;
    return this.#saldoCuenta;
  }
  verSaldo() {
    return this.#saldoCuenta;
  }
  trasferirParaCuentas(valor, cuentaDestino) {
    this.retirarDeCuenta(valor);
    cuentaDestino.depositoEnCuenta(valor);
  }
}
