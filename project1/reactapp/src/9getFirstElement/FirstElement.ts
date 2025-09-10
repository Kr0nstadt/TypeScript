// ; 9. Напишите функцию getFirstElement<T>(arr: T[]): T | undefined, которая возвращает
// ;  первый элемент массива любого типа или undefined, если массив пустой. Протестируйте ее на
// ;  массиве чисел и массиве строк.
function  getFirstElement<T>(arr: T[]): T | undefined{
    if(arr.length !== 0){
        return arr[0];
    }
    else{
        return undefined;
    }
}

const numbers = [1, 2, 3, 4, 5];
const emptyNumbers: number[] = [];

console.log("Тест с числами:");
console.log(getFirstElement(numbers)); 
console.log(getFirstElement(emptyNumbers)); 

const strings = ["apple", "banana", "cherry"];
const emptyStrings: string[] = [];

console.log("\nТест со строками:");
console.log(getFirstElement(strings)); 
console.log(getFirstElement(emptyStrings)); 

interface Person {
    name: string;
    age: number;
}

const people: Person[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];

console.log("\nТест с объектами:");
console.log(getFirstElement(people));