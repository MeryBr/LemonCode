import { Juego } from './modelo';

export class Motor {
    juego: Juego;

    constructor() {
        this.juego = new Juego();
    }

    procesarCarta() {
        const carta = this.juego.dameCarta();
        this.juego.cartasPedidas.push(carta);
        this.juego.sumarPuntos(carta);
        return carta;
    }

    verificarFinDelJuego(): boolean {
        if (this.juego.puntuacion > 7.5) {
            alert('Game Over! Te has pasado de 7.5 puntos.');
            this.juego.juegoActivo = false;
            return true;
        }
        return false;
    }

    mostrarAlertaPorPuntuacion() {
        const puntuacion = this.juego.puntuacion;
        if (puntuacion < 4) {
            alert('Has sido muy conservador... 🐢 ¡No tengas miedo de arriesgar un poco!');
        } else if (puntuacion === 5) {
            alert('Te ha entrado el canguelo, ¿eh? 😅 ¡Vamos, atrévete un poco más!');
        } else if (puntuacion === 6 || puntuacion === 7) {
            alert('¡Casi casi! 🎯 ¡Estás a un paso de la gloria!');
        } else if (puntuacion === 7.5) {
            alert('¡Lo has clavado! 🎉 ¡Perfecto, eres imbatible! 👑🥳');
        }
    }
}
