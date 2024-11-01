import { crearPartida, Partida } from './modelo';
import { dameCarta, sumarPuntos, verificarFinDeJuego } from './motor';
import { mostrarPuntuacion, mostrarCarta, mostrarAlertaPorPuntuacion } from './ui';

const puntosInfo = document.getElementById('points') as HTMLSpanElement;
const imgCarta = document.getElementById('img-carta') as HTMLImageElement;
const btnCarta = document.getElementById('btn-carta') as HTMLButtonElement;
const btnReinicio = document.getElementById('btn-reinicio') as HTMLButtonElement;

let partida: Partida = crearPartida();

function inicializarJuego() {
  partida = crearPartida();
  mostrarPuntuacion(partida.puntuacion, puntosInfo);
  imgCarta.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg';
  btnReinicio.style.display = 'none';
  btnCarta.style.display = 'block';
}

btnCarta.addEventListener('click', () => {
  if (partida.juegoActivo) {
    const carta = dameCarta();
    sumarPuntos(partida, carta);
    mostrarCarta(carta, imgCarta);
    mostrarPuntuacion(partida.puntuacion, puntosInfo);

    if (verificarFinDeJuego(partida)) {
      alert('Game Over! Te has pasado de 7.5 puntos.');
      btnCarta.style.display = 'none';
      btnReinicio.style.display = 'block';
    }
  }
});

btnReinicio.addEventListener('click', inicializarJuego);

window.onload = inicializarJuego;
