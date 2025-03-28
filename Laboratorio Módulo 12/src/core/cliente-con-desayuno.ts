import { ClienteParticular } from "./cliente-particular";
import { Reserva } from "../model/reserva.model";

export class ClienteConDesayuno extends ClienteParticular {
  constructor(reservas: Reserva[]) {
    super(reservas);
  }

  protected calcularPrecioBase(reserva: Reserva): number {
    const precioBase = super.calcularPrecioBase(reserva);
    const desayuno =
      reserva.desayuno ? reserva.pax * 15 * reserva.noches : 0;
    return precioBase + desayuno;
  }
}
