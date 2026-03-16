var p = 50000;
var r = 0.10;
var n = 1;
var t = 3;

var a = p * (1 + r) ** t;

var CI = a - p;

console.log("The compound interest after " + t + " years is: " + CI);

document.getElementById("result").innerHTML = "The compound interest after " + t + " years is: " + CI;