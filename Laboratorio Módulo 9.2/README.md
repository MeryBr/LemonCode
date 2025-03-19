# Laboratorio Módulo 9.2 - Clave Fuerte

Este ejercicio trata de validar si una clave es segura o no. Básicamente, hay que comprobar que no sea una clave débil y que cumpla unos requisitos mínimos.  

## ¿Qué requisitos tiene que cumplir la clave?

Para que la clave sea válida, tiene que:  

- Tener **mayúsculas y minúsculas**.  
- Tener **números**.  
- Tener **caracteres especiales** (@, #, +, _, ...).  
- Tener **mínimo 8 caracteres**.  
- **No contener el nombre del usuario**.  
- **No estar en la lista de claves comunes** (esas típicas como "password", "123456", "qwerty"...).  

## ¿Cómo lo hicimos?

Creamos varias funciones para ir comprobando cada cosa por separado:  

- ✅ `tieneMayusculasYMinusculas(clave)` → Comprueba si hay una mezcla de mayúsculas y minúsculas.  
- ✅ `tieneNumeros(clave)` → Mira si hay algún número en la clave.  
- ✅ `tieneCaracteresEspeciales(clave)` → Busca símbolos raros (@, #, etc.).  
- ✅ `tieneLongitudMinima(clave)` → Se asegura de que tenga 8 caracteres mínimo.  
- ✅ `tieneNombreUsuario(nombreUsuario, clave)` → Evita que el nombre del usuario esté dentro de la clave.  
- ✅ `tienePalabrasComunes(clave, commonPasswords)` → Evita que la clave sea algo muy obvio.  

## Función principal

Se juntan todas esas comprobaciones en una función `validarClave()`, que nos devuelve:  

- **Si la clave es válida o no** (`esValida: true` o `esValida: false`).  
- **El primer error que encuentre** (si la clave no es válida).  

## Pruebas que hicimos

Nos pusimos a probar claves como locos para ver si la función iba bien. Probamos:  

- **Claves fuertes que deberían funcionar** ✅  
- **Claves con errores evidentes** ❌ (sin mayúsculas, sin números, etc.)  
- **Claves que contenían el nombre del usuario** ❌  
- **Claves con palabras comunes** ❌  

Código de prueba que usamos en `main.ts`:  

```ts
const nombreUsuario = "Sol"; // Cambia para probar otros nombres

const clavesDePrueba = [
  { clave: "M1c0ntr4s3ñ@", descripcion: "Clave Fuerte (válida)" },
  { clave: "miclave123!", descripcion: "Sin mayúsculas (falla)" },
  { clave: "MiclaveSegura!", descripcion: "Sin números (falla)" },
  { clave: "Sol2022!", descripcion: "Contiene el nombre del usuario (falla)" },
  { clave: "password123!", descripcion: "Usa una palabra común (falla)" },
  { clave: "12345!", descripcion: "Demasiado corta (falla)" },
  { clave: "SoloLetras", descripcion: "Solo letras, sin números ni símbolos (no es seguro)" },
  { clave: "P@ssw0rd2024", descripcion: "Parece buena pero usa 'password' (falla)" },
  { clave: "C0ntr@s3ñaSegura123!", descripcion: "Clave Segura (válida)" },
];

clavesDePrueba.forEach(({ clave, descripcion }) => {
  const resultado = validarClave(nombreUsuario, clave, commonPasswords);
  console.log(`${descripcion}:`, resultado);
});
