interface Point {
    x: number;
    y: number;
}

function demonstrateReadonly(): void {
    console.log("=== Демонстрация Readonly ===");
    
    // Readonly объект
    const point: Readonly<Point> = { x: 10, y: 20 };
    console.log("Point:", point);
    
    // Readonly массив
    const scores: ReadonlyArray<number> = [1, 2, 3];
    console.log("Scores:", scores);
    
    // Что МОЖНО делать с Readonly:
    console.log("Чтение значений:");
    console.log("point.x:", point.x);     // Можно читать
    console.log("scores[0]:", scores[0]); // Можно читать
    
    console.log("Итерация:");
    for (const score of scores) {         //Можно итерировать
        console.log(score);
    }
    
    console.log("Длина массива:", scores.length); // Можно получать свойства
    
    // Что НЕЛЬЗЯ делать с Readonly:
    console.log("\nПопытка изменений (вызовет ошибки):");
    
    // ❌ point.x = 15; - Cannot assign to 'x' because it is a read-only property
    // ❌ scores.push(4); - Property 'push' does not exist on type 'readonly number[]'
    // ❌ scores[0] = 99; - Index signature in type 'readonly number[]' only permits reading
}

demonstrateReadonly();