import { extraerEnlacesImagenes } from "./imagenes.helpers";

document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.querySelector("textarea") as HTMLTextAreaElement;
  const botonExtraer = document.querySelector("#extraer") as HTMLButtonElement;
  const botonBorrar = document.querySelector("#borrar") as HTMLButtonElement;
  const resultado = document.querySelector("#resultado") as HTMLDivElement;

  botonExtraer.addEventListener("click", () => {
    const texto = textarea.value.trim();
    resultado.innerHTML = "";

    if (!texto) {
      resultado.innerHTML = "⚠️ Introduce HTML para extraer imágenes.";
      return;
    }

    const imagenes = extraerEnlacesImagenes(texto);

    if (imagenes.length === 0) {
      resultado.innerHTML = "No se encontraron imágenes.";
      return;
    }

    imagenes.forEach((url) => {
      const contenedor = document.createElement("div");
      contenedor.classList.add("tarjeta-imagen");
    
      const img = document.createElement("img");
      img.src = url;
      img.alt = "Imagen extraída";
    
      contenedor.appendChild(img);
      resultado.appendChild(contenedor);
    });
    
    
  });

  botonBorrar.addEventListener("click", () => {
    textarea.value = "";
    resultado.innerHTML = "";
  });
});
