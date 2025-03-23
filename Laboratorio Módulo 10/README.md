# Laboratorio Módulo 10 - Asincronía

Este proyecto es una práctica del módulo 10 centrada en el uso de asincronía con TypeScript. La aplicación permite interactuar con una API local que contiene personajes del cómic Mortadelo y Filemón.

## Objetivos del ejercicio

✔ Mostrar un listado de todos los personajes al cargar la página.  
✔ Permitir al usuario buscar personajes por nombre o parte del nombre mediante un formulario.  
✔ Mostrar los resultados filtrados sin recargar la página.

## Funcionalidades implementadas

- Al cargar la página se muestran todos los personajes disponibles.
- El usuario puede introducir un texto en el campo de búsqueda y pulsar "Buscar" para filtrar por nombre.
- Se muestra dinámicamente el listado de personajes que coinciden con el término.
- Las imágenes de los personajes se cargan desde `/public`.

## Estructura principal

- `/src/index.html` – Contiene el formulario de búsqueda y el contenedor donde se muestran los personajes.
- `/src/style.css` – Estilo personalizado con una tipografía tipo cómic para mantener el espíritu del proyecto.
- `/src/personajes/` – Carpeta donde vive toda la lógica:
  - `personajes.ts` – Renderizado del DOM y gestión de eventos.
  - `personajes.api.ts` – Peticiones a la API (json-server).
  - `personajes.model.ts` – Tipado de los datos con TypeScript.

## Dificultades encontradas y mejoras adicionales

Durante el desarrollo del ejercicio se detectaron ciertos pequeños problemas que fueron resueltos manualmente:

- Dos personajes (`Ofelia` y `Filemón`) aparecían en la carpeta de imágenes (`/public`), pero **no estaban definidos en el archivo `db.json`**, lo que impedía que se mostrasen en el listado.  
  ➤ Se añadieron manualmente en el archivo JSON para que aparecieran correctamente en la aplicación.

Además de resolver estos inconvenientes, se implementaron mejoras para enriquecer la experiencia de usuario:

- Botón **"🔄 Ver Todos"**: permite volver al listado completo tras una búsqueda.
  - Solo aparece después de realizar una búsqueda.
  - Se oculta automáticamente al restaurar la lista completa.

## Vista previa

![Vista previa del ejercicio](./capturas/JS_10.png)
