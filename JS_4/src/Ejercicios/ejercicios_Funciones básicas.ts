// Implementa una función que muestre por consola “Hola Mundo”.
function helloWorld(): void {
    console.log("Hola Mundo");
}
helloWorld();

// Implementa una función que admita como parámetro un nombre y salude por consola a dicha persona.
function helloName(name: string): void {
    console.log(`Hola ${name}`);
}
helloName("Lucía");

// Implementa una función que dado un string como parámetro devuelva el string en mayúsculas.
function stringToUpperCase(input: string): string {
    return input.toUpperCase();
}
console.log(stringToUpperCase("lucía"));

// Implementa una función que dado un string como parámetro devuelva el string en minúsculas.
function stringToLowerCase(input: string): string {
    return input.toLowerCase();
}
console.log(stringToLowerCase("MARTÍN"));

// Implementa una función que admita 2 números como parámetro y devuelva la suma de ambos.
function sum(a: number, b: number): number {
    return a + b;
}
console.log(sum(5, 8));

// Implementa una función que admita 3 argumentos de tipo string y devuelva otro string con la concatenación de los 3.
function joinWords(word1: string, word2: string, word3: string): string {
    return `${word1} ${word2} ${word3}`;
}
console.log(joinWords("Perro", "Gato", "Pájaro")); 

// Implementa una función que admita como parámetro un objeto y añada a dicho objeto una propiedad llamada ‘id’ inicializada a null.
function addID(obj: Record<string, any>): void {
    obj.id = null;
}
let myObj = {};
addID(myObj);
console.log(myObj);


