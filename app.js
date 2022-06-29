"use strict";

function generateGreeting() {
  let firstName = getFirstName();
  let message = timeOfDay();
  let isCool = isJoeyCool();
  return document.write(message + firstName + "! " + isCool);
}

function getFirstName() {
  let firstName = prompt("What is your name?");
  return firstName;
}

function timeOfDay() {
  let time = prompt("What hour is it? (0-24)?");
  let message = "";
  
  if (time <= 11) {
    message = "Good Morning, ";
  } else if (time <= 16) {
    message = "Good Afternoon, ";
  } else if (time <= 24) {
    message = "Good Evening, ";
  } else {
    message = "Have a great day, ";
  }
  return message;
}

function isJoeyCool() {
let isCool = '';
let message = '';
isCool = confirm("Is Joey really really cool?");

if (isCool === true) {
  // alert("Thank you!");
message = " You're also really really cool.";
} else {
  // alert("Rude.");
  message = " You're rude.";
}
return message;
}

// let body = document.getElementById('body');
// let color = prompt('Pick a color: orange, red, blue, or yellow');
// body.classList.add(color);