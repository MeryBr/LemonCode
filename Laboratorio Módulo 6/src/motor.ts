import { Partida } from './model';

export const dameCarta = (): number => {
  const carta = Math.floor(Math.random() * 10) + 1;
  return (carta > 7) ? carta + 2 : carta;
};

export const sumarPuntos = (partida: Partida, carta: number): void => {
  if (carta > 7) carta = 0.5;
  partida.puntuacion += carta;

  if (partida.puntuacion > 7.5 && partida.juegoActivo) {
    partida.juegoActivo = false;
    setTimeout(() => {
      alert('Te has pasado de 7.5 puntos. ¡Juego terminado!');
    }, 500); 
  }
};

export const obtenerPuntos = (carta: number): number => {
  return carta > 7 ? 0.5 : carta; 
};

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

export const generarCartasAleatorias = (numCartas: number): number[] => {
  const cartas: number[] = [];
  for (let i = 0; i < numCartas; i++) {
    cartas.push(dameCarta());
  }
  return cartas;
};
