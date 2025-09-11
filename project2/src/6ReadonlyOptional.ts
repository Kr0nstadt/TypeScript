// Создайте отображаемый тип ReadonlyOptional<T>, который делает все свойства T
//  доступными только для чтения (readonly) и необязательными (?). на typescript

type ReadonlyOptional<T> = {
  readonly [P in keyof T]?: T[P];
};

interface User {
  id: number;
  name: string;
  email: string;
}

type ReadonlyOptionalUser = ReadonlyOptional<User>;

const user1: ReadonlyOptionalUser = {
  id: 1,
  name: "John"
  // email 
};

const user2: ReadonlyOptionalUser = {
  
};
