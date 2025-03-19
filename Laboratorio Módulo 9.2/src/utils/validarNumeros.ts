import { ValidacionClave } from "../models/validacionClave";

export const tieneNumeros = (clave: string): ValidacionClave => {
  return /\d/.test(clave)
    ? { esValida: true }
    : { esValida: false, error: "La clave debe de tener números" };
};
