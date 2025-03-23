import { Partida, inicializarPartida } from './model';

export const esGanador = (partida: Partida): boolean => {
  const puntuacionObjetivo = 7.5;
  return partida.puntuacion === puntuacionObjetivo && partida.juegoActivo;
};

export const reiniciarJuego = (): Partida => {
  return inicializarPartida();
};
