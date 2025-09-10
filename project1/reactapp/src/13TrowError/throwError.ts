// 13. Напишите функцию throwError(message: string): never, которая принимает строку и
//  генерирует исключение (throws an Error) с этой строкой. Объясните, почему возвращаемый тип
//  этой функции — never.
function throwError(message: string): never {
    throw new Error(message);
}