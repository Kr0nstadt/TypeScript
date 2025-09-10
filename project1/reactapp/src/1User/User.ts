// 1. Создайте интерфейс User с полями:
//  id (number)
//  name (string)
//  email (string, опционально)
//  isActive (boolean, по умолчанию true).
//  Напишите функцию createUser, которая принимает эти поля и возвращает объект пользователя.

 interface User { 
  id : number;
  name: string;
  email? : string;
  isActive : boolean;
  
    
  }
function createUser(Userid : number, Username : string, Useremail : string,UserisActive : boolean) : User {
    return {
        id : Userid,
        name : Username,
        email : Useremail,
        isActive : UserisActive
    };
}
function VieOne() : void{
    let user = createUser(1,"Stepan", "мыло", true)
    console.log("id : " + user.id +
        + "/nname : " + user.name + 
        + "/nemail : " + user.email + 
        + "/nisActive : " + user.isActive
     )
}

export default VieOne;