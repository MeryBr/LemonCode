import { validarClave } from "./services/validarClave";
import { commonPasswords } from "./data/commonPasswords";

const nombreUsuario = "Sol"; // Esto lo cambio para probar diferentes nombres de usuario

// Probando claves diferentes
const clavesDePrueba = [
  { clave: "M1c0ntr4s3ñ@", descripcion: "Clave Fuerte (válida)" },
  { clave: "miclave123!", descripcion: "Sin mayúsculas (falla)" },
  { clave: "MiclaveSegura!", descripcion: "Sin números (falla)" },
  { clave: "Sol2022!", descripcion: "Contiene el nombre de usuario (falla)" },
  { clave: "password123!", descripcion: "Usa una palabra común (falla)" },
  { clave: "12345!", descripcion: "Demasiado corta (falla)" },
  { clave: "SoloLetras", descripcion: "Solo letras, sin números ni símbolos (no es seguro)" },
  { clave: "P@ssw0rd2024", descripcion: "Parece buena pero usa 'password' (falla)" },
  { clave: "C0ntr@s3ñaSegura123!", descripcion: "Clave Segura (válida)" },
];

// En consola
clavesDePrueba.forEach(({ clave, descripcion }) => {
  const resultado = validarClave(nombreUsuario, clave, commonPasswords);
  console.log(`${descripcion}:`, resultado);
});
