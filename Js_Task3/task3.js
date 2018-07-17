var timer = null;
var timer2 = null;
var timerId = null;

function Hello() {
    setTimeout(function () {
        console.log("Hello World");
    }, 5000);
}
function Welcome() {
    if (!timer) {
        timer = setInterval(function () {
            console.log("You are welcome");
        }, 3000);
    }
    else {
        timer = clearInterval(timer);
    }
}
function Seconds() {
    if (!timer2) {
        let number = Math.floor(Math.random() * 4) + 1;
        console.log(number + " seconds");
        timer2 = setInterval(function () {
            console.log("phrase");
        }, number * 1000);
    }
    else {
        timer2 = clearInterval(timer2);
    }
}
function Text() {
    clearTimeout(timerId);
    timerId = setTimeout(
        function () {
            console.log(document.getElementById("text").value);
        }, 1000);
}