//  6. Создайте два класса-примеси — Timestamped добавляет свойство created: Date и метод
//  getTimestamp(): Date; Loggable добавляет метод log(message: string): void.
//  Затем создайте класс UserWithLogging, который наследует от User и применяет обе примеси.
//  Используйте паттерн примесей в TypeScript.


class User  {
    public id: number;
     public name: string;
     public email: string;
     public age: number;
    constructor(id: number, name: string, email: string, age: number) {
        this.age = age;
        this.name = name;
        this.email = email;
        this.id = id;
    }
}

function Timestamped<T extends new (...args: any[]) => {}>(Base: T) {
    return class extends Base {
        created: Date;

        constructor(...args: any[]) {
            super(...args);
            this.created = new Date();
        }

        getTimestamp(): Date {
            return this.created;
        }
    };
}

function Loggable<T extends new (...args: any[]) => {}>(Base: T) {
    return class extends Base {
        log(message: string): void {
            console.log(message);
        }
    };
}

class UserWithLogging extends Timestamped(Loggable(User)) {
    constructor(id: number, name: string, email: string, age: number) {
        super(id, name, email, age);
    }
}

const mixedUser = new UserWithLogging(1, "John", "john@test.com", 25);
mixedUser.log("User created");
console.log(mixedUser.getTimestamp());