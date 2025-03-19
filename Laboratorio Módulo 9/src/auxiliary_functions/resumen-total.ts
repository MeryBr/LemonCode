import { ResultadoLineaTicket, ResultadoTotalTicket } from "../models/ticket.js";

export const calcularTotales = (lineas: ResultadoLineaTicket[]): ResultadoTotalTicket => {
  const totalSinIva = lineas.reduce((acc, item) => acc + item.precioSinIva, 0);
  const totalConIva = lineas.reduce((acc, item) => acc + item.precioConIva, 0);
  return {
    totalSinIva,
    totalConIva,
    totalIva: totalConIva - totalSinIva
  };
};
