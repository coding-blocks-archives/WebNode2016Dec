/**
 * Created by championswimmer on 22/01/17.
 */

$(function () {
    $('#btn2').click(function () {
        console.log('clicked two');
    })

    $('#btn1').click(function () {
        let count = 0;
        let loopId = setInterval(function () {
            if (count >= 9) clearInterval(loopId);
            console.log('clicked one');
            count++;
        }, 1000)


    })
})

function runOneSec () {
    let start = new Date().getTime();
    while (new Date().getTime() < start + 1000);
}
