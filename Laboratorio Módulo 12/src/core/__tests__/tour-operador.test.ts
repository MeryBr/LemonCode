import { describe, it, expect } from "vitest";
import { TourOperador } from "../tour-operador";
import { Reserva } from "@model/reserva.model";

const reservas: Reserva[] = [
  { tipoHabitacion: "standard", pax: 2, noches: 2 },
  { tipoHabitacion: "suite", pax: 1, noches: 1 },
];

describe("TourOperador", () => {
  it("usa precio fijo de 100€ por habitación", () => {
    const cliente = new TourOperador(reservas);
    // (100 + 40) * 2 + 100 * 1
    expect(cliente.subtotal).toBe((140 * 2 + 100) * 0.85);
  });

  it("calcula correctamente el total con IVA", () => {
    const cliente = new TourOperador(reservas);
    const bruto = (140 * 2 + 100) * 0.85;
    expect(cliente.total).toBeCloseTo(bruto * 1.21);
  });
});
