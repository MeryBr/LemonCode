# Laboratorio Módulo 12 - Clases

Este ejercicio forma parte del módulo 12 y está centrado en la práctica de clases, herencia y reutilización de lógica en TypeScript. El contexto gira en torno a una web de reservas de hotel, donde se deben calcular los importes de distintas reservas en función del tipo de cliente.

## Objetivo

A partir de una lista de reservas con información sobre tipo de habitación, número de personas, noches y desayuno, se implementan distintas clases que permiten obtener el subtotal (sin IVA) y el total (con IVA) de cada caso.
Además, se incorpora una función utilitaria para interactuar con el DOM de forma segura sin hacer uso de aserciones (`as`) ni non-null (`!`).

## Casos implementados

- Cliente Particular:
  - Standard: 100€ / noche
  - Suite: 150€ / noche
  - +40€ por persona adicional por noche
  - IVA: 21%

- Tour Operador:
  - Precio único: 100€ / noche
  - Descuento del 15%
  - IVA: 21%

- Cliente Particular con desayuno:
  - Misma lógica que el cliente particular
  - +15€ por persona y noche si incluye desayuno

## Estructura del proyecto

- `model/`: contiene la interfaz `Reserva`.
- `core/`: incluye las clases con la lógica de negocio.
  - `cliente-particular.ts`
  - `tour-operador.ts`
  - `cliente-con-desayuno.ts`
- `__tests__/`: pruebas unitarias con Vitest.
- `main.ts`: muestra por pantalla los cálculos para cada caso.
- `index.html`: página sencilla para visualizar los resultados.
- `utils/`: contiene funciones auxiliares, como `renderText` para actualizar el DOM de forma segura.
- `vite.config.ts`: configuración de Vite con soporte para alias y checker de TypeScript.
- `tsconfig.json`: configuración estricta de TypeScript.


## Tests

Se han implementado pruebas unitarias con Vitest que cubren los tres escenarios: cliente particular, tour operador y cliente con desayuno. 
Se valida el cálculo de subtotales y totales con distintos datos de entrada.

## Resultado en navegador

Se añade una vista en HTML donde se presentan los importes calculados para cada tipo de cliente.

![Vista previa del ejercicio](./capturas/JS_12.png)


## Mejoras aplicadas en esta versión

- Eliminado el uso de `as HTMLElement` y `!` en accesos al DOM.
- Añadida función `renderText` para evitar errores en tiempo de ejecución.
- Reorganización de lógica específica por clase, evitando mutaciones de clases base.
- Uso de `override` y `readonly` para mayor seguridad en el diseño orientado a objetos.
- Tipado explícito de los precios base usando `Record`.

