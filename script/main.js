let Phrase = require("changjones1-palindrome");
alert("alert not in a funciton");
alert(new Phrase("Madam, I'm Adam.").palindrome());
//function jsAlert() {
//	alert("JavaScript is working.");
//}
function jsAlertTime() {
	let now = new Date();
	alert(`JS is working ${now}`);
}
function stupidFuck() {
	console.log("stupidFuck function called");
	let x = document.getElementById("textarea").value;
	console.log("x is " + x);
	let result = new Phrase("fuck you").palindrome();
	alert("Palindrome result: " + result);
	alert("fucking stupid bitch fuck");
}

addEventListener('DOMContentLoaded', (event) => {
	jsAlertTime();
});
