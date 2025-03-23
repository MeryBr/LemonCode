import { Partida, Estado, inicializarPartida } from "../src/model";
import { revisarPartida } from "../src/ui";
import { describe, it, expect, beforeEach } from "vitest";

let partida: Partida;

describe("Pruebas de Partida", () => {
    beforeEach(() => {
        partida = inicializarPartida();  
    });

    it("debería inicializar la partida en estado JUGANDO", () => {
        expect(partida.estado).toBe(Estado.JUGANDO);
        expect(partida.puntuacion).toBe(0);
        expect(partida.juegoActivo).toBe(true);
        expect(partida.cartasPedidas).toEqual([]);
    });
});

describe("revisarPartida", () => {
    beforeEach(() => {
        partida = inicializarPartida();
    });

    it("Debería tener estado 'JUGANDO' al inicio", () => {
        expect(partida.estado).toBe(Estado.JUGANDO);
    });

    it("partida.estado debería ser igual a Estado.JUGANDO si partida.puntuacion es inferior a 7.5", () => {
        partida.puntuacion = 7;
        revisarPartida(partida);
        expect(partida.estado).toBe(Estado.JUGANDO);
    });

    it("partida.estado debería ser igual a Estado.HA_GANADO si partida.puntuacion es igual a 7.5", () => {
        partida.puntuacion = 7.5;
        revisarPartida(partida);
        expect(partida.estado).toBe(Estado.HA_GANADO);
    });

    it("partida.estado debería ser igual a Estado.HA_PERDIDO si partida.puntuacion es superior a 7.5", () => {
        partida.puntuacion = 8;
        revisarPartida(partida);
        expect(partida.estado).toBe(Estado.HA_PERDIDO);
    });
});
