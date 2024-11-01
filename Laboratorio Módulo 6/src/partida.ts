export class Partida {
  private puntuacion: number;

  constructor() {
      this.puntuacion = 0;
  }

  inicializarJuego() {
      this.puntuacion = 0;
      console.log('Juego inicializado.');
  }

  dameCarta(): number {
      const carta = Math.floor(Math.random() * 10) + 1;
      return carta > 7 ? carta + 2 : carta;
  }

  sumarPuntos(carta: number) {
      if (carta > 7) carta = 0.5;
      this.puntuacion += carta;
      console.log(`Puntuación actual: ${this.puntuacion}`);

      if (this.puntuacion > 7.5) {
          alert('Game Over! Te has pasado de 7.5 puntos.');
      }
  }
}