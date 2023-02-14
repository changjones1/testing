let Phrase = require("changjones1-palindrome");
function jsAlert() {
	alert("JavaScript is working.");
}
function jsAlertTime() {
	let now = new Date();
	alert(`JS is working ${now}`);

	alert(new Phrase("Madam, I'm Adam.").palindrome());
	alert("fuck");
	alert("fuck");
}
addEventListener('DOMContentLoaded', (event) => {
	jsAlertTime();
});


