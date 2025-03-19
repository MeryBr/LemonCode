import { TipoIva, LineaTicket } from "../modelo";
import { aplicarDescuento } from "./descuentos.helper";

describe("aplicarDescuento", () => {
    it("Debería aplicar el descuento correctamente", () => {
        const productos: LineaTicket[] = [
            {
                producto: {
                    nombre: "Vestido",
                    precio: 100,
                    descuento: 0.20,
                    tipoIva: "general" as TipoIva
                },
                cantidad: 1
            },
            {
                producto: {
                    nombre: "Zapatos",
                    precio: 50,
                    descuento: 0.10,
                    tipoIva: "general" as TipoIva
                },
                cantidad: 2
            }
        ];

        const descuentoEsperado = productos.reduce((acc, item) => {
            const descuento = item.producto.descuento || 0;
            return acc + (item.producto.precio * item.cantidad * descuento);
        }, 0);

        expect(aplicarDescuento(productos)).toBe(descuentoEsperado);
    });
});
