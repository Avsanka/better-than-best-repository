buttons = document.getElementsByClassName("increment-button");
var input = document.getElementById("num-input");
var ii = false, pp = false, a = 0;

num = function (event) {
    var i = event.target.textContent;
    if (ii) {
        input.value = input.value + i;
    }
    else {
        input.value = i;
        ii = true
    }

};
plus = function (event) {
    ii = false;

    if (pp) {
        input.value = input.value + a
    }
    else {
        a = input.value;
        pp = true;
    }
}
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", num);
}
