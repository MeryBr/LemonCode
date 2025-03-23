import { LineaTicket, TicketFinal, ResultadoLineaTicket, ResultadoTotalTicket, TotalPorTipoIva } from "../models/ticket";
import { calcularPrecioConIva, calcularImporteIva } from "../utils/calcularIva";

export const calculaTicket = (lineasTicket: LineaTicket[]): TicketFinal => {
  const lineas: ResultadoLineaTicket[] = lineasTicket.map(({ producto, cantidad }) => {
    const precioSinIva = producto.precio * cantidad;
    const precioConIva = calcularPrecioConIva(precioSinIva, producto.tipoIva);

    return {
      nombre: producto.nombre,
      cantidad,
      precionSinIva: precioSinIva,
      tipoIva: producto.tipoIva,
      precioConIva,
    };
  });

  const totalSinIva = lineas.reduce((acc, { precionSinIva }) => acc + precionSinIva, 0);
  const totalConIva = lineas.reduce((acc, { precioConIva }) => acc + precioConIva, 0);
  const totalIva = totalConIva - totalSinIva;

  const desgloseIva: TotalPorTipoIva[] = lineasTicket.reduce((acc, { producto, cantidad }) => {
    const iva = calcularImporteIva(producto.precio * cantidad, producto.tipoIva);
    const existing = acc.find((item) => item.tipoIva === producto.tipoIva);

    if (existing) {
      existing.cuantia += iva;
    } else {
      acc.push({ tipoIva: producto.tipoIva, cuantia: iva });
    }

    return acc;
  }, [] as TotalPorTipoIva[]);

  return {
    lineas,
    total: {
      totalSinIva,
      totalConIva,
      totalIva,
    },
    desgloseIva,
  };
};
