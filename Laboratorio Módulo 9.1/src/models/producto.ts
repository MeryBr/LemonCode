import { TipoIva } from "./tiposIva";

export interface Producto {
  nombre: string;
  precio: number;
  tipoIva: TipoIva;
}
