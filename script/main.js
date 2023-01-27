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
