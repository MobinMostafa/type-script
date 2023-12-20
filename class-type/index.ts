
export class User{

    userName:string;
    age:number;

    constructor(userName:string, age:number){
        this.userName = userName;
        this.age = age;
    }

    display() {
        return `name : ${this.userName} age : ${this.age}`
    }
}

let user = new User("mobin mostafa",27)

//  console.log(user.display())

// inheritance class 

class Student extends User {
       
    studentId:number;

    constructor(userName:string, age:number, studentId:number){
        super(userName,age);
        this.studentId = studentId;
    }
    studentInfo() : void {
        console.log(`name : ${this.userName} age : ${this.age} Student Id : ${this.studentId}`)
    }

}

let student1 = new Student("Rafi Ahmed", 25, 103)

student1.studentInfo()

// console.log(student1.display())