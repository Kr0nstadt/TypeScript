// Создайте абстрактный класс Shape с абстрактными методоми area(): number, perimeter():
//  number, конкретным методом getDescription(): string, который возвращает "This is a shape."
abstract class Shape{
    abstract area(): number;
    abstract perimeter(): number;

    constructor(){}

    public getDescription(): string{
        return("This is a shape.");
    }

}

//  Реализуйте два конкретных класса — Rectangle с свойствами width и height, Circle с свойством
//  radius.

class Rectangle extends Shape{
    private width : number;
    private height : number;

    constructor(width : number, height : number){
        super();
        this.height = height;
        this.width = width;
    }

    area(): number{
        return(this.width*this.height);
    }    

    perimeter(): number {
        return(2*this.width+2*this.height);
    }

    public getDescription(): string{
        return("This is a Rectangle.");
    }
}
class Circle extends Shape{
    private radius : number;

    constructor(radius : number){
        super();
        this.radius = radius;
    }
    area(): number{
        return(3.14*(this.radius*this.radius));
    }    

    perimeter(): number {
        return(2*3.14*this.radius);
    }
    public getDescription(): string{
        return("This is a Circle.");
    }
}