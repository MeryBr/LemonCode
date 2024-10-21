# Proyecto: Turno Actual en Clínica

## Enunciado
Este proyecto consiste en crear una pantalla que muestra el turno actual de una clínica. La idea es que el operario pueda ver fácilmente el turno en grande y tenga botones para navegar entre los turnos, así como un botón para reiniciar el turno a 0.

## Requisitos Implementados

### Básico
1. **Display del Turno**: En la pantalla se muestra el turno actual en un tamaño grande para que sea fácilmente visible.
2. **Navegación entre Turnos**: El operario puede hacer clic en los botones "Anterior" y "Siguiente" para ir cambiando el turno.
3. **Botón de Reset**: Se ha añadido un botón que permite reiniciar el turno a 0 con un solo clic.

### Avanzado
- **Entrada de Turno Personalizado**: Se incluye un campo de texto donde el operario puede ingresar un número de turno específico. 
Si se ingresa un valor válido, el turno se actualizara en pantalla.

### Challenge
- **Formato de Dos Dígitos**: El turno siempre se muestra con dos dígitos. 
Por ejemplo, si el turno es 1, se mostrará como 01.
Esto se logra utilizando la función `padStart(2, '0')` para formatear el número adecuadamente.

## Imagen
![Captura de pantalla](src/img/JS_4.png)