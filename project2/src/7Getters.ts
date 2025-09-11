//  7. Создайте тип Getters<T>, который преобразует все свойства объекта T в геттеры. Например,
//  для { name: string } должно получиться { getName(): string }. Используйте
//  шаблонные литеральные типы для формирования имен методов.

type Getters<T> = {
    [P in keyof T as `get${Capitalize<string & P>}`]: () => T[P];
};

interface User {
    name: string;
    age: number;
    isActive: boolean;
}

type UserGetters = Getters<User>;

const userGetters: UserGetters = {
    getName: () => "John Doe",
    getAge: () => 30,
    getIsActive: () => true
};

console.log(userGetters.getName()); 
console.log(userGetters.getAge());  
console.log(userGetters.getIsActive()); 