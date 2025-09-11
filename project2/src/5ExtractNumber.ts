//  5. Создайте условный тип ExtractNumber<T>, который извлекает тип элемента, если T является
//  массивом чисел. Если это не массив чисел, верните never.

type ExtractNumber<T> = T extends number[] ? number : never;