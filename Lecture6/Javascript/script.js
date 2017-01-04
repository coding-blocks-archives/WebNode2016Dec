/**
 * Created by championswimmer on 01/01/17.
 */

window.onload = function () {
    var newtodo = document.getElementById("newtodo");
    var addtodo = document.getElementById("addtodo");
    var todolist = document.getElementById("todolist");

    addtodo.onclick = function () {
        var todo = newtodo.value;

        todolist.innerHTML +=
                "<li>" +
                    "<span>" +
                todo + "</span>" +
                "<button onclick='strikeButton(this)'>Done</button>" +
                "</li>"
    }
};

function strikeToggle (element) {
    console.log(element.parentNode.children);

    if (element.style.textDecoration == "line-through") {
        element.style.textDecoration = "";
    } else {
        element.style.textDecoration = "line-through";
    }
}

function strikeButton (el) {
    console.log(el.parentNode.children);
    strikeToggle(el.parentNode.children[0])
}
