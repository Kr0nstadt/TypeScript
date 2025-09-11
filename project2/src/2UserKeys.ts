// 2. Дан интерфейс:
//  interface User { 
//   id: number; 
//   name: string; 
//   email: string; 
//   age: number; 
// } 
// Создайте тип UserKeys, который является объединением всех ключей User с помощью keyof.
//  Напишите функцию getUserProperty(user: User, key: UserKeys), которая возвращает
//  значение свойства key из объекта user

interface User { 
  id: number; 
  name: string; 
  email: string; 
  age: number; 
} 

type UserKeys = keyof User;


function getUserProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: User = {
  id: 1,
  name: "Alice",
  email: "mail",
  age: 30
};

const userName = getUserProperty(user, 'name'); // Возвращает 'Alice'
const userAge = getUserProperty(user, 'age'); // Возвращает 30