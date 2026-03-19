//Function Deep Dive

/// Function declarations (hoisted)
function add(a: number, b: number): number {
    return a + b;
}

// Function expressions
const multiply = function (a: number, b: number): number {
    return a * b;
}; 

// Arrow functions (lexical 'this' binding)
const divide = (a: number, b: number): number => a / b;

// Default parameters
function greet(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}

// Rest parameters
// Example: Summing all arguments
function sumAll(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0);
}

// Destructuring parameters
// Example: Destructuring an object parameter
function printUser({ name, age }: { name: string; age: number }): void {
    console.log(`${name} is ${age} years old`);
}

// Higher-order functions (functions that take/return functions)
// Example: A function that returns another function (closure)
function createMultiplier(factor: number) {
    return (num: number) => num * factor;
}
const triple = createMultiplier(3);
console.log(triple(5)); // 15
