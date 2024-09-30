# Módulo 3 - Variables - Laboratorio

## Grupos musicales

Queremos mostrar información acerca de grupos musicales.

Si estás trabajando con TypeScript habría que crear un interfaz para representar a un grupo musical.

La información de los grupos que queremos mostrar:

Nombre del grupo / cantante / compositor (string).
Año de fundación: cuando se formó el grupo (numero).
Si está en activo (booleano).
Género musical (string).

1. Cada género queremos tenerlo en una variable.

Los grupos que vamos a mostrar:

* The Beatles / 1960 / Activo: true / 🎵 Pop Rock
* Queen / 1970 / Activo: false / 🎸 Rock
* AC DC / 1973 / Activo: true / 🤘 Hard Rock
* Ludwig van Beethoven / 1770 / Activo: false / 🎼 Clásica
* The Rolling Stones / 1962 / Activo: true / 🎸 Rock

2. Queremos mostrar cada grupo por consola, el nombre del grupo de música queremos ponerlo en negrita, con fuente más grande y color de fondo verde.

### 1. Variables:

```javascript

let generoPopRock : string = "🎵 Pop Rock";
let generoRock : string = "🎸 Rock";
let generoHardRock : string = "🤘 Hard Rock";
let generoClasica : string = "🎼 Clásica";

interface MusicBand {
  name: string;
  yearFounded: number;
  isActive: boolean;
  genre: string;
}
```
### 2. Grupos musicales en consola, con estilos CSS:
```javascript
musicBands.forEach((band) => {
  console.log(
    `%c${band.name}`, 
    'font-weight: bold; font-size: 16px; background-color: green; color: white;'
  );
  console.log(`Year Founded: ${band.yearFounded}`);
  console.log(`Active: ${band.isActive}`);
  console.log(`Genre: ${band.genre}`);
});

```

