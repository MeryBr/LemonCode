import { describe, it, expect } from "vitest";
import { ClienteParticular } from "../cliente-particular";
import { Reserva } from "@model/reserva.model";

const reservas: Reserva[] = [
  { tipoHabitacion: "standard", pax: 1, noches: 2 },
  { tipoHabitacion: "suite", pax: 2, noches: 1 },
];

describe("ClienteParticular", () => {
  it("calcula correctamente el subtotal", () => {
    const cliente = new ClienteParticular(reservas);
    expect(cliente.subtotal).toBe(100 * 2 + (150 + 40) * 1);
  });

  it("calcula correctamente el total con IVA", () => {
    const cliente = new ClienteParticular(reservas);
    const expectedSubtotal = 100 * 2 + (150 + 40) * 1;
    expect(cliente.total).toBeCloseTo(expectedSubtotal * 1.21);
  });
});
