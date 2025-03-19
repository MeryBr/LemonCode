import { LineaTicket } from "../models/linea-ticket";
import { ResultadoLineaTicket } from "../models/ticket";

export const calcularIvaProductos = (lineas: LineaTicket[]): ResultadoLineaTicket[] => {
  return lineas.map(linea => {
    const { nombre, precio, tipoIva } = linea.producto;
    const cantidad = linea.cantidad;
    const precioSinIva = precio * cantidad;
    
    let porcentajeIva = 0;
    if (tipoIva === "general") porcentajeIva = 21;
    else if (tipoIva === "reducido") porcentajeIva = 10;
    else if (tipoIva === "superreducidoA") porcentajeIva = 5;
    else if (tipoIva === "superreducidoB") porcentajeIva = 4;
    else if (tipoIva === "superreducidoC") porcentajeIva = 0;
    else if (tipoIva === "sinIva") porcentajeIva = 0;

    const iva = (precioSinIva * porcentajeIva) / 100;
    const precioConIva = precioSinIva + iva;

    return { nombre, cantidad, precioSinIva, tipoIva, precioConIva };
  });
};
