import { describe, it, expect } from "vitest";
import {
  limpiarIBAN,
  esIBANValido,
  parsearIBAN,
  obtenerNombreBanco,
} from "./iban.helpers";

describe("limpiarIBAN", () => {
  it("elimina espacios y guiones, y convierte a mayúsculas", () => {
    const sucio = "es21-1465 0100 72 2030876293";
    const limpio = limpiarIBAN(sucio);
    expect(limpio).toBe("ES2114650100722030876293");
  });
});

describe("esIBANValido", () => {
  it("devuelve true para un IBAN válido", () => {
    expect(esIBANValido("ES6621000418401234567891")).toBe(true);
  });

  it("devuelve false para un IBAN inválido", () => {
    expect(esIBANValido("ES0000000000000000000000")).toBe(false);
  });
});

describe("parsearIBAN", () => {
  it("extrae correctamente las partes del IBAN", () => {
    const partes = parsearIBAN("ES2114650100722030876293");
    expect(partes).toEqual({
      codigoPais: "ES",
      digitoControl: "21",
      codigoBanco: "1465",
      codigoOficina: "0100",
      digitoControlCuenta: "72",
      numeroCuenta: "2030876293",
    });
  });
});

describe("obtenerNombreBanco", () => {
  it("devuelve el nombre correcto del banco", () => {
    expect(obtenerNombreBanco("1465")).toBe("ING Bank NV");
  });

  it("devuelve 'Banco desconocido' para código no listado", () => {
    expect(obtenerNombreBanco("9999")).toBe("Banco desconocido");
  });
});
