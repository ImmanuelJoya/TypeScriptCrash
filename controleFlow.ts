// If/else with type guards
import { age } from "./VarNdataTypes.ts"; // Import the age variable from VarNdataTypes.ts


function checkStatus(status: string): string {
    if (status === "pending") {
        return " Waiting...";
    } else if (status === "done") {
        return " Complete!";
    } else {
        return " Unknown";
    }
}

// Switch statement
function getPriorityColor(priority: "low" | "medium" | "high"): string {
    switch (priority) {
        case "high": return "red";
        case "medium": return "yellow";
        case "low": return "green";
        default: return "gray";
    }
}

// Ternary operator (concise conditionals)
const message = age >= 18 ? "Adult" : "Minor";

// Loops
const numbers = [1, 2, 3, 4, 5];

// for...of (iterates values)
for (const num of numbers) {
    console.log(num);
}

// forEach with arrow function
numbers.forEach((num, index) => {
    console.log(`${index}: ${num}`);
});

// map (transform array)
const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]

// filter (select items)
const evens = numbers.filter(num => num % 2 === 0); // [2, 4]

// reduce (aggregate)
const sum = numbers.reduce((acc, num) => acc + num, 0); // 15