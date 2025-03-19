import { LineaTicket, ResultadoLineaTicket } from "../modelo";
import { calculoLineasTicket } from "./producto.helper";


describe("calculoLineasTicket", () => {
    it("Debería devolver un objeto de ResultadoLineaTicket tras recibir los productos en formato LineaTicket", () => {
        const productosTest: LineaTicket[] = [
            {
                producto: {
                    nombre: "Leche",
                    precio: 1.2,
                    descuento: 0,
                    tipoIva: "general",
                },
                cantidad: 3,
            },
            {
                producto: {
                    nombre: "Pan",
                    precio: 0.8,
                    descuento: 0,
                    tipoIva: "general",
                },
                cantidad: 2,
            },
            {
                producto: {
                    nombre: "Huevos",
                    precio: 2.5,
                    descuento: 0,
                    tipoIva: "reducido",
                },
                cantidad: 1,
            }
        ];

        const resultadoLinea: ResultadoLineaTicket[] = [
            {
                nombre: "Leche",
                cantidad: 3,
                precioSinIva: 3.6,
                tipoIva: "general",
                precioConIva: parseFloat((3.6 * 1.21).toFixed(2)),
                precio: 1.2
            },
            {
                nombre: "Pan",
                cantidad: 2,
                precioSinIva: 1.6,
                tipoIva: "general",
                precioConIva: parseFloat((1.6 * 1.21).toFixed(2)),
                precio: 0.8
            },
            {
                nombre: "Huevos",
                cantidad: 1,
                precioSinIva: 2.5,
                tipoIva: "reducido",
                precioConIva: parseFloat((2.5 * 1.10).toFixed(2)),
                precio: 2.5
            }
        ];

        expect(calculoLineasTicket(productosTest)).toStrictEqual(resultadoLinea);
    });
});
