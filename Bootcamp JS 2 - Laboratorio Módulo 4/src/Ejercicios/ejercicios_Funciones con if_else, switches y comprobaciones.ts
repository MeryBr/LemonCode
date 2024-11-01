// Implementa una función que admita un parámetro, de cualquier tipo, y que compruebe si el parámetro es undefined o null.
function isNullorUndefined(param: any): void {
    if (param === null) {
        console.log("El parámetro es NULL");
    } else if (param === undefined) {
        console.log("El parámetro es UNDEFINED");
    } else {
        console.log("El parámetro no es NULL ni UNDEFINED");
    }
}
isNullorUndefined(null);

// Implementa una función que admita un número como parámetro y devuelva si el número es positivo o negativo.
function isPositive(num: number): void {
    if (num >= 0) {
        console.log(`El número ${num} es positivo`);
    } else {
        console.log(`El número ${num} es negativo`);
    }
}
isPositive(-5);

// Implementa una función que admita un número como parámetro y diga, por consola, si es mayor que 100, menor que 100 o exactamente 100.
function isEqualTo100(num: number): void {
    if (num > 100) {
        console.log(`El número ${num} es mayor que 100`);
    } else if (num < 100) {
        console.log(`El número ${num} es menor que 100`);
    } else {
        console.log(`El número ${num} es igual a 100`);
    }
}
isEqualTo100(105);

// Implementa una función que admita como parámetro un objeto y devuelva si dicho objeto tiene una propiedad ‘name’ o no.
function hasNameProperty(obj: { name?: string }): void {
    if ('name' in obj) {
        console.log("El objeto tiene la propiedad 'name'");
    } else {
        console.log("El objeto NO tiene la propiedad 'name'");
    }
}
hasNameProperty({ name: "Pablo" });
hasNameProperty({});

// Implementa una función que admita 2 números como argumento y compruebe si el primero es divisible por el segundo.
function checkDivisibility(num1: number, num2: number): void {
    if (num2 === 0) {
        console.log("No se puede dividir por cero");
    } else if (num1 % num2 === 0) {
        console.log(`${num1} es divisible por ${num2}`);
    } else {
        console.log(`${num1} no es divisible por ${num2}`);
    }
}

checkDivisibility(18, 6);  // Aquí, 18 es divisible entre 6.
checkDivisibility(19, 4);  // Aquí, 19 NO es divisible entre 4.

// Implementa una función que admita un string y un número como parámetro, y comprobar que tienen ese número de caracteres.
function checkStringLength(text: string, length: number): void {
    if (text.length === length) {
        console.log(`"${text}" tiene exactamente ${length} caracteres.`);
    } else {
        console.log(`"${text}" no tiene ${length} caracteres, sino ${text.length}.`);
    }
}
checkStringLength("Gabriela", 8);  // Aquí, "Gabriela" tiene 8 caracteres.

// Implementa una función que admita un día de la semana en formato número (del 1 al 7) y devuelva que día de la semana es (en texto).
function dayOfTheWeek(num: number): void {
    switch (num) {
        case 1:
            console.log("Lunes");
            break;
        case 2:
            console.log("Martes");
            break;
        case 3:
            console.log("Miércoles");
            break;
        case 4:
            console.log("Jueves");
            break;
        case 5:
            console.log("Viernes");
            break;
        case 6:
            console.log("Sábado");
            break;
        case 7:
            console.log("Domingo");
            break;
        default:
            console.log("Número de día inválido");
            break;
    }
}
dayOfTheWeek(1);

// Implementa un función que dado un número (del 1 al 12), diga a qué mes corresponde en texto.
function monthOfTheYear(num: number): void {
    switch (num) {
        case 1:
            console.log("Enero");
            break;
        case 2:
            console.log("Febrero");
            break;
        case 3:
            console.log("Marzo");
            break;
        case 4:
            console.log("Abril");
            break;
        case 5:
            console.log("Mayo");
            break;
        case 6:
            console.log("Junio");
            break;
        case 7:
            console.log("Julio");
            break;
        case 8:
            console.log("Agosto");
            break;
        case 9:
            console.log("Septiembre");
            break;
        case 10:
            console.log("Octubre");
            break;
        case 11:
            console.log("Noviembre");
            break;
        case 12:
            console.log("Diciembre");
            break;
        default:
            console.log("Número de mes inválido");
            break;
    }
}
monthOfTheYear(3);

// Implementa una función que admita 2 arrays como argumento, y devuelva el array más largo.
function longerArray(arr1: any[], arr2: any[]): void {
    if (arr1.length > arr2.length) {
        console.log("El primer array es más largo");
    } else if (arr1.length < arr2.length) {
        console.log("El segundo array es más largo");
    } else {
        console.log("Ambos arrays tienen la misma longitud");
    }
}
longerArray([1, 2, 3], [1, 2]);

// Implementa una función que admita 2 arrays como argumento, y devuelva si el primer elemento de ambos arrays es igual o no.
function areFirstElementsEqual(arr1: any[], arr2: any[]): void {
    if (arr1[0] === arr2[0]) {
        console.log("Los primeros elementos de ambos arrays son iguales");
    } else {
        console.log("Los primeros elementos de ambos arrays NO son iguales");
    }
}
areFirstElementsEqual([1, 2, 3], [1, 4, 5]);
