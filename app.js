"use strict";

// let firstName = 'Joey';
// let lastname = 'Cristina';
// let numberOfDogs = 1;
// let lovesCoffee = true;

// console.log(firstName);
let userName = prompt("What is your name?");
let time = prompt("What hour is it? (0-24)?");
let message = "";

if (time <= 11) {
  message = "Good Morning, ";
} else if (time <= 16) {
  message = "Good Afternoon, ";
} else if (time <= 24) {
  message = "Good Day, ";
} else {
  message = "Have a great day, ";
}

document.write(message + userName + "!");

let result = confirm("Is Joey really really cool?");

if (result === true) {
  alert("Thank you");
  document.write(" You're also very very cool.")
} else {
  alert("Rude.");
  document.write(" You're rude.")
}

// let backgroundColor = '';

// document.getElementById

// backgroundColorprompt("What's your favorite color?");

