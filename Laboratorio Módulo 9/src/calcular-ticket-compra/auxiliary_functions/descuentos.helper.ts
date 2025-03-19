import { LineaTicket } from "../modelo";

export const aplicarDescuento = (productos: LineaTicket[]): number => {
    return productos.reduce((acc, item) => {
        const descuento = item.producto.descuento || 0;
        return acc + (item.producto.precio * item.cantidad * descuento);
    }, 0);
};

export const calcularCostoFinal = (productos: LineaTicket[]): number => {
    return productos.reduce((acc, item) => {
        const descuento = item.producto.descuento || 0;
        return acc + ((item.producto.precio * item.cantidad) - (item.producto.precio * item.cantidad * descuento));
    }, 0);
};

export const calcularDescuentoTotal = (productos: LineaTicket[]): number => {
    return productos.reduce((acc, item) => {
        const descuento = item.producto.descuento || 0;
        return acc + (item.producto.precio * item.cantidad * descuento);
    }, 0);
};
