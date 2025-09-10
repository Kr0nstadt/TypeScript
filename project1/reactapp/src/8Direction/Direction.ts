//  8. Создайте enum Direction с значениями Up, Down, Left, Right.
//  Напишите функцию move(direction: Direction): void, которая выводит в консоль
//  сообщение типа "Moving Up" или "Moving Left" в зависимости от переданного аргумента.
enum Direction{Up, Down, Left, Right};
function move(direction: Direction): void{
    switch(direction){
         case Direction.Up:
            console.log("Moving Up");
            break;
        case Direction.Down:
            console.log("Moving Down");
            break;
        case Direction.Left:
            console.log("Moving Left");
            break;
        case Direction.Right:
            console.log("Moving Right");
            break;
        default:
            console.log("Unknown direction");
    }
}