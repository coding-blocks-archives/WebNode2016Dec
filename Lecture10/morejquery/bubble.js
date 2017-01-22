/**
 * Created by championswimmer on 22/01/17.
 */


window.onload = function () {

    let one = document.getElementById('one')
    let two = document.getElementById('two')
    let three = document.getElementById('three')

    // one.addEventListener('click', clicker('one'))
    // two.addEventListener('click', clicker('two'))
    // three.addEventListener('click', clicker('three'))
    // one.addEventListener('click', clicker('one'), true)
    // two.addEventListener('click', clicker('two'), true)
    // three.addEventListener('click', clicker('three'), true)

    $('div').click(function (event) {
        console.log(event.currentTarget);
        event.stopPropagation();
    })

};

function clicker (arg) {
    return function () {
        console.log(arg);
    }
}

function clicked (el) {
    console.log(el.id);
}