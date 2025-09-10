//  4. Создайте enum OrderStatus (Pending, Shipped, Delivered). Напишите функцию
//  getStatusMessage, которая возвращает строку в зависимости от статуса:
//  Pending → "Your order is pending."
//  Shipped → "Your order is on the way."
//  Delivered → "Your order has been delivered."
const enum OrderStatus { 
    Pending, 
    Shipped, 
    Delivered 
};

function VieStatusText(status: OrderStatus): string {
    switch (status) {
        case OrderStatus.Pending:
            return "Your order is pending.";
        case OrderStatus.Shipped:
            return "Your order is on the way.";
        case OrderStatus.Delivered:
            return"Your order has been delivered.";
        default:
            return "Неизвестный статус";
    }
}
export default VieStatusText;