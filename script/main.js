let Phrase = require("changjones1-palindrome");
alert("alert not in a funciton");
alert(new Phrase("Madam, I'm Adam.").palindrome());
function jsAlert() {
	alert("JavaScript is working.");
}
function jsAlertTime() {
	let now = new Date();
	alert(`JS is working ${now}`);
//	alert("alerts in a function");
//	alert("fuck");
//	alert("fuck");
}
addEventListener('DOMContentLoaded', (event) => {
	jsAlertTime();
});
function buttonPress(){
	let x = document.getElementById("textarea").value;
	let result = new Phrase(x).palindrome();
	alert("Palindrome result: " + result);
}
