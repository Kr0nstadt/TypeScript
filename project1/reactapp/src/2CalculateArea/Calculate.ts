//  2. Напишите функцию calculateArea, которая:
//  Принимает shape (тип: 'circle' | 'square') и параметры (radius для круга, side для
//  квадрата).
//  Возвращает площадь фигуры.
//  Используйте перегрузку функций.
interface Circle{
    r : number;
}
interface Square{
    a : number;
}

function CalculateArea(shape: Circle): number;
function CalculateArea(shape: Square): number;

function CalculateArea(shape: Circle | Square): number {
    if ('r' in shape) {
        return shape.r * shape.r * Math.PI;
    } else {
        return shape.a * shape.a;
    }
}
function ViewTwo(): void {
    console.log("=== Демонстрация функции CalculateArea ===");
    
    const circle: Circle = { r: 5 };
    const square: Square = { a: 4 };
    const circle2: Circle = { r: 3 };
    const square2: Square = { a: 7 };

    const circleArea = CalculateArea(circle);
    const squareArea = CalculateArea(square);
    const circleArea2 = CalculateArea(circle2);
    const squareArea2 = CalculateArea(square2);

    console.log(`Круг с радиусом ${circle.r}: площадь = ${circleArea.toFixed(2)}`);
    console.log(`Квадрат со стороной ${square.a}: площадь = ${squareArea}`);
    console.log(`Круг с радиусом ${circle2.r}: площадь = ${circleArea2.toFixed(2)}`);
    console.log(`Квадрат со стороной ${square2.a}: площадь = ${squareArea2}`);
    console.log("==========================================");
}
export default ViewTwo;
