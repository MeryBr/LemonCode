import { ResultadoLineaTicket, TotalPorTipoIva, TipoIva } from "../modelo";

export const obtenerDesgloseIVA = (lineas: ResultadoLineaTicket[]): TotalPorTipoIva[] => {
  const desglose: Record<TipoIva, number> = {
    general: 0,
    reducido: 0,
    superreducidoA: 0,
    superreducidoB: 0,
    superreducidoC: 0,
    sinIva: 0,
  };

  lineas.forEach((linea) => {
    desglose[linea.tipoIva] += linea.precioConIva - linea.precioSinIva;
  });

  return Object.entries(desglose).map(([tipoIva, cuantia]) => ({
    tipoIva: tipoIva as TipoIva,
    cuantia: Number(cuantia.toFixed(2)),
  }));
};
