import { ClienteParticular } from "./cliente-particular";
import { Reserva } from "../model/reserva.model";

export class TourOperador extends ClienteParticular {
  protected readonly descuento = 0.15;

  constructor(reservas: Reserva[]) {
    super(reservas);
  }

  protected override calcularPrecioBase(reserva: Reserva): number {
    const preciosBase = {
      standard: 100,
      suite: 100,
    };

    const precioHabitacion = preciosBase[reserva.tipoHabitacion];
    const extra = reserva.pax > 1 ? (reserva.pax - 1) * 40 : 0;
    return (precioHabitacion + extra) * reserva.noches;
  }

  override get subtotal(): number {
    const base = super.subtotal;
    return base * (1 - this.descuento);
  }
}
