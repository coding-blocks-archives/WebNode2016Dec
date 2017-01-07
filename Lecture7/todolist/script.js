/**
 * Created by championswimmer on 07/01/17.
 */


obj = {};

obj.a = 10;
obj.b = "hello";
obj.c = true;
// {a:10, b:"hello", c: true}

obj.f = function () {return "wow"};
console.log(obj);
obj.f = obj.f.toSource();
console.log(obj);

sessionStorage.setItem("o", JSON.stringify(obj));

stored = sessionStorage.getItem("o");
console.log(stored);

origObj = JSON.parse(stored);
console.log(origObj);
origObj.f = eval(origObj.f);
console.log(origObj);
//
// alpha = 10;
// "alpha"
// "function () {return \"wow\"}"


// function fun1 () {
//     return 1;
// }
// function fun2 () {
//     return 2;
// }

for (var i = 1; i <3; i++) {
    console.log("function fun" + i + " () {return " + i +"}");
    console.log(eval("function fun" + i + " () {return " + i +"}"));
}


obj.g = 10;
obj['h'] = 20;

students  = [ "Asda", "ASdsad", "amshcj"];

for (student of students) {
    student
}