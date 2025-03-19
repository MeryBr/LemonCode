import { TipoIva, LineaTicket, TicketFinal, ResultadoLineaTicket, ResultadoTotalTicket, TotalPorTipoIva } from "./modelo";
import { calculoLineasTicket } from "./auxiliary_functions/producto.helper";
import { calcularTotalesDeVenta } from "./auxiliary_functions/ventaResumen.helper";
import { obtenerDesgloseIVA } from "./auxiliary_functions/iva_resumen";

export const calcularPrecioConIva = (precio: number, tipoIva: TipoIva): number => {
  const ivaRates: Record<TipoIva, number> = {
    general: 1.21,
    reducido: 1.10,
    superreducidoA: 1.05,
    superreducidoB: 1.04,
    superreducidoC: 1,
    sinIva: 1,
  };
  return Number((precio * ivaRates[tipoIva]).toFixed(2));
};

export const calculaTicket = (lineasTicket: LineaTicket[]): TicketFinal => {
  const lineasCalculadas: ResultadoLineaTicket[] = calculoLineasTicket(lineasTicket);
  const totalCalculado: ResultadoTotalTicket = calcularTotalesDeVenta(lineasCalculadas);
  const desgloseIVA: TotalPorTipoIva[] = obtenerDesgloseIVA(lineasCalculadas);

  return {
    lineas: lineasCalculadas,
    total: totalCalculado,
    desgloseIva: desgloseIVA,
  };
};
