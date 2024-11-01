//Este archivo contendrá las reglas y lógica del juego, como la obtención de cartas y el cálculo de puntuación.

import { Partida } from './modelo';

export function dameCarta(): number {
  const carta = Math.floor(Math.random() * 10) + 1;
  return carta > 7 ? carta + 2 : carta; 
}

export function sumarPuntos(partida: Partida, carta: number): void {
  const valor = carta > 7 ? 0.5 : carta;
  partida.puntuacion += valor;
  partida.cartasPedidas.push(carta);
}

export function verificarFinDeJuego(partida: Partida): boolean {
  if (partida.puntuacion > 7.5) {
    partida.juegoActivo = false;
    return true;
  }
  return false;
}
