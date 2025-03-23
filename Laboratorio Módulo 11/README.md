# Laboratorio Módulo 11 - Expresiones Regulares

Este proyecto forma parte del módulo 11 del bootcamp Lemoncode. Incluye dos funcionalidades separadas:

- ✅ Validador de IBAN
- 🖼️ Extractor de Imágenes desde HTML

## Vista inicial

> Pantalla de entrada donde puedes elegir entre validar un número de cuenta IBAN o extraer imágenes desde código HTML.

![Vista inicial](./assets/JS_11_0.png)

---

## ✅ Apartado IBAN

### Vista general

> El usuario puede introducir un IBAN y ver desglosada su información bancaria.

![Vista IBAN](./assets/JS_11_1.png)

### Descripción

- Limpieza del IBAN (espacios, guiones).
- Validación con `ibantools`.
- División en:
  - País
  - Código de control
  - Código de banco
  - Oficina
  - Número de cuenta
- Detección del banco por código (con fallback a "Banco desconocido").
- Botón de borrar que limpia y oculta el resultado.

### Dificultades

- El listado original de bancos no incluía todos los códigos comunes.
- Se tuvo que extender la lista manualmente con datos reales.
- El diseño del contenedor de resultados se ajustó con estilos personalizados.
- Hubo que gestionar bien la lógica para mostrar/ocultar correctamente el resultado tras validar o borrar.

### Logros

- UX clara y bonita.
- Validación robusta.
- Interfaz adaptable a errores o datos incompletos.
- Botón de borrar con doble funcionalidad: limpia input y oculta resultado.

---

## 🖼️ Apartado Imágenes

### Vista general

> Pegando HTML en el textarea, puedes extraer y renderizar las imágenes automáticamente.

![Vista Imágenes](./assets/JS_11_2.png)

### Descripción

- Extracción de URLs desde etiquetas `<img src="...">` usando Regex.
- Renderizado automático de las imágenes en tarjetas tipo cómic.
- Botón "Borrar todo" que elimina tanto el HTML pegado como el contenido visual.

### Dificultades 

- Manejar diferentes formatos de `<img>` (con comillas dobles, simples, espacios, etc.).
- Ajustar el diseño de las tarjetas para que sean uniformes y vistosas.
- Eliminar correctamente el contenido y dejar la vista limpia al usar el botón "Borrar".

### Logros

- Interfaz divertida y clara.
- Estilo visual cómic para las imágenes.
- Regex robusta para casos simples de `<img>`.


## Test

Se utilizaron tests en Vitest para:

- Validar IBANs válidos e inválidos.
- Limpiar y parsear IBANs.
- Relacionar códigos de banco con nombres.
- Detectar y extraer imágenes correctamente desde HTML.


