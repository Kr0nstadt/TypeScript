// 10. Создайте обобщенный класс Pair<T, U>, который хранит пару значений разных типов.
//  Реализуйте методы getFirst(): T и getSecond(): U.

class Pair<T, U>{
    private first : T;
    private second : U;

    constructor(f: T, s: U){
        this.first = f;
        this.second = s;
    }

    public getFirst(): T {
        return this.first;
    }
    public getSecond() : U{
        return this.second;
    }
}