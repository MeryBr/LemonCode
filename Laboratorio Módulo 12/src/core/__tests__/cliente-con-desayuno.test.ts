import { describe, it, expect } from "vitest";
import { ClienteConDesayuno } from "../cliente-con-desayuno";
import { Reserva } from "@model/reserva.model";

const reservas: Reserva[] = [
  { tipoHabitacion: "standard", pax: 1, noches: 2, desayuno: true },
  { tipoHabitacion: "suite", pax: 2, noches: 1, desayuno: false },
];

describe("ClienteConDesayuno", () => {
  it("añade correctamente el desayuno al subtotal", () => {
    const cliente = new ClienteConDesayuno(reservas);
    const base1 = 100 * 2 + 15 * 1 * 2;
    const base2 = (150 + 40) * 1;
    expect(cliente.subtotal).toBe(base1 + base2);
  });

  it("calcula correctamente el total con IVA", () => {
    const cliente = new ClienteConDesayuno(reservas);
    const subtotal = 100 * 2 + 15 * 1 * 2 + (150 + 40) * 1;
    expect(cliente.total).toBeCloseTo(subtotal * 1.21);
  });
});
