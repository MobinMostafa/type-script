var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User1 = /** @class */ (function () {
    function User1(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    return User1;
}());
var Student1 = /** @class */ (function (_super) {
    __extends(Student1, _super);
    function Student1(userName, age, studentId) {
        var _this = _super.call(this, userName, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student1.prototype.display1 = function () {
        console.log("name: ".concat(this.userName, "  age: ").concat(this.age, " student Id: ").concat(this.studentId));
    };
    return Student1;
}(User1));
var student2 = new Student1("Mobin mostafa", 27, 101);
student2.display1();
