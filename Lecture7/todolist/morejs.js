/**
 * Created by championswimmer on 07/01/17.
 */

function myFunc () {
    console.log("hello world");
    console.log(this);
    //myOtherFunc();
    return "done"
}

// function myOtherFunc() {
//     console.log(this)
// }

function Student(name, age) {
    this.name = name;
    this.age = age;
}

function counter (start, count) {
    this.start = start;
    this.count = count;
}

var b = new myFunc();


var stu = new Student("Arnav", "22");


var myCounter = new counter(10, function () {
    this.start += 5;
    console.log('counting');
    return this.start;
});


function f1 () {
    console.log("f1");
    return function () {
        console.log("f2");
    }
}



