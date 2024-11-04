import { Juego } from './model';
import { dameCarta, sumarPuntos, mostrarAlertaPorPuntuacion } from './motor';

export const setupUI = (juego: Juego): void => {
    const partida = juego.getPartida();
    
    const puntosInfo = document.getElementById('points') as HTMLSpanElement;
    const imgCarta = document.getElementById('img-carta') as HTMLImageElement;
    const btnCarta = document.getElementById('btn-carta') as HTMLButtonElement;
    const btnReinicio = document.getElementById('btn-reinicio') as HTMLButtonElement;
    const btnPlantarse = document.getElementById('btn-plantarse') as HTMLButtonElement;
    const btnVerPosibilidades = document.getElementById('btn-ver-posibilidades') as HTMLButtonElement;

    const inicializarJuego = () => {
        Object.assign(partida, juego.inicializarPartida());
        puntosInfo.textContent = partida.puntuacion.toString();
        imgCarta.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg';
        btnReinicio.style.display = 'none';
        btnCarta.style.display = 'block';
        btnPlantarse.style.display = 'block';
        btnVerPosibilidades.style.display = 'none';
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

  btnCarta.addEventListener('click', () => {
    if (partida.juegoActivo) {
      const carta = dameCarta();
      partida.cartasPedidas.push(carta);
      mostrarCarta(carta);
      sumarPuntos(partida, carta);
      puntosInfo.textContent = partida.puntuacion.toString();
      if (partida.puntuacion > 7.5) {
        setTimeout(() => {
          alert('Game Over! Te has pasado de 7.5 puntos.');
          btnCarta.style.display = 'none';
          btnPlantarse.style.display = 'none';
          btnReinicio.style.display = 'block';
        }, 100);
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
    if (!partida.juegoActivo) {
      let posiblesCartas: number[] = [];
      const totalCartas = 12;
      while (posiblesCartas.length < 3) {
        const cartaFutura = dameCarta();
        if (!partida.cartasPedidas.includes(cartaFutura) && !posiblesCartas.includes(cartaFutura)) {
          posiblesCartas.push(cartaFutura);
        }
        if (posiblesCartas.length + partida.cartasPedidas.length >= totalCartas) {
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
  });

  btnReinicio.addEventListener('click', inicializarJuego);
  window.onload = inicializarJuego;
};
