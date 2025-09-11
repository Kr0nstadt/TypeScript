// 4. Создайте условный тип IsArrayType<T>, который проверяет, является ли T массивом. Если да,
//  верните true, иначе false.

type IsArrayType<T> = T extends any[] ? true : false;