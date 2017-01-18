/**
 * Created by championswimmer on 14/01/17.
 */


var a = 10;

function someFunc() {
    let a = 20;
    const b = {a: 10};
    console.log(a);
    b.a = 35;

    if (true) {
        let a = 30;
        let b = 10;
        console.log(b);
        console.log(a);
    }
    console.log(a);
}

someFunc();