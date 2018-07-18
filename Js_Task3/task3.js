let timer_welcome = null;
let timer_seconds = null;
let timer_text = null;

document.getElementById("hello").addEventListener("click", PrintHello);
document.getElementById("welcome").addEventListener("click", PrintWelcome);
document.getElementById("seconds").addEventListener("click", PrintSeconds);
document.getElementById("text").addEventListener("keypress", PrintText);


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
        const number = Math.floor(Math.random() * 4) + 1;
        timer_seconds = setInterval(()=> {
            console.log(`${number} seconds`);
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