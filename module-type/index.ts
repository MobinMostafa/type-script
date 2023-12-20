import { userName, age } from "./student"

import {User} from "../class-type/index"

const studentInfo = (): void => {
   console.log(`name: ${userName} age: ${age} `)
}

studentInfo()

let user = new User("Rafi", 25);

console.log(user.display())
