// Создайте обобщенный класс Stack<T>, который реализует структуру данных "стек" (LIFO).
//  Реализуйте методы: push(item: T): void — добавляет элемент на вершину стека; pop(): T
//  | undefined — удаляет и возвращает элемент с вершины стека; peek(): T | undefined` —
//  возвращает элемент с вершины стека без удаления.
class Stack<T> {
 
    private myStack: T[] = [];

    peek(): T | undefined{
 
        return this.myStack[this.myStack.length];
    }
    pop() : T | undefined{
        return this.myStack.pop();
    }
    push(item: T): void {
        this.myStack.push(item);
    }
}
 