# Laboratorio Módulo 9.2 - Clave Fuerte

Este ejercicio trata de comprobar si una clave es segura o no. La idea es que no sea una clave fácil de adivinar.

## ✅ ¿Qué tiene que tener una clave segura?
Para que la clave sea válida, tiene que cumplir estas reglas básicas:  
- Tener **mayúsculas y minúsculas**.  
- Tener **números**.  
- Tener **caracteres especiales** (@, #, +, _, ...).  
- Tener **mínimo 8 caracteres**.  
- **No contener el nombre del usuario**.  
- **No ser una clave típica** como "123456" o "password".  

## 🔍 ¿Cómo lo hice?
Fui probando claves y viendo qué fallaba. Para hacerlo más fácil, separé cada comprobación en una función diferente.  
Si una clave no cumple con algo, devuelve un mensaje diciendo qué está mal.  

Al final, metí varias pruebas en `main.ts` para comprobar que todo funcionaba bien.  

```ts
import { validarClave } from "./services/validarClave";
import { commonPasswords } from "./data/commonPasswords";

const nombreUsuario = "Sol"; // Esto lo cambio para probar diferentes nombres de usuario

// Probando claves diferentes
const clavesDePrueba = [
  { clave: "M1c0ntr4s3ñ@", descripcion: "Clave fuerte (vale)" },
  { clave: "miclave123!", descripcion: "Sin mayúsculas (fallo)" },
  { clave: "MiclaveSegura!", descripcion: "Sin números (fallo)" },
  { clave: "Sol2022!", descripcion: "Tiene el nombre del usuario (fallo)" },
  { clave: "password123!", descripcion: "Es una clave común (fallo)" },
  { clave: "12345!", descripcion: "Demasiado corta (fallo)" },
  { clave: "SoloLetras", descripcion: "Solo letras, sin números ni símbolos (no es seguro)" },
  { clave: "P@ssw0rd2024", descripcion: "Parece buena pero usa 'password' (fallo)" },
  { clave: "C0ntr@s3ñaSegura123!", descripcion: "Clave Segura (vale)" },
];

// En consola
clavesDePrueba.forEach(({ clave, descripcion }) => {
  const resultado = validarClave(nombreUsuario, clave, commonPasswords);
  console.log(`${descripcion}:`, resultado);
});
