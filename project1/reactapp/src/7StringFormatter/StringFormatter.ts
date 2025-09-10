//  7. Объявите тип функции StringFormatter.
//  Он должен описывать функцию, которая принимает строку и необязательный параметр
//  uppercase: boolean (по умолчанию false).
//  Функция возвращает строку.
// Напишите две функции под этот тип: одна делает первую букву заглавной, а вторая
//  обрезает пробелы по краям и, если uppercase is true, приводит всю строку к верхнему
//  регистру.

type StringFormatter = (str: string, uppercase?: boolean) => string;

const capitalizeFirstLetter: StringFormatter = (str, uppercase = false) => {
    if (!str) return '';
    
    let result = str.charAt(0).toUpperCase() + str.slice(1);
    
    if (uppercase) {
        result = result.toUpperCase();
    }
    
    return result;
};

const trimAndFormat: StringFormatter = (str, uppercase = false) => {
    if (!str) return '';
    
    let result = str.trim();
    
    if (uppercase) {
        result = result.toUpperCase();
    }
    
    return result;
};