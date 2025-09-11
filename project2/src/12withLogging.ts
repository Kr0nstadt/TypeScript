//  12. Создайте функцию withLogging<T>(obj: T), которая возвращает прокси-объект,
//  логирующий вызовы всех методов исходного объекта. Используйте: обобщения для типа
//  объекта; keyof и отображаемые типы для итерации по методам; условные типы для проверки,
//  является ли свойство функцией.

type MethodKeys<T> = {
    [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never;
}[keyof T];

type LoggableMethods<T> = {
    [K in MethodKeys<T>]: T[K];
};

function withLogging<T extends object>(obj: T): T {
    const proxy = new Proxy(obj, {
        get(target: T, prop: string | symbol, receiver: any) {
            const value = Reflect.get(target, prop, receiver);
            
            if (typeof value === 'function') {
                return function(this: any, ...args: any[]) {
                    const methodName = String(prop);
                    console.log(` Вызов метода ${methodName} с аргументами:`, args);
                    
                    try {
                        const result = value.apply(target, args);
                        console.log(` Метод ${methodName} успешно выполнен, результат:`, result);
                        return result;
                    } catch (error) {
                        console.error(` Метод ${methodName} вызвал ошибку:`, error);
                        throw error;
                    }
                };
            }
            
            return value;
        },
        
        set(target: T, prop: string | symbol, value: any, receiver: any): boolean {
            console.log(` Установка свойства ${String(prop)} в значение:`, value);
            return Reflect.set(target, prop, value, receiver);
        }
    });
    
    return proxy as T;
}

class Calculator {
    private count: number = 0;

    add(a: number, b: number): number {
        return a + b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    getCount(): number {
        return this.count;
    }

    increment(): void {
        this.count++;
        console.log('Count incremented to:', this.count);
    }

    name: string = "Calculator";
}

// Создаем экземпляр с логированием
const calculator = new Calculator();
const loggedCalculator = withLogging(calculator);

// Используем методы с логированием
console.log("=== Тестирование методов ===");

const sum = loggedCalculator.add(5, 3);
// В консоли:  Вызов метода add с аргументами: [5, 3]
// В консоли:  Метод add успешно выполнен, результат: 8

const product = loggedCalculator.multiply(4, 2);
// В консоли:  Вызов метода multiply с аргументами: [4, 2]
// В консоли:  Метод multiply успешно выполнен, результат: 8

const count = loggedCalculator.getCount();
// В консоли:  Вызов метода getCount с аргументами: []
// В консоли:  Метод getCount успешно выполнен, результат: 0

loggedCalculator.increment();
// В консоли:  Вызов метода increment с аргументами: []
// В консоли: Count incremented to: 1
// В консоли:  Метод increment успешно выполнен, результат: undefined

// Обычные свойства не логируются
console.log(loggedCalculator.name); // "Calculator" (без логов)

class ErrorProne {
    throwError(): never {
        throw new Error("Тестовая ошибка");
    }
}

const errorProne = withLogging(new ErrorProne());
try {
    errorProne.throwError();
} catch (e) {
    // В консоли: 📝 Вызов метода throwError с аргументами: []
    // В консоли: ❌ Метод throwError вызвал ошибку: Error: Тестовая ошибка
}