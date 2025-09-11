// 8. Создайте тип EventHandler, который генерирует имена методов обработчиков событий вида
//  onClick, onHover и т.д., на основе union-типа событий: 'click' | 'hover' | 'submit'.

type Event = 'click' | 'hover' | 'submit';

type EventHandler<T extends string> = {
    [P in T as `on${Capitalize<P>}`]: () => void;
};

type EventHandlers = EventHandler<Event>;

const handlers: EventHandlers = {
    onClick: () => {
        console.log('Клик произошел!');
    },
    onHover: () => {
        console.log('Наведение мыши!');
    },
    onSubmit: () => {
        console.log('Форма отправлена!');
    }
};

handlers.onClick();   
handlers.onHover();   
handlers.onSubmit(); 