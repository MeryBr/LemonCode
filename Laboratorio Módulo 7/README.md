# Proyecto de Juego de Cartas

Este proyecto implementa un juego de cartas y contiene pruebas unitarias realizadas con Vitest para verificar su funcionalidad. A continuación, se detallan los apartados obligatorios y opcionales cumplidos en el desarrollo del proyecto.

## Apartados Obligatorios

### 1. Identificación de funciones que determinan si un jugador ha ganado

- **Función principal**: La función `revisarPartida` es la que determina si un jugador ha ganado, ha perdido o sigue jugando, dependiendo de su puntuación:
  - Si la puntuación es **menor a 7.5**, el estado será `JUGANDO`.
  - Si la puntuación es **exactamente 7.5**, el estado será `HA_GANADO`.
  - Si la puntuación es **mayor a 7.5**, el estado será `HA_PERDIDO`.

### 2. Creación de pruebas unitarias con Vitest

- **Pruebas realizadas**: Se crearon pruebas unitarias para la función `revisarPartida`, comprobando que el estado del jugador cambia correctamente dependiendo de su puntuación.
  - Se verificó que el estado se actualiza correctamente en las tres situaciones mencionadas (`JUGANDO`, `HA_GANADO`, `HA_PERDIDO`).

### 3. Importación de los módulos necesarios

- **Módulos importados**:
  - `revisarPartida`, `Partida`, y `Estado` fueron importados y utilizados correctamente en las pruebas unitarias.

## Apartados Opcionales

### 1. Función que genera un número aleatorio entre 0 y 10 y suma 2 si es mayor que 7

- **Función implementada**: La función `dameCarta` genera un número aleatorio entre 0 y 10. Si el número generado es mayor que 7, suma 2 al resultado final.
- **Pruebas unitarias**: Se implementaron pruebas unitarias para verificar que la función se comporta correctamente, asegurándose de que la suma de 2 solo ocurra cuando el número sea mayor que 7.

### 2. Función que devuelve el valor de una carta

- **Función implementada**: La función `obtenerPuntos` devuelve el valor de una carta según su número:
  - Si el número de la carta es mayor a 7, devuelve `0.5`.
  - Si el número es menor o igual a 7, devuelve el valor de la carta directamente.
- **Pruebas unitarias**: Se crearon pruebas para verificar que la función devuelve los valores correctos para las diferentes situaciones.
