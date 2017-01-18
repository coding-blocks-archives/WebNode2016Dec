/**
 * Created by championswimmer on 14/01/17.
 */

function Person(name, age) {
    this.name = name;
    this.age = age;
}

var p01 = new Person("Asdasd", 213);


var p = new Person("Ram", 23);

Person.prototype.nationality = "India";
Person.prototype.someFunc = function () {

}

// console.log(p);
// console.log(p.prototype);

var p1 = new Person("Shyam", 22);
// console.log(p1);

var p3 = Object.create(Person.prototype);



var a = new Object();
a.p = 1;
var b = Object.create(a);
b.q = 2;
var c = Object.create(b);
c.r = 3;

String.prototype.sayHello = function () {
    console.log('hello');
};

var MartianPerson = Object.create(Person);

class Student {
    constructor (name) {
        this.name = name;
    }
}
