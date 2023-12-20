"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var student_1 = require("./student");
var index_1 = require("../class-type/index");
var studentInfo = function () {
    console.log("name: ".concat(student_1.userName, " age: ").concat(student_1.age, " "));
};
studentInfo();
var user = new index_1.User("Rafi", 25);
console.log(user.display());
