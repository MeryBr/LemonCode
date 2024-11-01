//Este archivo va a contener el modelo de datos que usamos en el juego, como la puntuación y el estado del juego.

export interface Partida {
    puntuacion: number;
    cartasPedidas: number[];
    juegoActivo: boolean;
  }
  
  export function crearPartida(): Partida {
    return {
      puntuacion: 0,
      cartasPedidas: [],
      juegoActivo: true,
    };
  }
  