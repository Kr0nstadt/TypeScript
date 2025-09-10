//  3. Создайте универсальную функцию filterArray, которая:
//  Принимает массив любого типа и функцию-предикат.
//  Возвращает новый массив, отфильтрованный по условию.
//  Типизируйте так: filterArray<T>(items: T[], predicate: (item: T) => boolean):
//  T[].
function filterArray<T>(items: T[], predicate: (item: T) => boolean): T[] {
    const result: T[] = [];
    
    for (const item of items) {
        if (predicate(item)) {
            result.push(item);
        }
    }
    
    return result;
}
function VieTree() : void{
    const numbers = [1, 2, 3, 4, 5, 6];
    const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);
    console.log("befor : ")
    console.log(numbers + " with (num) => num % 2 === 0")
    console.log("after : ")
    console.log(evenNumbers); 

    const strings = ["apple", "banana", "cherry", "date"];
    console.log("before :")
    console.log(strings + " with (str) => str.length > 5");
    const longStrings = filterArray(strings, (str) => str.length > 5);

    console.log(longStrings); 
    interface Person {
        name: string;
        age: number;
    }

    const people: Person[] = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 17 },
        { name: "Charlie", age: 30 },
        { name: "David", age: 16 }
    ];

    const adults = filterArray(people, (person) => person.age >= 18);
    console.log(adults);
    const numbersAboveThree = filterArray(numbers, (num) => num > 3);
    console.log(numbersAboveThree); 
}
export default VieTree;