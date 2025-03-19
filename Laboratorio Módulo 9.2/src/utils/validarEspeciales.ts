import { ValidacionClave } from "../models/validacionClave";

export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  return /[@#\+\-_!$%^&*()]/.test(clave)
    ? { esValida: true }
    : { esValida: false, error: "La clave debe de tener caracteres especiales" };
};
