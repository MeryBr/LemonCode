import { LineaTicket } from "../models/linea-ticket.js";


export const aplicarDescuento = (productos: LineaTicket[], descuento: number): number => {
  return productos.reduce((acc, item) => {
    return acc + (item.producto.precio * item.cantidad * descuento);
  }, 0);
};
