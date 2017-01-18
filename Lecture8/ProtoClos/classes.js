/**
 * Created by championswimmer on 14/01/17.
 */
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

class Dog extends Animal {

    speak() {
        console.log(this.name + ' barks.');
    }
}

var d = new Dog('Mitzie');
d.speak();


function myFunc () {
    return function () {}
}

