// Employee (базовый класс) с свойствами id, name, salary.
//  Manager наследует от Employee и добавляет свойство team: Employee[].
//  Director наследует от Manager и добавляет свойство department: string.
//  Реализуйте метод getBonus(): number в каждом классе.Employee: бонус = 10% от salary. Manager:
//  бонус = 15% от salary + 5% за каждого подчиненного. Director: бонус = 20% от salary + 10% за каждого
//  подчиненного в команде.
class Employee{
    public id : number;
    public name : string;
    public salary : number;

    constructor(id : number, name : string, salary : number){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    getBonus(): number{
        return((this.salary * 10)/100)
    }
}
class Manager extends Employee{
    team: Employee[]
     constructor(id : number, name : string, salary : number, team: Employee[]){
        super(id,name,salary);
        this.team = team;
    }
    override getBonus(): number {
        return (((this.salary * 15)/100) + (this.team.length * ((this.salary * 15)/100)));
    }
}
class Director extends Manager{
    department: string;
    constructor(id : number, name : string, salary : number, team: Employee[], department : string){
        super(id,name,salary,team);
        this.department = department;
    }
    override getBonus(): number {
        return (((this.salary * 20)/100) + (this.team.length * ((this.salary * 10)/100)));
    }
}