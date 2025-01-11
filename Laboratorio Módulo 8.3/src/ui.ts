import {__CONSTANTES, __CSSCLASNAMES, WarningMessage} from "./constantes";
import {Tablero, tablero} from "./modelo"
import {
    marcarCartaVolteada,
    sePuedeVoltearLaCarta,
    barajarCartas,
    sonPareja,
    esPartidaCompleta,
    estaLaPartidaIniciada,
    getDivElementID,
    getImageElementID,
    getSrc,
    guardarIndiceYCambiarEstadoTablero,
    hayDosCartasLevantadas
} from "./motor"

const cambiarBackgroundConDelay = (imageA: HTMLImageElement, imageB: HTMLImageElement, delay: number) : void => {
    setTimeout(() => {
        imageA.style.backgroundColor = "#00C6A8";
        imageB.style.backgroundColor = "#00C6A8";
    }, delay);
}

const pintarParejaEncontradaColorVerde = (indiceA : number, indiceB : number) : void => {
    const imageAElementID = getImageElementID(indiceA)
    const imageA = document.getElementById(imageAElementID);
    const imageBElementID = getImageElementID(indiceB)
    const imageB = document.getElementById(imageBElementID);
    if((imageA && imageA instanceof HTMLImageElement) && 
        (imageB && imageB instanceof HTMLImageElement)){
        cambiarBackgroundConDelay(imageA, imageB, 300);
    }
}

const comprobarMostrarVictoria = () : void => {
    if (esPartidaCompleta(tablero)) {
        tablero.cambiarEstadoTablero("PartidaCompleta");
        displayWarningMessage("HasCompletadoLaPartida");
    }
}

const addExitAnimation = (indiceA : number, indiceB : number) : void => {
    const divElementID1 = getDivElementID(indiceA)
    const div1 = document.getElementById(divElementID1)
    const divElementID2 = getDivElementID(indiceB)
    const div2 = document.getElementById(divElementID2)
    if(div1 && div1 instanceof HTMLDivElement
        && div2 && div2 instanceof HTMLDivElement) {
        div1.classList.remove(__CSSCLASNAMES.entryAnimation);
        div2.classList.remove(__CSSCLASNAMES.entryAnimation);
        div1.classList.add(__CSSCLASNAMES.exitAnimation);
        div2.classList.add(__CSSCLASNAMES.exitAnimation);
        setTimeout(() => {
            div1.classList.remove(__CSSCLASNAMES.exitAnimation);
            div2.classList.remove(__CSSCLASNAMES.exitAnimation);   
        }, 380);
    }
}

const pintarVolteoHaciaAbajoDeLaPareja = (indiceA : number, indiceB : number) : void => {
    addExitAnimation(indiceA, indiceB);
    const imageAElementID = getImageElementID(indiceA)
    setSrc (__CONSTANTES.srcBackCard, imageAElementID);
    const imageBElementID = getImageElementID(indiceB)
    setSrc (__CONSTANTES.srcBackCard, imageBElementID);
}

const mostrarIntentos = () : void => {
    const intentosElement = document.getElementById("intentos");
    if(intentosElement && intentosElement instanceof HTMLParagraphElement){
            intentosElement.innerText = `${__CONSTANTES.intentosPrefix}${tablero.intentos}`;
        }
}

const actualizarParejaJugada = (tablero : Tablero) : void => {
    const indiceA = tablero.indiceCartaVolteadaA;
    const indiceB = tablero.indiceCartaVolteadaB;
    if(sonPareja (indiceA, indiceB, tablero)){
        pintarParejaEncontradaColorVerde(indiceA, indiceB);
        comprobarMostrarVictoria();
    }
    else {
        setTimeout(() => {
        pintarVolteoHaciaAbajoDeLaPareja (indiceA, indiceB);
        }, 750);
    }
    tablero.cambiarEstadoTablero("CeroCartasLevantadas");
    tablero.sumarIntentos();
    mostrarIntentos();
}

const getIndice = (div : HTMLDivElement) : number => {
    const dataIndiceID = div.getAttribute("data-indice-id");
    let indice : number = -1;
    if(dataIndiceID){
        indice = parseInt(dataIndiceID);
    }
    return indice;
}

const setSrc = (src: string, idElement: string) : void => {
    const cardImgElement = document.getElementById(idElement);
    if(cardImgElement && cardImgElement instanceof HTMLImageElement)
        cardImgElement.src = src;
}

const addEntryAnimation = (indice : number) : void => {
    const divElementID = getDivElementID(indice)
    const div = document.getElementById(divElementID)
    if(div && div instanceof HTMLDivElement) {
        div.classList.add(__CSSCLASNAMES.entryAnimation);
    }
}

const voltearCartaHaciaArriba = (indice : number, tablero: Tablero) : void => {
    addEntryAnimation(indice);
    const imageElementID = getImageElementID(indice)
    const src = getSrc(tablero, indice);
    setTimeout(() => {
        setSrc (src, imageElementID);   
    }, 150);
}

export const handleFlipCard = (div : HTMLDivElement, tablero: Tablero) : void => {
    const indice = getIndice(div);
    if (!estaLaPartidaIniciada(tablero)) {
        displayWarningMessage("DebesDarleAlBotón");
    }
    else if (sePuedeVoltearLaCarta(indice, tablero)){
        displayWarningMessage("InformaciónGenérica");
        marcarCartaVolteada(indice, tablero);
        voltearCartaHaciaArriba (indice, tablero);
        guardarIndiceYCambiarEstadoTablero (indice, tablero);
        if(hayDosCartasLevantadas(tablero)) {
            actualizarParejaJugada(tablero);
        }
    }
    else {
        displayWarningMessage("YaHasVolteadoEstaCarta");
    }
}

const quitarCursorNotAllowed = () : void => {
    const divlist = document.getElementsByClassName(__CSSCLASNAMES.standardDiv);
    for(let i = 0 ; i < divlist.length; i++) {
        divlist[i].className = __CSSCLASNAMES.standardDiv;
    }
}

const voltearTodasLasCartasEncontradasHaciaAbajo = () : void => {
    const divlist = document.getElementsByClassName(__CSSCLASNAMES.standardDiv);
    for(let i = 0 ; i < divlist.length; i++) {
        if(tablero.cartas[i].encontrada === true){
            divlist[i].classList.add(__CSSCLASNAMES.exitAnimation);
            setTimeout(() => {
                divlist[i].className = __CSSCLASNAMES.standardDiv;
            }, 380);
        }
    }
}

const mostrarReversoCartas = () : void => {
    const imagelist = document.getElementsByClassName(__CSSCLASNAMES.standardImage);
        for(let i = 0 ; i < imagelist.length; i++) {
        (imagelist[i] as HTMLImageElement).src = __CONSTANTES.srcBackCard;
        (imagelist[i] as HTMLImageElement).style.backgroundColor = "white";
    }
}

const iniciarPartidaUI = (tablero: Tablero) : void => {
    (tablero.estadoPartida === "PartidaNoIniciada")
        ? quitarCursorNotAllowed()
        : voltearTodasLasCartasEncontradasHaciaAbajo()
    mostrarReversoCartas();
    displayWarningMessage("InformaciónGenérica");
}

export const iniciaPartida = (tablero: Tablero): void => {
    iniciarPartidaUI(tablero);
    barajarCartas(tablero.cartas);
    tablero.restablecerEncontradasYVolteadas();
    tablero.borrarIndices();
    tablero.borrarIntentos();
    tablero.cambiarEstadoTablero("CeroCartasLevantadas");
    mostrarIntentos();
};

const displayWarningMessage = (display: WarningMessage): void => {
    const warningMessageElement = document.getElementById("warning-message");
    if (warningMessageElement && warningMessageElement instanceof HTMLParagraphElement) {
        switch (display) {
            case "DebesDarleAlBotón":
                warningMessageElement.innerHTML = "¡Hola! Haz clic en 'Iniciar Juego' para empezar a jugar.";
                warningMessageElement.style.backgroundColor = "#F59432";
                break;
            case "YaHasVolteadoEstaCarta":
                warningMessageElement.innerHTML = "¡Ups! Ya viste esa carta. ¡Intenta con otra!";
                warningMessageElement.style.backgroundColor = "#F59432";
                break;
            case "HasCompletadoLaPartida":
                warningMessageElement.innerHTML = "¡Bien hecho! ¡Lo hiciste! ¿Puedes hacerlo más rápido?";
                warningMessageElement.style.backgroundColor = "#FFA5B5";
                break;
            case "InformaciónGenérica":
                warningMessageElement.innerHTML = "¡Vamos! Encuentra todas las parejas y gana el juego. 🐶🦉🐝🦁🐷🐔";
                warningMessageElement.style.backgroundColor = "#E6F4F1";
                break;
        }
    }
}


