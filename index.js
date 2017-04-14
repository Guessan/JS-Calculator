var num1;
var num2;
var res;
var result;

document.addEventListener("DOMContentLoaded", function(){
	num1 = document.getElementById("num1");
	num2 = document.getElementById("num2");
	res = document.getElementById("result");
});


function addition(){
	result = +num1.value + +num2.value;
	res.value = result;
	//console.log(res.value);
	//var math = 7 + 7;
	//console.log(math);
};
function subtraction(){
	//result = +num1.value - +num2.value;
	//res.value = result;
	//console.log("Let's subtract");
	//console.log(7 - 7);
};
function multiplication(){
	//result = +num1.value * +num2.value;
	//res.value = result;
	//console.log("Let's multiply");
	//console.log(7 * 7);
};
function division(){
	//result = +num1.value / +num2.value;
	//res.value = result;
	//console.log("Let's divide");
	//console.log(7 / 7);
};
