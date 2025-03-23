import { describe, it, expect } from "vitest";
import { extraerEnlacesImagenes } from "./imagenes.helpers";

describe("extraerEnlacesImagenes", () => {
  it("extrae enlaces de imágenes con comillas dobles", () => {
    const html = `<img src="http://example.com/imagen1.jpg" />`;
    const resultado = extraerEnlacesImagenes(html);
    expect(resultado).toEqual(["http://example.com/imagen1.jpg"]);
  });

  it("extrae múltiples imágenes", () => {
    const html = `
      <img src="http://uno.jpg" />
      <img src="http://dos.png" />
    `;
    const resultado = extraerEnlacesImagenes(html);
    expect(resultado).toEqual(["http://uno.jpg", "http://dos.png"]);
  });

  it("devuelve array vacío si no hay imágenes", () => {
    const html = `<div>sin imágenes</div>`;
    const resultado = extraerEnlacesImagenes(html);
    expect(resultado).toEqual([]);
  });
});
