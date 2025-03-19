import { calcularIvaProductos } from "../auxiliary_functions/calculo-iva-productos.js";

describe("calcularPrecioConIva", () => {
  it("Calcula correctamente el IVA", () => {
    expect(calcularPrecioConIva(100, "general")).toBe(121);
    expect(calcularPrecioConIva(100, "reducido")).toBe(110);
    expect(calcularPrecioConIva(100, "superreducidoA")).toBe(105);
    expect(calcularPrecioConIva(100, "superreducidoB")).toBe(104);
    expect(calcularPrecioConIva(100, "superreducidoC")).toBe(100);
  });
});
