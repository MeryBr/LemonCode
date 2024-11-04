import { Partida } from './model';

export const dameCarta = (): number => {
  const carta = Math.floor(Math.random() * 10) + 1;
  return carta > 7 ? carta + 2 : carta;
};

export const sumarPuntos = (partida: Partida, carta: number): void => {
  if (carta > 7) carta = 0.5;
  partida.puntuacion += carta;
};

export const mostrarAlertaPorPuntuacion = (puntuacion: number): void => {
  if (puntuacion < 4) {
    alert('Has sido muy conservador... 🐢 ¡No tengas miedo de arriesgar un poco!');
  } else if (puntuacion === 5) {
    alert('Te ha entrado el canguelo, ¿eh? 😅 ¡Vamos, atrévete un poco más!');
  } else if (puntuacion === 6 || puntuacion === 7) {
    alert('¡Casi casi! 🎯 ¡Estás a un paso de la gloria!');
  } else if (puntuacion === 7.5) {
    alert('¡Lo has clavado! 🎉 ¡Perfecto, eres imbatible! 👑🥳');
  }
};
