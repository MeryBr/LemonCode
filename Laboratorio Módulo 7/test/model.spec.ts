import { describe, it, expect } from 'vitest';
import { inicializarPartida } from '../src/model';

describe("Modelo del juego", () => {
  it("Debería inicializar una nueva partida con puntuación de 0", () => {
    const partida = inicializarPartida();
    expect(partida.puntuacion).toBe(0);
  });

  it("Debería inicializar el juego como activo", () => {
    const partida = inicializarPartida();
    expect(partida.juegoActivo).toBe(true);
  });

  it("Debería inicializar 'cartasPedidas' como un array vacío", () => {
    const partida = inicializarPartida();
    expect(partida.cartasPedidas).toEqual([]);
  });

  it("Debería inicializar la puntuación como un número", () => {
    const partida = inicializarPartida();
    expect(typeof partida.puntuacion).toBe("number");
  });

  it("Debería inicializar 'cartasPedidas' como un array vacío", () => {
    const partida = inicializarPartida();
    expect(Array.isArray(partida.cartasPedidas)).toBe(true);
  });
});
