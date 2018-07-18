var timer_welcome = null;
var timer_seconds = null;
var timer_text = null;

function PrintHello() {
    setTimeout(function () {
        console.log("Hello World");
    }, 5000);
}
function PrintWelcome() {
    if (!timer_welcome) {
        timer_welcome = setInterval(function () {
            console.log("You are welcome");
        }, 3000);
    }
    else {
        timer_welcome = clearInterval(timer_welcome);
    }
}
function PrintSeconds() {
    if (!timer_seconds) {
        let number = Math.floor(Math.random() * 4) + 1;
        console.log(number + " seconds");
        timer_seconds = setInterval(function () {
            console.log("phrase");
        }, number * 1000);
    }
    else {
        timer_seconds = clearInterval(timer_seconds);
    }
}
function PrintText() {
    clearTimeout(timer_text);
    timer_text = setTimeout(
        function () {
            console.log(document.getElementById("text").value);
        }, 1000);
}