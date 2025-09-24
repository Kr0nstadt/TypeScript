// Создайте обобщенный базовый класс Repository<T> с методами getById(id: number): T |
//  undefined и save(item: T): void

interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

class Repository<T extends { id: number }> {
    private items: T[] = [];
    private static nextId: number = 1;

    getById(id: number): T | undefined {
        return this.items.find(item => item.id === id);
    }

    save(item: Omit<T, 'id'>): void {
        const newItem = { ...item, id: Repository.nextId } as T;
        this.items.push(newItem);
        Repository.nextId++;
    }
}

class UserRepository extends Repository<User> {
    getByEmail(email: string): User | undefined {
        return this.getById(1);
    }
}