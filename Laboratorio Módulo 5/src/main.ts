let puntuacion = 0;
let juegoActivo = true;
let cartasPedidas: number[] = [];

const puntosInfo = document.getElementById('points') as HTMLSpanElement;
const imgCarta = document.getElementById('img-carta') as HTMLImageElement;
const btnCarta = document.getElementById('btn-carta') as HTMLButtonElement;
const btnReinicio = document.getElementById('btn-reinicio') as HTMLButtonElement;
const btnPlantarse = document.getElementById('btn-plantarse') as HTMLButtonElement;
const btnVerPosibilidades = document.getElementById('btn-ver-posibilidades') as HTMLButtonElement;

if (
  puntosInfo !== null && puntosInfo instanceof HTMLSpanElement &&
  imgCarta !== null && imgCarta instanceof HTMLImageElement &&
  btnCarta !== null && btnCarta instanceof HTMLButtonElement &&
  btnReinicio !== null && btnReinicio instanceof HTMLButtonElement &&
  btnPlantarse !== null && btnPlantarse instanceof HTMLButtonElement &&
  btnVerPosibilidades !== null && btnVerPosibilidades instanceof HTMLButtonElement
) {
  function inicializarJuego() {
    puntuacion = 0;
    juegoActivo = true;
    cartasPedidas = [];
    puntosInfo.textContent = puntuacion.toString();
    imgCarta.src = obtenerImagenDeCarta(0); // Muestra la carta de fondo
    btnReinicio.style.display = 'none';
    btnCarta.style.display = 'block';
    btnPlantarse.style.display = 'block';
    btnVerPosibilidades.style.display = 'none';
  }

  function dameCarta(): number {
    const carta = Math.floor(Math.random() * 10) + 1;
    return (carta > 7) ? carta + 2 : carta;
  }

  function mostrarCarta(carta: number) {
    imgCarta.src = obtenerImagenDeCarta(carta);
  }

  function obtenerImagenDeCarta(carta: number): string {
    const cartas: { [key: number]: string } = {
      1: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg',
      2: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg',
      3: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg',
      4: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg',
      5: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg',
      6: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg',
      7: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg',
      10: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg',
      11: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg',
      12: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg'
    };
    return cartas[carta] || 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg';
  }

  function obtenerPuntos(carta: number): number {
    return (carta > 7) ? 0.5 : carta;
  }

  function sumarPuntos(carta: number) {
    const puntosCarta = obtenerPuntos(carta);
    puntuacion += puntosCarta;
    puntosInfo.textContent = puntuacion.toString();
  }

  function verificarPuntuacion() {
    if (puntuacion > 7.5) {
      setTimeout(() => {
        alert('Game Over! Te has pasado de 7.5 puntos.');
        finalizarJuego();
      }, 100);
    }
  }

  function finalizarJuego() {
    btnCarta.style.display = 'none';
    btnPlantarse.style.display = 'none';
    btnReinicio.style.display = 'block';
  }

  function mostrarAlertaPorPuntuacion(puntuacion: number) {
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

  function verPosibilidades() {
    if (!juegoActivo) {
      let posiblesCartas: number[] = [];
      const totalCartas = 12;
      while (posiblesCartas.length < 3) {
        const cartaFutura = dameCarta();
        if (!cartasPedidas.includes(cartaFutura) && !posiblesCartas.includes(cartaFutura)) {
          posiblesCartas.push(cartaFutura);
        }
        if (posiblesCartas.length + cartasPedidas.length >= totalCartas) {
          alert('No hay suficientes cartas nuevas disponibles para mostrar.');
          break;
        }
      }
      mostrarResultadoPosibilidades(posiblesCartas);
    }
  }

  function mostrarResultadoPosibilidades(posiblesCartas: number[]) {
    if (posiblesCartas.length > 0) {
      let resultado = "Si hubieras pedido más cartas, habrías obtenido:\n";
      posiblesCartas.forEach(carta => {
        const valorCarta = obtenerPuntos(carta);
        resultado += `Carta: ${carta} (Valor: ${valorCarta})\n`;
      });
      alert(resultado);
    } else {
      alert('No hay nuevas cartas disponibles para mostrar.');
    }
  }

  btnCarta.addEventListener('click', () => {
    if (juegoActivo) {
      const carta = dameCarta();
      cartasPedidas.push(carta);
      mostrarCarta(carta);
      sumarPuntos(carta);
      verificarPuntuacion();
    }
  });

  btnPlantarse.addEventListener('click', () => {
    if (juegoActivo) {
      juegoActivo = false;
      btnCarta.style.display = 'none';
      btnPlantarse.style.display = 'none';
      btnVerPosibilidades.style.display = 'block';
      mostrarAlertaPorPuntuacion(puntuacion);
      btnReinicio.style.display = 'block';
    }
  });

  btnVerPosibilidades.addEventListener('click', verPosibilidades);
  btnReinicio.addEventListener('click', inicializarJuego);
  window.onload = inicializarJuego;
}
