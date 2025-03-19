import { Partida, Estado, inicializarPartida } from './model'; 
import { dameCarta, sumarPuntos, mostrarAlertaPorPuntuacion, mostrarResultadoPosibilidades, generarCartasAleatorias, obtenerImagenDeCarta } from './motor';


export function revisarPartida(partida: Partida) {
    if (partida.puntuacion < 7.5) {
        partida.estado = Estado.JUGANDO;
    } else if (partida.puntuacion === 7.5) {
        partida.estado = Estado.HA_GANADO;
    } else {
        partida.estado = Estado.HA_PERDIDO;
    }
}

const puntosInfo = document.getElementById('points') as HTMLSpanElement;
const imgCarta = document.getElementById('img-carta') as HTMLImageElement;
const btnCarta = document.getElementById('btn-carta') as HTMLButtonElement;
const btnReinicio = document.getElementById('btn-reinicio') as HTMLButtonElement;
const btnPlantarse = document.getElementById('btn-plantarse') as HTMLButtonElement;
const btnVerPosibilidades = document.getElementById('btn-ver-posibilidades') as HTMLButtonElement;

const actualizarUI = (puntuacion: number) => {
  puntosInfo.textContent = puntuacion.toString();
};

const mostrarCarta = (carta: number) => {
  imgCarta.src = obtenerImagenDeCarta(carta);
};

export const configurarUI = (partida: Partida) => {
  if (puntosInfo && imgCarta && btnCarta && btnReinicio && btnPlantarse && btnVerPosibilidades) {
    const inicializarJuego = () => {
      partida = inicializarPartida();
      actualizarUI(partida.puntuacion);
      imgCarta.src = obtenerImagenDeCarta(-1); 
      btnReinicio.style.display = 'none';
      btnCarta.style.display = 'block';
      btnPlantarse.style.display = 'block';
      btnVerPosibilidades.style.display = 'none';
    };

    btnCarta.addEventListener('click', () => {
      if (partida.juegoActivo) {
        const carta = dameCarta();
        partida.cartasPedidas.push(carta);
        mostrarCarta(carta);
        sumarPuntos(partida, carta);
        actualizarUI(partida.puntuacion);

        if (!partida.juegoActivo) {
          btnCarta.style.display = 'none';
          btnPlantarse.style.display = 'none';
          btnReinicio.style.display = 'block';
        }
      }
    });

    btnPlantarse.addEventListener('click', () => {
      if (partida.juegoActivo) {
        partida.juegoActivo = false;
        btnCarta.style.display = 'none';
        btnPlantarse.style.display = 'none';
        btnVerPosibilidades.style.display = 'block';
        mostrarAlertaPorPuntuacion(partida.puntuacion);
        btnReinicio.style.display = 'block';
      }
    });

    btnVerPosibilidades.addEventListener('click', () => {
      const posiblesCartas = generarCartasAleatorias(3); 
      mostrarResultadoPosibilidades(posiblesCartas);
    });

    btnReinicio.addEventListener('click', inicializarJuego);
    window.onload = inicializarJuego;
  }
};
