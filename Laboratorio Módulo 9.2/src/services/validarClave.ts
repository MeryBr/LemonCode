import { ValidacionClave } from "../models/validacionClave";
import { tieneMayusculasYMinusculas } from "../utils/validarMayusculas";
import { tieneNumeros } from "../utils/validarNumeros";
import { tieneCaracteresEspeciales } from "../utils/validarEspeciales";
import { tieneLongitudMinima } from "../utils/validarLongitud";
import { tieneNombreUsuario } from "../utils/validarUsuario";
import { tienePalabrasComunes } from "../utils/validarComunes";

export const validarClave = (nombreUsuario: string, clave: string, commonPasswords: string[]): ValidacionClave => {
  const validaciones = [
    tieneMayusculasYMinusculas(clave),
    tieneNumeros(clave),
    tieneCaracteresEspeciales(clave),
    tieneLongitudMinima(clave),
    tieneNombreUsuario(nombreUsuario, clave),
    tienePalabrasComunes(clave, commonPasswords)
  ];

  const error = validaciones.find(v => !v.esValida);
  return error ? error : { esValida: true };
};
