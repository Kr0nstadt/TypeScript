// 13. Создайте тип ApiRoutes, который преобразует union-типы путей, например '/user' |
//  '/post', в тип с методами API: { getUser(): void; getPost(): void }. Используйте
//  шаблонные литеральные типы и отображаемые типы.\

type ApiRoutes<Paths extends string> = {
    [P in Paths as `get${Capitalize<RemoveSlash<P>>}`]: () => void;
};

type RemoveSlash<T extends string> = T extends `/${infer R}` ? R : T;

type Capitalize<T extends string> = T extends `${infer First}${infer Rest}`
    ? `${Uppercase<First>}${Rest}`
    : T;

type Routes = '/user' | '/post' | '/comment' | '/settings';

type ApiRoutesType = ApiRoutes<Routes>;


const api: ApiRoutesType = {
    getUser: () => {
        console.log('Fetching user data...');
    },
    getPost: () => {
        console.log('Fetching post data...');
    },
    getComment: () => {
        console.log('Fetching comment data...');
    },
    getSettings: () => {
        console.log('Fetching settings data...');
    }
};

api.getUser();    // "Fetching user data..."
api.getPost();    // "Fetching post data..."
api.getComment(); // "Fetching comment data..."