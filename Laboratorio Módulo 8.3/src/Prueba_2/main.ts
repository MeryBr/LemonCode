console.log("Prueba de Concepto 2");

const arrayFuentes: string[] = [
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png",
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png",
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png",
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/4.png",
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/5.png",
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png",
];

const cambiarImagenCarta = (): void => {
    const imagenCarta = document.getElementById("card-back") as HTMLImageElement;
    if (imagenCarta) {
        imagenCarta.classList.add("flipped");

        setTimeout(() => {
            const indiceAleatorio = Math.floor(Math.random() * arrayFuentes.length);
            imagenCarta.src = arrayFuentes[indiceAleatorio];
            
            imagenCarta.classList.remove("flipped");
        }, 500); 
    }
};

const contenedor = document.getElementById("images");
if (contenedor) {
    contenedor.addEventListener("click", cambiarImagenCarta);
}
