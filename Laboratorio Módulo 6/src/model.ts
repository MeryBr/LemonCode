
export interface Partida {
  cartasPedidas: number[];
  puntuacion: number;
  juegoActivo: boolean;
}

export class Juego {
  private partida: Partida;

  constructor() {
      this.partida = this.inicializarPartida();
  }

  inicializarPartida(): Partida {
      return {
          cartasPedidas: [],
          puntuacion: 0,
          juegoActivo: true
      };
  }

  getPartida(): Partida {
      return this.partida;
  }
}
