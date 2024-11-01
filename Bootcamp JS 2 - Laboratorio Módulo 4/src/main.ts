// OBTENER TURNO ACTUAL // INTERFAZ
function getCurrentTurn(): number {
    const turnElement = document.getElementById("numero-turno");
    let turn = 0;
    if (turnElement !== null && turnElement instanceof HTMLHeadingElement) {
        turn = parseInt(turnElement.textContent!);
    }
    return turn;
}

// ACTUALIZAR PANTALLA CON NUEVO TURNO // INTERFAZ
function setCurrentTurn(nuevo: number): void {
    const turnElement = document.getElementById("numero-turno");
    if (turnElement !== null && turnElement instanceof HTMLHeadingElement) {
        turnElement.textContent = nuevo.toString().padStart(2, '0');
    }
}

// MANEJADOR DE BOTONES // LÓGICA
function handleButton(btnID: string): void {
    const actual = getCurrentTurn();
    switch (btnID) {
        case "boton-anterior":
            if (actual > 0) {
                setCurrentTurn(actual - 1);
            }
            break;
        case "boton-siguiente":
            setCurrentTurn(actual + 1);
            break;
        case "boton-reset":
            setCurrentTurn(0);
            break;
    }
}

// MOSTRAR MENSAJE DE ERROR // INTERFAZ
function showError(msg: string): void {
    const errorElement = document.getElementById("advertencia-input");
    if (errorElement !== null && errorElement instanceof HTMLParagraphElement) {
        errorElement.textContent = msg;
    }
}

// OBTENER VALOR DEL INPUT // INTERFAZ
const getInputValue = (): string => {
    const inputElement = document.getElementById("input-turno");
    return (inputElement as HTMLInputElement).value;
}

// LIMPIAR VALOR DEL INPUT // INTERFAZ
const clearInput = (): void => {
    const inputElement = document.getElementById("input-turno");
    (inputElement as HTMLInputElement).value = "";
}

// PROCESAR INPUT // LÓGICA
function processTurnInput(): void {
    const inputVal = getInputValue();

    if (inputVal === "") {
        showError("El campo está vacío");
    } else if (parseInt(inputVal) < 0) {
        showError("El turno debe ser positivo");
    } else {
        setCurrentTurn(parseInt(inputVal));
        showError("");
    }
    clearInput();
}

// ASIGNAR EVENTOS A LOS BOTONES
const prevButton = document.getElementById("boton-anterior");
if (prevButton !== null && prevButton instanceof HTMLButtonElement) {
    prevButton.addEventListener("click", () => handleButton(prevButton.id));
}

const nextButton = document.getElementById("boton-siguiente");
if (nextButton !== null && nextButton instanceof HTMLButtonElement) {
    nextButton.addEventListener("click", () => handleButton(nextButton.id));
}

const resetButton = document.getElementById("boton-reset");
if (resetButton !== null && resetButton instanceof HTMLButtonElement) {
    resetButton.addEventListener("click", () => handleButton(resetButton.id));
}

const confirmButton = document.getElementById("boton-confirmar");
if (confirmButton !== null && confirmButton instanceof HTMLButtonElement) {
    confirmButton.addEventListener("click", processTurnInput);
}
