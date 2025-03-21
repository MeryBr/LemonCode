import axios from "axios";
import { Personaje } from "./personajes.model";

export const obtenerBusquedaPersonajesAPI = async (termino: string): Promise<Personaje[]> => {
  try {
    const { data } = await axios.get(`http://localhost:3000/personajes?nombre_like=${termino}`);
    return data;
  } catch (error) {
    console.error("Error al obtener los personajes", error);
    throw new Error("Error al obtener los personajes");
  }
};
