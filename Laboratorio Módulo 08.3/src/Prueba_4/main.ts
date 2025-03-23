console.log("Prueba de Concepto 4");

const cambiarImagenCarta1 = (): void => {
    const imagenCarta1 = document.getElementById("image-1");
    if (imagenCarta1 && imagenCarta1 instanceof HTMLImageElement) {
        imagenCarta1.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png";
    }
}

const cambiarImagenCarta2 = (): void => {
    const imagenCarta2 = document.getElementById("image-2");
    if (imagenCarta2 && imagenCarta2 instanceof HTMLImageElement) {
        imagenCarta2.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png";
    }
}

const contenedor1 = document.getElementById("container-1");
if (contenedor1 && contenedor1 instanceof HTMLDivElement) {
    contenedor1.addEventListener("click", cambiarImagenCarta1);
}

const contenedor2 = document.getElementById("container-2");
if (contenedor2 && contenedor2 instanceof HTMLDivElement) {
    contenedor2.addEventListener("click", cambiarImagenCarta2);
}
