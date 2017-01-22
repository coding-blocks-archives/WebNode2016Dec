/**
 * Created by championswimmer on 22/01/17.
 */


window.onload = function () {
    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');

    btn1.onclick = function () {
        console.log('1.1');
    }

    btn1.onclick = function () {
        console.log('1.2');

    }

    btn2.onclick = function () {
        console.log('2.0');
    }

    let f1 = function () {
        console.log('2.1');
    }

    let f2 = function () {
        console.log('2.2');
    }

    btn2.addEventListener('click', f1)

    btn2.addEventListener('click', f2)

    btn2.removeEventListener('click')



}