/**
 * Created by championswimmer on 15/01/17.
 */



class Animal {
    speak() {
        return this;
    }
    static eat() {
        return this;
    }
}

var num = 20;

function funGen() {
    var num = 10;
    return function () {
        return num++;
    }
}

dog = new Animal();
dog == dog.speak();

f = funGen();