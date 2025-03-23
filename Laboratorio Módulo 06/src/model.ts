export interface Partida {
  puntuacion: number;
  cartasPedidas: number[];
  juegoActivo: boolean;
}

export const inicializarPartida = (): Partida => {
  return {
    puntuacion: 0,
    cartasPedidas: [],
    juegoActivo: true,
  };
};
