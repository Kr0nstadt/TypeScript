// Создайте базовый класс Animal со свойством name и методом speak(): string. Реализуйте
//  классы Dog и Cat, которые наследуют Animal и переопределяют speak().
//  Затем создайте обобщенную функцию-фабрику createAnimal<T extends Animal>(animalClass: new
//  (name: string) => T, name: string): T, которая создает экземпляры животных.
class Animal{
    name : string;
    constructor(name:string){
        this.name = name;
    }
    speak():string{
        return "bebebe";
    }
}
class Dog extends Animal{
    override speak(): string {
        return "fyfyfyf";
    }
}
class Cat extends Animal{
    override speak(): string {
        return "кусь";
    }
}
function createAnimal<T extends Animal>(animalClass: new (name: string) => T, name: string): T {
    return new animalClass(name);
}

const dog = createAnimal(Dog, "Rex");
const cat = createAnimal(Cat, "Whiskers");

console.log(dog.speak());
console.log(cat.speak());