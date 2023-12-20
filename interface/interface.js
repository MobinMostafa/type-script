var User = /** @class */ (function () {
    function User(userName, age) {
        var _this = this;
        this.userName = userName;
        this.age = age;
        this.formatUser = function () {
            return "name: ".concat(_this.userName, " age: ").concat(_this.age);
        };
    }
    return User;
}());
var user = new User("mobin", 27);
console.log(user.formatUser());
