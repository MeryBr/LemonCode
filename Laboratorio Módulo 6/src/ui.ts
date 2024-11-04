import { Partida, inicializarPartida } from './model';
import { dameCarta, sumarPuntos, mostrarAlertaPorPuntuacion, mostrarResultadoPosibilidades, generarCartasAleatorias } from './motor';


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
  const cartaImg = obtenerImagenDeCarta(carta);
  imgCarta.src = cartaImg;
};

const obtenerImagenDeCarta = (carta: number): string => {
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
};

export const configurarUI = (partida: Partida) => {
  if (puntosInfo && imgCarta && btnCarta && btnReinicio && btnPlantarse && btnVerPosibilidades) {
    const inicializarJuego = () => {
      partida = inicializarPartida();
      actualizarUI(partida.puntuacion);
      imgCarta.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg';
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
