import { describe, it, expect, vi } from "vitest";
import axios from "axios";
import { obtenerBusquedaPersonajesAPI } from "./personajes.api";
import { Personaje } from "./personajes.model";

vi.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("obtenerBusquedaPersonajesAPI", () => {
  it("devuelve personajes correctamente", async () => {
    const mockPersonajes: Personaje[] = [
      {
        id: "1",
        nombre: "Mortadelo",
        apodo: "Mortadelo",
        especialidad: "Disfraces",
        habilidades: ["Camuflaje"],
        amigo: "Filemón",
        imagen: "mortadelo.webp",
      },
    ];

    mockedAxios.get.mockResolvedValue({ data: mockPersonajes });

    const result = await obtenerBusquedaPersonajesAPI("Mortadelo");

    expect(result).toEqual(mockPersonajes);
  });

  it("lanza un error si falla la petición", async () => {
    mockedAxios.get.mockRejectedValue(new Error("API caída"));

    await expect(obtenerBusquedaPersonajesAPI("Error")).rejects.toThrow(
      "Error al obtener los personajes"
    );
  });
});
