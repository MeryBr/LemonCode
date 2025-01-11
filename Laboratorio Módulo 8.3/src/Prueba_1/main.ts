console.log("Prueba de Concepto 1");

function barajarElemento<T>(array: T[]) {
    let indiceActual = array.length;
    let indiceAleatorio;
    while (indiceActual > 0) {
        indiceAleatorio = Math.floor(Math.random() * indiceActual);
        indiceActual--;
        [array[indiceActual], array[indiceAleatorio]] = [array[indiceAleatorio], array[indiceActual]];
    }
    return array;
}

var arrayInicial = ['🐶', '🐶', '🦉', '🦉', '🐝', '🐝', '🦁', '🦁', '🐷', '🐷', '🐔', '🐔'];
barajarElemento(arrayInicial);
console.log(arrayInicial);
barajarElemento(arrayInicial);
console.log(arrayInicial);
barajarElemento(arrayInicial);
console.log(arrayInicial);
