var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Red = /** @class */ (function () {
    function Red(x, y) {
        this.x = x;
        this.y = y;
    }
    Red.prototype.add = function (x, y) {
        return this.x + this.y;
    };
    return Red;
}());
function add(x, y) {
    return x + y;
}
var add2 = function (x, y) {
    return x + y;
};
function reddead(obj) {
    console.log("this is: " + obj.label);
}
var objGo = { label: "hello" };
reddead(objGo);
function color(obj) {
    console.log("We have " + obj.number + " " + obj.color + " balls.");
}
var balls = { color: "green", number: 3 };
color(balls);
color({ color: "red", number: 2 });
function dog(obj) {
    return obj.frequencey;
}
var doggy = dog({ frequencey: 2000 });
console.log(doggy);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
var search;
search = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var s = search("red", "red");
console.log(s);
var myArr;
myArr = ["bob", "jack"];
var myStr = myArr[1];
console.log(myStr);
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var square = {};
square.sideLength = 3000;
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
console.log(c);
/*******************************/
var one = /** @class */ (function () {
    function one() {
    }
    return one;
}());
var two = /** @class */ (function (_super) {
    __extends(two, _super);
    function two() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    two.prototype.doo = function () { };
    return two;
}(one));
var three = /** @class */ (function (_super) {
    __extends(three, _super);
    function three() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    three.prototype.selected = function () { };
    return three;
}(one));
/*
class four implements oneOne{
    selected(){};
    //Error: Class 'four' incorrectly implements interface 'oneOne'.Property 'state' is missing in type 'four'.
}
*/
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello " + this.greeting;
    };
    return Greeter;
}());
var greetObj = new Greeter("world");
console.log(greetObj.greeting);
console.log(greetObj.greet());
/*******************************/
var passcode = "secret passcode";
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var point3d = { x: 1, y: 2, z: 3 };
console.log(point3d);
function Name(firstName) {
    var restOfNames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfNames[_i - 1] = arguments[_i];
    }
    console.log(firstName + " ** " + restOfNames.join(" ** "));
}
Name("John", "Red", "Blue", "Green", "purple");
function loggingIdentity(arg) {
    console.log(arg);
    return arg;
}
loggingIdentity("hello");
function loggingIdentityArr(arg) {
    console.log(arg.length);
    console.log(arg);
    return arg;
}
loggingIdentityArr(["a", "b", "c"]);
function loggingIdentity3(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
loggingIdentity3({ length: 10, value: 3 });
