var age = prompt("What is your age?");

if (age < 0) {
    alert("Age cannot be negative!");
}

if (age === 21) {
    alert("Happy 21st birthday!");
}

if (age % 2 === 1) {
    alert("Your age is odd!");
}

if (age % Math.sqrt(age) === 0) {
    alert("Your age is a perfect square!");
}
