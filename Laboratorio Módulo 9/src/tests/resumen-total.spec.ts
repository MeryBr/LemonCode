import { ResultadoLineaTicket, ResultadoTotalTicket } from "../models/ticket.js";

export const calcularTotal = (lineas: ResultadoLineaTicket[]): ResultadoTotalTicket => {
  const totalSinIva = lineas.reduce((total, linea) => total + linea.precioSinIva, 0);
  const totalConIva = lineas.reduce((total, linea) => total + linea.precioConIva, 0);
  const totalIva = totalConIva - totalSinIva;

  return { totalSinIva, totalConIva, totalIva };
};
