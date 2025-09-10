// 12. У вас есть переменная pageNumber: unknown = '10';.
//  Напишите код, который преобразует pageNumber в число, используя parseInt.
//  Используйте утверждение типа (as), чтобы сказать TypeScript, что результат parseInt — это
//  число, и присвойте результат переменной с типом number.
let pageNumber: unknown = '10';

const numericPageNumber: number = parseInt(pageNumber as string) as number;

console.log(`Исходное значение: ${pageNumber}, тип: ${typeof pageNumber}`);
console.log(`Преобразованное значение: ${numericPageNumber}, тип: ${typeof numericPageNumber}`);