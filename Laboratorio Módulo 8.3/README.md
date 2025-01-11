# Laboratorio Módulo 8.3 - Aplicación de Memoria

Este repositorio contiene la implementación de un juego clásico de las parejas, desarrollado en JavaScript. El objetivo es que el usuario pueda voltear cartas para emparejar imágenes hasta completar el juego. A continuación se describen las pruebas de concepto implementadas y los avances realizados.

## Introducción

En este juego, el usuario verá 12 cartas boca abajo. Deberá hacer clic en ellas para revelarlas. Si las cartas coinciden, se quedarán boca arriba, y si no, se volverán a colocar boca abajo. El juego termina cuando el usuario haya emparejado todas las cartas.

## Pruebas de Concepto

### **Prueba de Concepto 1 - Barajar las cartas**

En esta fase, se implementó la lógica para barajar las cartas, garantizando que cada partida sea única y que las cartas no aparezcan siempre en el mismo orden.

### **Prueba de Concepto 2 - Mostrar imagen y voltear la carta**

En este paso, se implementó la funcionalidad que permite al usuario hacer clic en una carta para revelar su imagen. Esta función simula el volteo de la carta al mostrar su contenido.

### **Prueba de Concepto 3 - Mostrar un Grid de cartas**

Se creó un diseño en el que las cartas se muestran en una rejilla, utilizando CSS Grid para organizar las cartas en una estructura de 4x3.

### **Prueba de Concepto 4 - Mostrar segunda imagen y voltear las dos cartas**

Aquí se implementó la lógica para mostrar dos cartas al hacer clic en ellas, y se comprobó si las dos cartas son una pareja. Si son iguales, permanecen boca arriba; si no, se colocan nuevamente boca abajo.

### **Prueba de Concepto 5 - Mapear el DIV que contiene la carta con la posición del array de las cartas**

En este paso, se mapeó cada carta del array con su correspondiente `div`, permitiendo identificar la carta seleccionada por el usuario y facilitar el proceso de comparación de las cartas.

## Implementación Final

### **Modelo**

En el modelo se definen las cartas y su estado, como si están volteadas o si han sido encontradas. También se manejan las colecciones de cartas duplicadas para garantizar que haya dos cartas iguales por cada imagen.

### **Motor**

El motor es el responsable de la lógica del juego. Incluye funciones para voltear las cartas, comparar si son una pareja, y verificar si la partida ha sido completada. Además, gestiona el estado de la partida, cambiando entre los distintos estados como "Partida no iniciada", "Una carta levantada", y "Partida completa".

### **UI (Interfaz de Usuario)**

En la interfaz, se gestionan los clics sobre las cartas. Cuando el usuario hace clic, se valida si la carta puede ser volteada. Al hacer clic en la segunda carta, el juego compara las dos cartas seleccionadas y las coloca boca arriba si son una pareja. Si no lo son, las vuelve a colocar boca abajo después de un pequeño retraso.

## Apartados Opcionales Implementados

- **Mostrar cuántos intentos lleva el usuario**: Se ha agregado un contador para registrar el número de intentos realizados durante la partida.
- **Animación al hacer clic en una carta**: Se implementó una animación que mejora la experiencia visual al voltear las cartas.
- **Efecto hover**: Las cartas tienen un efecto hover cuando el usuario pasa el ratón sobre ellas.
- **Mensaje si el usuario intenta hacer clic en una carta ya volteada**: Se muestra un mensaje si el usuario intenta voltear una carta que ya ha sido volteada anteriormente.

## Diseño Responsivo

El diseño es completamente adaptable a diferentes tamaños de pantalla. Las cartas se organizan utilizando CSS Grid, lo que permite que el juego sea jugado cómodamente tanto en dispositivos móviles como en pantallas de escritorio.

## Imagen
![Captura de pantalla](src/content/images/JS_8_3.png)
---