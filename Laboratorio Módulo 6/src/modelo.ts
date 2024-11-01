export class Juego {
    puntuacion: number;
    juegoActivo: boolean;
    cartasPedidas: number[];

    constructor() {
        this.puntuacion = 0;
        this.juegoActivo = true;
        this.cartasPedidas = [];
    }

    dameCarta(): number {
        const carta = Math.floor(Math.random() * 10) + 1;
        return (carta > 7) ? carta + 2 : carta; 
    }

    sumarPuntos(carta: number) {
        if (carta > 7) carta = 0.5; 
        this.puntuacion += carta;
        console.log(`Puntuación actual: ${this.puntuacion}`);
    }

    reiniciar() {
        this.puntuacion = 0;
        this.juegoActivo = true;
        this.cartasPedidas = [];
    }
}
