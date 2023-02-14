let Phrase = require("changjones1-palindrome");
alert(new Phrase("Madam, I'm Adam.").palindrome());
alert("fuck");
function jsAlert() {
	alert("JavaScript is working.");
}
function jsAlertTime() {
	let now = new Date();
	alert(`JS is working ${now}`);
}
addEventListener('DOMContentLoaded', (event) => {
	jsAlertTime();
});


