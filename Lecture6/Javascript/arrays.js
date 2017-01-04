/**
 * Created by championswimmer on 01/01/17.
 */

function arrayFunction (item, index, arr) {
    console.log(item + " " + index);
    console.log(arr);
    arr[index] = ++item;
}

function mapFunc (item, index, arr) {
    return 4 * item;
}

function reducer (accum, item, index, arr) {
    if (index == 0) accum = 0;

    return accum + item;
}


window.onload = function () {
    var myArr = [1,2,3,4,5,6];
    // myArr.forEach(arrayFunction);

    var newArr = myArr.map(mapFunc);
    var sqrArr = myArr.map(function(x) {return x*x});
    var oldArr = sqrArr.map(Math.sqrt);

    var sum = oldArr.reduce(reducer);

    console.log(oldArr);
    console.log(sum);
};

