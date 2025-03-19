// Implementa una función que admita 2 parámetros, un número y un texto, y que muestre por consola dicho texto tantas veces como indique el número.
function repeatText(count: number, text: string): void {
    for (let i = 0; i < count; i++) {
        console.log(text);
    }
}
repeatText(3, "¡Hola, mundo!"); 

// Implementa una función que admita como parámetro un objeto cualquiera y devuelva el número de propiedades que tiene el objeto.
function countProperties(obj: Record<string, any>): number {
    return Object.keys(obj).length;
}
console.log(countProperties({ a: 1, b: 2, c: 3 })); 

// Implementa una función que admita como parámetro un objeto y muestre por consola los valores de sus propiedades.
function logObjectValues(obj: Record<string, any>): void {
    for (const value of Object.values(obj)) {
        console.log(value);
    }
}
logObjectValues({ name: "Juan", age: 30, city: "Madrid" }); 

// Implementa una función que admita un array de números y otro parámetro que sea un número y sume cada elemento del array multiplicado por dicho número. Devuelve el resultado.
function sumArrayWithMultiplier(arr: number[], multiplier: number): number {
    let total = 0;
    for (const num of arr) {
        total += num * multiplier;
    }
    return total;
}
console.log(sumArrayWithMultiplier([1, 2, 3], 2)); 

// Implementa una función que dado un string como parámetro y también un carácter, devuelva cuántas veces aparece dicho carácter en el string.
function countCharacterInString(input: string, char: string): number {
    let count = 0;
    for (const c of input) {
        if (c === char) {
            count++;
        }
    }
    return count;
}
console.log(countCharacterInString("banana", "a")); 

// Implementa una función que dado un array de cualquier tipo, lo recorra del primer al último elemento, mostrando cada elemento por consola.
function logArrayElements(arr: any[]): void {
    for (const element of arr) {
        console.log(element);
    }
}
logArrayElements([10, "perro", true, { key: "value" }]); 

// Implementa una función que dado un array de cualquier tipo, lo recorra desde el último elemento al primero, y lo muestre por consola.
function logArrayElementsReverse(arr: any[]): void {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
logArrayElementsReverse(["manzana", "naranja", "uva"]); 

// Implementa una función que dado un array de números, y otro parámetro que sea un número, diga cuántos elementos son menores a dicho número, y cuántos no.
function countLessThan(arr: number[], num: number): { lessThan: number; notLessThan: number } {
    let lessThanCount = 0;
    let notLessThanCount = 0;
    for (const element of arr) {
        if (element < num) {
            lessThanCount++;
        } else {
            notLessThanCount++;
        }
    }
    return { lessThan: lessThanCount, notLessThan: notLessThanCount };
}
console.log(countLessThan([1, 5, 3, 8, 2], 4)); 

// Implementa una función que admita 2 arrays como argumento, y diga si el elemento del primero se encuentra en el segundo.
function isElementInArray(arr1: any[], arr2: any[]): boolean {
    for (const element of arr1) {
        if (arr2.includes(element)) {
            return true;
        }
    }
    return false;
}
console.log(isElementInArray([1, 2, 3], [3, 4, 5])); 

// Implementa una función que admita 2 arrays como argumento, y intercambia los elementos del primero en el segundo y viceversa. Muestra los arrays transformados por consola.
function swapArrays(arr1: any[], arr2: any[]): void {
    const temp = [...arr1];
    arr1.splice(0, arr1.length, ...arr2);
    arr2.splice(0, arr2.length, ...temp);
    console.log("Array 1:", arr1);
    console.log("Array 2:", arr2);
}
swapArrays([1, 2, 3], ["a", "b", "c"]); 

// Implementa una función que admita un array como argumento, y construya un objeto en el que almacene cada uno de los elementos del array en propiedades indexadas, del tipo ‘prop1’, ‘prop2’, ‘prop3’, etc.
function arrayToIndexedObject(arr: any[]): Record<string, any> {
    const obj: Record<string, any> = {};
    for (let i = 0; i < arr.length; i++) {
        obj[`prop${i + 1}`] = arr[i];
    }
    return obj;
}
console.log(arrayToIndexedObject(["rojo", "verde", "azul"])); 

// Implementa una función que admita un array y un número, y empieza a recorrer dicho array por el número dado. Muestra por consola cada elemento por el que iteres.
function logArrayFromIndex(arr: any[], startIndex: number): void {
    for (let i = startIndex; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
logArrayFromIndex([10, 20, 30, 40, 50], 2); // Muestra 30, 40, 50

// Implementa una función que dado un array de strings y otro parámetro como string diga si existe en el array.
function existsInArray(arr: string[], value: string): boolean {
    return arr.includes(value);
}
console.log(existsInArray(["manzana", "pera", "plátano"], "pera")); 

// Implementa un array que contenga nombres de frutas en Español y otro array con las mismas frutas en el mismo orden pero en inglés.
const frutasEspañol = ["manzana", "naranja", "plátano"];
const frutasInglés = ["apple", "orange", "banana"];

// Implementa una función de traducción, que dada una fruta en español, diga la traducción en inglés, y otra función equivalente que haga la traducción inversa.
function translateToEnglish(fruit: string): string | undefined {
    const index = frutasEspañol.indexOf(fruit);
    return index !== -1 ? frutasInglés[index] : undefined;
}

function translateToSpanish(fruit: string): string | undefined {
    const index = frutasInglés.indexOf(fruit);
    return index !== -1 ? frutasEspañol[index] : undefined;
}

console.log(translateToEnglish("manzana")); 
console.log(translateToSpanish("orange"));  

// Implementa una función que admita un texto por parámetro y lo devuelva por consola al revés.
function reverseString(input: string): string {
    return input.split('').reverse().join('');
}
console.log(reverseString("Hola")); 

// Implementa una función que admita un texto por parámetro y lo devuelva en formato ‘EsTe Es Mi TeXtO’.
function formatText(input: string): string {
    let formatted = '';
    for (let i = 0; i < input.length; i++) {
        formatted += i % 2 === 0 ? input[i].toUpperCase() : input[i].toLowerCase();
    }
    return formatted;
}
console.log(formatText("este es mi texto")); 

// Implementa una función que admita como parámetro un array de arrays. La función debe recorrer todos los elementos de cada subarray y mostrarlos por consola.
function logArrayOfArrays(arrOfArr: any[][]): void {
    for (const subArray of arrOfArr) {
        for (const element of subArray) {
            console.log(element);
        }
    }
}
logArrayOfArrays([[1, 2], ["manzana", "pera"], [true, false]]); 
