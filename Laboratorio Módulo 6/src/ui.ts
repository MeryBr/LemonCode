import { Motor } from './motor';

export class UI {
    motor: Motor;
    puntosInfo: HTMLSpanElement;
    imgCarta: HTMLImageElement;
    btnCarta: HTMLButtonElement;
    btnReinicio: HTMLButtonElement;
    btnPlantarse: HTMLButtonElement;
    btnVerPosibilidades: HTMLButtonElement;

    constructor(motor: Motor) {
        this.motor = motor;
        this.puntosInfo = document.getElementById('points') as HTMLSpanElement;
        this.imgCarta = document.getElementById('img-carta') as HTMLImageElement;
        this.btnCarta = document.getElementById('btn-carta') as HTMLButtonElement;
        this.btnReinicio = document.getElementById('btn-reinicio') as HTMLButtonElement;
        this.btnPlantarse = document.getElementById('btn-plantarse') as HTMLButtonElement;
        this.btnVerPosibilidades = document.getElementById('btn-ver-posibilidades') as HTMLButtonElement;

        this.initEventListeners();
        this.inicializarJuego();
    }

    initEventListeners() {
        this.btnCarta.addEventListener('click', () => {
            if (this.motor.juego.juegoActivo) {
                const carta = this.motor.procesarCarta();
                this.mostrarCarta(carta);
                this.motor.verificarFinDelJuego();
            }
        });

        this.btnPlantarse.addEventListener('click', () => {
            if (this.motor.juego.juegoActivo) {
                this.motor.juego.juegoActivo = false;
                this.btnCarta.style.display = 'none';
                this.btnPlantarse.style.display = 'none';
                this.btnVerPosibilidades.style.display = 'block';
                this.motor.mostrarAlertaPorPuntuacion();
                this.btnReinicio.style.display = 'block';
            }
        });

        this.btnReinicio.addEventListener('click', () => this.inicializarJuego());
        this.btnVerPosibilidades.addEventListener('click', () => this.mostrarPosibilidades());
    }

    inicializarJuego() {
        this.motor.juego.reiniciar();
        this.puntosInfo.textContent = this.motor.juego.puntuacion.toString();
        this.imgCarta.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg';
        this.btnReinicio.style.display = 'none';
        this.btnCarta.style.display = 'block';
        this.btnPlantarse.style.display = 'block';
        this.btnVerPosibilidades.style.display = 'none';
    }

    mostrarCarta(carta: number) {
        const cartaImg = this.obtenerImagenDeCarta(carta);
        this.imgCarta.src = cartaImg;
        this.puntosInfo.textContent = this.motor.juego.puntuacion.toString();
    }

    obtenerImagenDeCarta(carta: number): string {
        switch (carta) {
            case 1: return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg';
            case 2: return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg';
            case 3: return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg';
            case 4: return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg';
            case 5: return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg';
            case 6: return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg';
            case 7: return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg';
            case 10: return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg';
            case 11: return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg';
            case 12: return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg';
            default: return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg';
        }
    }

    mostrarPosibilidades() {
        if (!this.motor.juego.juegoActivo) {
            let posiblesCartas: number[] = [];
            const totalCartas = 12; 
            while (posiblesCartas.length < 3) {
                const cartaFutura = this.motor.juego.dameCarta();
                if (!this.motor.juego.cartasPedidas.includes(cartaFutura) && !posiblesCartas.includes(cartaFutura)) {
                    posiblesCartas.push(cartaFutura);
                }

                if (posiblesCartas.length + this.motor.juego.cartasPedidas.length >= totalCartas) {
                    alert('No hay suficientes cartas nuevas disponibles para mostrar.');
                    break;
                }
            }

            if (posiblesCartas.length > 0) {
                let resultado = "Si hubieras pedido más cartas, habrías obtenido:\n";
                posiblesCartas.forEach(carta => {
                    resultado += `Carta: ${carta} (Valor: ${carta > 7 ? 0.5 : carta})\n`;
                });
                alert(resultado);
            } else {
                alert('No hay nuevas cartas disponibles para mostrar.');
            }
        }
    }
}
