// 3. Создайте объект car с полями brand: string и year: number. Затем создайте тип CarType
//  на основе типа этого объекта с помощью typeof.

const car = {
    brand: "бебебе",
    year: 2
}

type CarType = typeof car;
