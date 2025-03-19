import { ResultadoLineaTicket, TotalPorTipoIva } from "../modelo";
import { obtenerDesgloseIVA } from "./iva_resumen";

describe("obtenerDesgloseIVA", () => {
    it("Debería devolver el desglose de IVA correctamente tras recibir una lista de productos básicos", () => {
        const productosDePrueba: ResultadoLineaTicket[] = [
            {
                nombre: "Leche 1L",
                cantidad: 2,
                precioSinIva: 0.75,
                tipoIva: "general",
                precioConIva: 0.90,
                precio: 0.75
            },
            {
                nombre: "Pan Baguette",
                cantidad: 1,
                precioSinIva: 1.00,
                tipoIva: "general",
                precioConIva: 1.20,
                precio: 1.00
            }
        ];

        const desgloseEsperado: TotalPorTipoIva[] = [
            { tipoIva: "general", cuantia: 0.30 }
        ];

        expect(obtenerDesgloseIVA(productosDePrueba)).toStrictEqual(desgloseEsperado);
    });
});
