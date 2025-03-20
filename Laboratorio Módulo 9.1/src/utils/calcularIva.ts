import { IVAS, TipoIva } from "../models/tiposIva";

export const calcularPrecioConIva = (precio: number, tipoIva: TipoIva): number => {
  return parseFloat((precio * (1 + IVAS[tipoIva] / 100)).toFixed(2));
};

export const calcularImporteIva = (precio: number, tipoIva: TipoIva): number => {
  return parseFloat(((precio * IVAS[tipoIva]) / 100).toFixed(2));
};
