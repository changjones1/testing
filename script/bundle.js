(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"changjones1-palindrome":2}],2:[function(require,module,exports){

module.exports = Phrase;

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

},{}]},{},[1]);
