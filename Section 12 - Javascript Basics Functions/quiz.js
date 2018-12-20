function isEven(num) {
    return num % 2 === 0;
}

function factorial(num) {
    if (num <= 1) {
        return 1;
    }
    
    return num * factorial(num - 1);
}

function kebabToSnake(str) {
    return String(str).replace(/-/g, '_');
}

console.log("isEven()");

console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));

console.log("factorial*()");

console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));

console.log("kebabToSnake()");

console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-awesome"));
console.log(kebabToSnake("blah"));