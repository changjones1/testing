let Phrase = require("changjones1-palindrome");
alert("alert not in a funciton");
alert(new Phrase("Madam, I'm Adam.").palindrome());
function jsAlert() {
	alert("JavaScript is working.");
}
function jsAlertTime() {
	let now = new Date();
	alert(`JS is working ${now}`);
}
function buttonPress(){
	console.log("buttonPress function called");
	let x = document.getElementById("textarea").value;
	let result = new Phrase(x).palindrome();
	alert("Palindrome result: " + result);
}

addEventListener('DOMContentLoaded', (event) => {
	jsAlertTime();
});
