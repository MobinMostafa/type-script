
abstract class User1{
    userName: string;
    age: number;

    constructor(userName:string, age:number){
         this.userName = userName;
         this.age = age;
    }
    abstract display1(): void ;

}

class Student1 extends User1 {
     
    studentId: number
    constructor(userName: string, age:number, studentId: number){
           super(userName,age)
           this.studentId = studentId
    }
    display1(): void{
        console.log(`name: ${this.userName}  age: ${this.age} student Id: ${this.studentId}`)
    }
}

let student2 = new Student1("Mobin mostafa", 27, 101)

student2.display1()