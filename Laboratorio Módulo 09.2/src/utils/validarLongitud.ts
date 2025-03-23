import { ValidacionClave } from "../models/validacionClave";

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  return clave.length >= 8
    ? { esValida: true }
    : { esValida: false, error: "La clave debe de tener una longitud mínima de 8 caracteres" };
};
