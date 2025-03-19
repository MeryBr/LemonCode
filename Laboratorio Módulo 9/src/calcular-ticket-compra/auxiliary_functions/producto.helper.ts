import { LineaTicket, ResultadoLineaTicket } from "../modelo";
import { calcularPrecioConIva } from "../motor";

export const calculoLineasTicket = (lineas: LineaTicket[]): ResultadoLineaTicket[] => {
  return lineas.map((linea) => ({
    nombre: linea.producto.nombre,
    cantidad: linea.cantidad,
    precioSinIva: Number((linea.producto.precio * linea.cantidad).toFixed(2)),
    tipoIva: linea.producto.tipoIva,
    precioConIva: Number(
      (calcularPrecioConIva(linea.producto.precio, linea.producto.tipoIva) * linea.cantidad).toFixed(2)
    ),
  }));
};
