//  11. Создайте интерфейс Book с полями:
//  title (обязательная строка)
//  author (обязательная строка)
//  year? (опциональное число)
//  genre (строка, но которая может быть только 'fiction' или 'non-fiction'). Используйте
//  Union Type для genre.
//  Напишите функцию createBook(book: Book): Book, которая возвращает объект книги.
//  Продемонстрируйте вызов функции с передачей объекта и без опционального поля year.

interface Book{
    title : string;
    author : string;
    year? : number;
    genre : "fiction" | "non-fiction";
}
function createBook(book: Book): Book{
    return {
        title: book.title,
        author: book.author,
        year: book.year,
        genre: book.genre
    };
}
function demonstrateBookCreation(): void {
    console.log("=== Создание книг ===");
    
    const bookWithYear: Book = createBook({
        title: "Война и мир",
        author: "Лев Толстой",
        year: 1869,
        genre: "fiction"
    });
    
    console.log("Книга с годом:", bookWithYear);
    
    const bookWithoutYear: Book = createBook({
        title: "1984",
        author: "Джордж Оруэлл",
        genre: "fiction"
    });
    
    console.log("Книга без года:", bookWithoutYear);
    
    const nonFictionBook: Book = createBook({
        title: "Краткая история времени",
        author: "Стивен Хокинг",
        year: 1988,
        genre: "non-fiction"
    });
    
    console.log("Научно-популярная книга:", nonFictionBook);
}