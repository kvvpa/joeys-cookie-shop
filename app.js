'use strict'

// let firstName = 'Joey';
// let lastname = 'Cristina';
// let numberOfDogs = 1; 
// let lovesCoffee = true;

// console.log(firstName);

let time = prompt('What hour is it? (0-24)?');
let message = '';

if (time <= 11) {
    message = 'Good Morning!';
} else if (time <= 16) {
    message = 'Good Afternoon!';
} else if (time <= 24){
    message = 'Good Day!';
} else {
    message = 'What are you trying to do?';
}
document.write(message);

