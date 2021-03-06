var Robot = function (name) {
    this.name = name;
}
function add(op1, op2) {
    this.name = this.name || "Human";
    return this.name + " can count to " + (op1 + op2);
}
var voltron = new Robot("Voltron");


// #1 Выведите результат сложения 0 и 1
// "Human can count to 1"
console.log(add(0, 1));

// #2 Выведи результат сложения Voltron 1 и 2 используя call
// “Voltron can count 3”
console.log(add.call(voltron, 1, 2));

// #3 Выведи результат сложения Voltron 20 и 30 используя apply
// “Voltron can count 50”
console.log(add.apply(voltron, [20, 30]));

// #4 Выведи результат сложения Voltron «drinking» и «beer» используя bind
// “Voltron can count drinkingbeer”
console.log(add.bind(voltron)("drinking", "beer"));

// #5 Написанный вами код должен вывести в консоль "Voltron" внутри setTimeout, 5-ью разными способами


var showName = function () {
    function PrintName() {
        this.name = this.name || "Human";
        return this.name;
    }
    let volt = this;
    let volt_name = this.name;
    setTimeout(function () {
        console.log(PrintName.apply(voltron));
        console.log(PrintName.call(voltron));
        console.log(PrintName.apply(volt));
        console.log(PrintName.call(volt)); 
        console.log(PrintName.bind(volt)()); 
        console.log(volt.name);
        console.log(volt_name);
    }, 1000);
}.bind(voltron)
showName();


