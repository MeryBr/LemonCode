// model.ts
export enum Estado {
  JUGANDO = "JUGANDO",
  HA_GANADO = "HA_GANADO",
  HA_PERDIDO = "HA_PERDIDO",
}

export class Partida {
  estado: Estado;
  puntuacion: number;
  juegoActivo: boolean;
  cartasPedidas: number[];

  constructor() {
      this.estado = Estado.JUGANDO;
      this.puntuacion = 0;
      this.juegoActivo = true;
      this.cartasPedidas = [];
  }
}

export function inicializarPartida(): Partida {
  return new Partida();
}
