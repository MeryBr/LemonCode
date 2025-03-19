import { LineaTicket } from "../models/linea-ticket.js";

export const aplicarDescuento = (lineas: LineaTicket[], porcentaje: number): number => {
  return lineas.reduce((total, linea) => {
    return total + (linea.producto.precio * linea.cantidad * (porcentaje / 100));
  }, 0);
};
