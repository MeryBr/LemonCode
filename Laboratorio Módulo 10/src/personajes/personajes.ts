import { Personaje } from "./personajes.model";
import { obtenerBusquedaPersonajesAPI } from "./personajes.api";

const crearElementoParrafo = (titulo: string, texto: string): HTMLParagraphElement => {
  const parrafo = document.createElement("p");
  parrafo.innerHTML = `<strong>${titulo}:</strong> ${texto}`;
  return parrafo;
};

const crearElementoImagen = (portada: string, titulo: string): HTMLImageElement => {
  const imagen = document.createElement("img");
  imagen.src = portada;
  imagen.alt = titulo;
  return imagen;
};

const crearContenedorPersonaje = (personaje: Personaje): HTMLDivElement => {
  const elementoPersonaje = document.createElement("div");
  elementoPersonaje.classList.add("personaje-contenedor");

  const imagen = crearElementoImagen(`http://localhost:3000/${personaje.imagen}`, personaje.nombre);
  elementoPersonaje.appendChild(imagen);

  const nombre = crearElementoParrafo("Nombre", personaje.nombre);
  elementoPersonaje.appendChild(nombre);

  const especialidad = crearElementoParrafo("Especialidad", personaje.especialidad);
  elementoPersonaje.appendChild(especialidad);

  const habilidades = crearElementoParrafo("Habilidades", personaje.habilidades.join(", "));
  elementoPersonaje.appendChild(habilidades);

  return elementoPersonaje;
};

const pintarPersonajes = async (termino: string): Promise<void> => {
  const personajes = await obtenerBusquedaPersonajesAPI(termino);
  const listado = document.querySelector("#listado-personajes") as HTMLDivElement | null;

  if (listado) {
    listado.innerHTML = "";
    personajes.forEach((personaje) => {
      const contenedorPersonaje = crearContenedorPersonaje(personaje);
      listado.appendChild(contenedorPersonaje);
    });
  } else {
    throw new Error("No se ha encontrado el contenedor del listado");
  }
};

document.addEventListener("DOMContentLoaded", () => pintarPersonajes(""));

const formulario = document.querySelector("#formulario") as HTMLFormElement | null;
const inputBusqueda = document.querySelector("#name") as HTMLInputElement | null;
const botonReset = document.querySelector(".boton-reset") as HTMLButtonElement | null;

if (formulario && inputBusqueda && botonReset) {
  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const termino = inputBusqueda.value.trim();
    pintarPersonajes(termino);
    botonReset.classList.add("mostrar");  
  });

  botonReset.addEventListener("click", () => {
    inputBusqueda.value = "";
    pintarPersonajes("");
    botonReset.classList.remove("mostrar");  
  });
}
