import { ValidacionClave } from "../models/validacionClave";

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  return /[A-Z]/.test(clave) && /[a-z]/.test(clave)
    ? { esValida: true }
    : { esValida: false, error: "La clave debe de tener mayúsculas y minúsculas" };
};
