//  10. Создайте интерфейс HasId с полем id: number. Напишите универсальную функцию findById<T
//  extends HasId>(items: T[], id: number): T | undefined, которая ищет объект по id в
//  массиве объектов, у которых есть это поле.

interface HasId {
    id: number;
}

function findById<T extends HasId>(items: T[], id: number): T | undefined {
    return items.find(item => item.id === id);
}

interface User extends HasId {
    name: string;
    email: string;
}

interface Product extends HasId {
    title: string;
    price: number;
}

const users: User[] = [
    { id: 1, name: "Alice", email: "alice@mail.com" },
    { id: 2, name: "Bob", email: "bob@mail.com" },
    { id: 3, name: "Charlie", email: "charlie@mail.com" }
];

const products: Product[] = [
    { id: 101, title: "Laptop", price: 1000 },
    { id: 102, title: "Phone", price: 500 },
    { id: 103, title: "Tablet", price: 300 }
];

function testFindById(): void {
    console.log("=== Тестирование findById ===");
    
    console.log("Пользователи:");
    console.log(findById(users, 2)); 
    console.log(findById(users, 5));

    console.log("\nПродукты:");
    console.log(findById(products, 102)); 
    console.log(findById(products, 999)); 
    
    console.log("\nНесуществующие ID:");
    console.log(findById(users, 999)); 
    console.log(findById(products, 0)); 
}
