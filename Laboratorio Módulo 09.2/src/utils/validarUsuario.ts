import { ValidacionClave } from "../models/validacionClave";

export const tieneNombreUsuario = (nombreUsuario: string, clave: string): ValidacionClave => {
  return clave.toLowerCase().includes(nombreUsuario.toLowerCase())
    ? { esValida: false, error: "La clave no debe tener el nombre del usuario" }
    : { esValida: true };
};
