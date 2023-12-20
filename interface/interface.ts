interface UserFormatter {
    formatUser : () => string;
}

class User implements UserFormatter {
    constructor(private userName:string, private age:number){}

    formatUser = () => {
       return `name: ${this.userName} age: ${this.age}`
    }
}

let user = new User("mobin" , 27)

console.log(user.formatUser())