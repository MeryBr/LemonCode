import { describe, it, expect } from 'vitest';
import { obtenerPuntos } from '../src/motor';

describe("obtenerPuntos", () => {
    it("Debería devolver el valor de la carta si es 7 o menor", () => {
        expect(obtenerPuntos(5)).toBe(5);
        expect(obtenerPuntos(7)).toBe(7);
    });

    it("Debería devolver 0.5 para cartas mayores de 7", () => {
        expect(obtenerPuntos(8)).toBe(0.5);
        expect(obtenerPuntos(10)).toBe(0.5);
    });
});
