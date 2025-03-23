import { ValidacionClave } from "../models/validacionClave";

export const tienePalabrasComunes = (clave: string, commonPasswords: string[]): ValidacionClave => {
  return commonPasswords.some((p) => clave.toLowerCase().includes(p))
    ? { esValida: false, error: "La clave no debe de contener palabras comunes" }
    : { esValida: true };
};
