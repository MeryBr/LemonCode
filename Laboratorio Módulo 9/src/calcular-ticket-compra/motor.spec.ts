import { calcularPrecioConIva, calculoDiferenciaIVA } from "./motor";
import { TipoIva } from "./modelo";

describe("calcularPrecioConIva", () => {
    const tipoIvaGeneral: TipoIva = "general"; // 21%
    const tipoIvaReducido: TipoIva = "reducido"; // 10%
    const tipoIvaSuperreducidoA: TipoIva = "superreducidoA"; // 5%
    const tipoIvaSuperreducidoB: TipoIva = "superreducidoB"; // 4%
    const tipoIvaSuperreducidoC: TipoIva = "superreducidoC"; // 0%
    const tipoIvaSinIva: TipoIva = "sinIva"; // 0%

    it.each([
        [20, tipoIvaGeneral, 24.2], // 21% IVA
        [20, tipoIvaReducido, 22], // 10% IVA
        [20, tipoIvaSuperreducidoA, 21], // 5% IVA
        [20, tipoIvaSuperreducidoB, 20.8], // 4% IVA
        [20, tipoIvaSuperreducidoC, 20], // 0% IVA
        [20, tipoIvaSinIva, 20], // Sin IVA
    ])
    ("Con un precio de %s y el tipo IVA %s se espera el valor con IVA %s", (precio, tipoIva, resultado) => {
        expect(calcularPrecioConIva(precio, tipoIva)).toBe(resultado);
    });
});

describe("calculoDiferenciaIVA", () => {
    it.each([
        [24.2, 20, 4.2], // 21% IVA
        [22, 20, 2], // 10% IVA
        [21, 20, 1], // 5% IVA
        [20.8, 20, 0.8], // 4% IVA
        [20, 20, 0], // 0% IVA
    ])
    ("Con un precio con IVA de %s y sin IVA de %s, la diferencia debe ser %s", (precioConIva, precioSinIva, resultado) => {
        expect(calculoDiferenciaIVA(precioConIva, precioSinIva)).toBe(resultado);
    });
});
