# Proyecto: Siete y Media - Refactorización

## Enunciado
En este laboratorio, refactorizamos el juego "Siete y Media" para hacerlo más mantenible y reutilizable, separando las responsabilidades en diferentes módulos.

## Requisitos Implementados

### 1. Modelo
- Se movió la clase `Partida` a `model.ts`, donde se inicializa la puntuación y se gestionan los métodos del juego.

### 2. Motor
- La lógica del juego ahora está en `motor.ts`. Se implementó `dameCarta`, que genera cartas aleatorias y controla los puntos.

### 3. UI
- La interfaz de usuario se organiza en `ui.ts`. Las funciones `muestraPuntuacion` y `mostrarCarta` actualizan la UI separando la presentación de la lógica del juego.

### 4. Limpieza en `main.ts`
- Se eliminaron definiciones en `main.ts`, que ahora solo gestiona la interacción del usuario y el flujo del juego.

### 5. Objeto Partida (Opcional)
- Se creó un objeto `Partida` con un método para inicializar nuevas partidas, mejorando la estructura y reutilización del código.
