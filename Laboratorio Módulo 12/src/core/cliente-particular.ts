import { Reserva } from "../model/reserva.model";

type TipoHabitacion = keyof ClienteParticular["preciosBase"];

export class ClienteParticular {
  protected reservas: Reserva[];
  protected readonly IVA = 0.21;
  protected readonly preciosBase: Record<"standard" | "suite", number> = {
    standard: 100,
    suite: 150,
  };

  constructor(reservas: Reserva[]) {
    this.reservas = reservas;
  }

  protected calcularPrecioBase(reserva: Reserva): number {
    const precioHabitacion = this.preciosBase[reserva.tipoHabitacion as TipoHabitacion];
    const extra = reserva.pax > 1 ? (reserva.pax - 1) * 40 : 0;
    return (precioHabitacion + extra) * reserva.noches;
  }

  get subtotal(): number {
    return this.reservas.reduce(
      (acc, reserva) => acc + this.calcularPrecioBase(reserva),
      0
    );
  }

  get total(): number {
    return this.subtotal * (1 + this.IVA);
  }
}
