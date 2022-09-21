var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.showName = function (uname, email) {
        console.log('welcome to TS ${uname} ${email}');
    };
    return MyClass;
}());
var classDemo = new MyClass();
classDemo.showName('admin', 'aa@mm.com');
