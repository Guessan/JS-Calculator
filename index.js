var num1;
var num2;
var res;
var results;

document.addEventListener("DOMContentLoaded", function(){
	num1 = document.getElementById("num1");
	num2 = document.getElementById("num2");
	res = document.getElementById("results");
});


function addition(){
	results = +num1.value + +num2.value
	res.value = results;
	console.log(res.value);
	//var math = 7 + 7;
	//console.log(math);
};
function subtraction(){
	results = +num1.value - +num2.value
	//res.value = results;
	//console.log("Let's subtract");
	//console.log(7 - 7);
}
function multiplication(){
	results = +num1.value * +num2.value
	//res.value = results;
	//console.log("Let's multiply");
	console.log(7 * 7);
}
function division(){
	results = +num1.value / +num2.value
	//res.value = results;
	//console.log("Let's divide");
	//console.log(7 / 7);
}
