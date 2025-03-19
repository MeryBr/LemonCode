import { Producto } from "./producto.js";

export interface LineaTicket {
  producto: Producto;
  cantidad: number;
}
