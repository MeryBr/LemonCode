// Implementa una función que admita un array de números y devuelva el segundo elemento. Si no existe, devuelve ‘undefined’.
function getSecondElement(arr: number[]): number | undefined {
    if (arr.length < 2) {
        return undefined;
    }
    return arr[1];
}
console.log(getSecondElement([10, 20, 30])); 
console.log(getSecondElement([5]));           

// Implementa una función que admita un string como parámetro y devuelva la última letra.
function getLastCharacter(input: string): string {
    if (input.length === 0) {
        return ''; // Devuelve una cadena vacía si el string está vacío
    }
    return input[input.length - 1];
}
console.log(getLastCharacter("Lucía")); 
console.log(getLastCharacter(""));      

// Implementa una función que dado un array, intercambie el primer elemento por el último y muestre el resultado.
function swapFirstAndLast(arr: any[]): void {
    if (arr.length < 2) {
        console.log("El array debe tener al menos dos elementos para intercambiar.");
        return;
    }
    const temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    console.log(arr);
}
swapFirstAndLast([1, 2, 3, 4]); // Muestra [4, 2, 3, 1]
swapFirstAndLast(["Manzana", "Pera", "Plátano"]); 
