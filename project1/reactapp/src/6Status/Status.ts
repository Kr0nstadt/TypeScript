// 6. Создайте тип Status, который может принимать одно из трех строковых значений: 'active',
//  'inactive', или 'new'. Напишите функцию getStatusColor(status: Status): string,
//  которая возвращает цвет (строку) для каждого статуса (например, 'green' для 'active').
type Status = 'active' | 'inactive' | 'new';
function getStatusColor(status: Status): string{
    if(status === 'active'){
        return "red";
    }
    else if(status === "inactive"){
        return "yellow";
    }
    else if(status === "new"){
        return "green";
    }
    else{
        return "white";
    }
}