import { ResultadoLineaTicket, ResultadoTotalTicket } from "../modelo";

export const calcularTotalesDeVenta = (lineas: ResultadoLineaTicket[]): ResultadoTotalTicket => {
  const totalSinIva = lineas.reduce((acc, linea) => acc + linea.precioSinIva, 0);
  const totalConIva = lineas.reduce((acc, linea) => acc + linea.precioConIva, 0);
  const totalIva = totalConIva - totalSinIva;

  return {
    totalSinIva: Number(totalSinIva.toFixed(2)),
    totalConIva: Number(totalConIva.toFixed(2)),
    totalIva: Number(totalIva.toFixed(2)),
  };
};
