//pasting the below from the changjones1-palindrome node module
//#!/usr/bin/node  //comment out in main.js
//module.exports = Phrase;  //comment out in main.js

//define a new object

function Phrase(content) {
	this.content = content;

	this.louder = function(){
		return this.content.toUpperCase();
	}
	this.palindrome = function palindrome() {
		return this.processedContent() === reverse(this.processedContent());
	}
	this.processedContent = function processedContent() {
		return this.letters().toLowerCase();
	}
	this.letters = function (){
		return this.content.match(/[a-z]/ig).join("");
	}
}

function TranslatedPhrase(content, translation){
	this.content = content;
	this.translation = translation;
	this.processedContent = function processedContent() {
		return this.translation.toLowerCase();
	}
} 

TranslatedPhrase.prototype = new Phrase();

function reverse(str){
	return Array.from(str).reverse().join("");
}

function palindrome(string){
	let processedContent = string.toLowerCase();
	return processedContent === reverse(processedContent);
}





//everythign below here was already in this main.js file
//let Phrase = require("changjones1-palindrome");  //comment out afer putting the palindrome stuff into main.js
//alert("alert not in a funciton");
//alert(new Phrase("Madam, I'm Adam.").palindrome());
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
	let result = new Phrase(x).palindrome();
	alert("Palindrome result: " + result);
	//alert("end stupidFuck function");
}

addEventListener('DOMContentLoaded', (event) => {
//	jsAlertTime();
	console.log("DOMContentLoaded");
});
