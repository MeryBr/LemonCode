import { ResultadoLineaTicket, TotalPorTipoIva } from "../models/ticket.js";

export const obtenerDesgloseIVA = (lineas: ResultadoLineaTicket[]): TotalPorTipoIva[] => {
  return lineas.reduce((acc: TotalPorTipoIva[], item) => {
    const iva = item.precioConIva - item.precioSinIva;
    const existingIva = acc.find(i => i.tipoIva === item.tipoIva);
    if (existingIva) {
      existingIva.cuantia += iva;
    } else {
      acc.push({ tipoIva: item.tipoIva, cuantia: iva });
    }
    return acc;
  }, []);
};
