import { Partida } from './model';

// Definir las URLs de las cartas
const CARTA_URLS: Record<string | number, string> = {
  1: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg',
  2: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg',
  3: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg',
  4: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg',
  5: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg',
  6: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg',
  7: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg',
  10: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg',
  11: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg',
  12: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg',
  'back': 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg',
};

// Función para obtener la URL de una carta según su número
export const obtenerImagenDeCarta = (carta: number): string => {
  return CARTA_URLS[carta] || CARTA_URLS['back'];
};

// Función para generar un número aleatorio entre 1 y 10, ajustado con la regla de sumar 2 si es mayor que 7
export const dameCarta = (): number => {
  const carta = Math.floor(Math.random() * 10) + 1; // Generar número entre 1 y 10
  return (carta > 7) ? carta + 2 : carta;
};

// Función para obtener el valor de la carta
export const obtenerPuntos = (carta: number): number => {
  return carta > 7 ? 0.5 : carta;
};

// Función para sumar puntos a la partida
export const sumarPuntos = (partida: Partida, carta: number): void => {
  const valor = obtenerPuntos(carta);
  partida.puntuacion += valor;

  if (partida.puntuacion > 7.5 && partida.juegoActivo) {
    partida.juegoActivo = false;
    setTimeout(() => {
      alert('Te has pasado de 7.5 puntos. ¡Juego terminado!');
    }, 500); 
  }
};

// Función para mostrar alertas dependiendo de la puntuación
export const mostrarAlertaPorPuntuacion = (puntuacion: number): void => {
  if (puntuacion < 4) {
    alert('Has sido muy conservador... 🐢 ¡No tengas miedo de arriesgar un poco!');
  } else if (puntuacion === 5) {
    alert('Te ha entrado el canguelo, ¿eh? 😅 ¡Vamos, atrévete un poco más!');
  } else if (puntuacion === 6 || puntuacion === 7) {
    alert('¡Casi casi! 🎯 ¡Estás a un paso de la gloria!');
  } else if (puntuacion === 7.5) {
    alert('¡Lo has clavado! 🎉 ¡Perfecto, eres imbatible! 👑🥳');
  }
};

// Función para mostrar el resultado de las posibles cartas si el jugador decide no pedir más
export const mostrarResultadoPosibilidades = (posiblesCartas: number[]): void => {
  if (posiblesCartas.length > 0) {
    let resultado = "Si hubieras pedido más cartas, habrías obtenido:\n";
    posiblesCartas.forEach(carta => {
      const valorCarta = obtenerPuntos(carta);
      resultado += `Carta: ${carta} (Valor: ${valorCarta})\n`;
    });
    alert(resultado);
  } else {
    alert('No hay nuevas cartas disponibles para mostrar.');
  }
};

// Función para generar una lista de cartas aleatorias
export const generarCartasAleatorias = (numCartas: number): number[] => {
  const cartas: number[] = [];
  for (let i = 0; i < numCartas; i++) {
    cartas.push(dameCarta());
  }
  return cartas;
};
