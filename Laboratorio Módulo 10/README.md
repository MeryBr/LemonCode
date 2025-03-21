# Laboratorio Módulo 10 - Asincronía

Este proyecto es una práctica del módulo 10 centrada en el uso de asincronía con TypeScript. La aplicación permite interactuar con una API local que contiene personajes del cómic Mortadelo y Filemón.

---

## Objetivos del ejercicio

✔ Mostrar un listado de todos los personajes al cargar la página.  
✔ Permitir al usuario buscar personajes por nombre o parte del nombre mediante un formulario.  
✔ Mostrar los resultados filtrados sin recargar la página.

---

## Funcionalidades implementadas

- Al cargar la página se muestran todos los personajes disponibles.
- El usuario puede introducir un texto en el campo de búsqueda y pulsar "Buscar" para filtrar por nombre.
- Se muestra dinámicamente el listado de personajes que coinciden con el término.
- Las imágenes de los personajes se cargan desde `/public`.

---

## Funcionalidad añadida (extra)

- Se ha añadido un botón adicional: **"🔄 Ver Todos"** que permite volver al listado completo tras una búsqueda.
- Este botón aparece únicamente después de realizar una búsqueda y desaparece al restaurar el listado.

---

## Estructura principal

- `/src/index.html` – Contiene el formulario de búsqueda y el contenedor donde se muestran los personajes.
- `/src/style.css` – Estilo personalizado con una tipografía tipo cómic para mantener el espíritu del proyecto.
- `/src/personajes/` – Carpeta donde vive toda la lógica:
  - `personajes.ts` – Renderizado del DOM y gestión de eventos.
  - `personajes.api.ts` – Peticiones a la API (json-server).
  - `personajes.model.ts` – Tipado de los datos con TypeScript.

---

## 

**PS:** Dos personajes (Ofelia y Filemón) estaban en las imágenes `/public`, pero no contaban con su entrada correspondiente en el archivo `db.json`.  
Se añadieron manualmente para completar la base de datos.

---

