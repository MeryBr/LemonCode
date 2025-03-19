import { ResultadoLineaTicket, TotalPorTipoIva } from "../models/ticket.js";

export const obtenerDesgloseIVA = (lineas: ResultadoLineaTicket[]): TotalPorTipoIva[] => {
  const desglose: { [key in ResultadoLineaTicket["tipoIva"]]?: number } = {};

  lineas.forEach(linea => {
    const { tipoIva, precioSinIva, precioConIva } = linea;
    const iva = precioConIva - precioSinIva;

    if (!desglose[tipoIva]) desglose[tipoIva] = 0;
    desglose[tipoIva]! += iva;
  });

  return Object.entries(desglose).map(([tipoIva, cuantia]) => ({
    tipoIva: tipoIva as ResultadoLineaTicket["tipoIva"],
    cuantia,
  }));
};
