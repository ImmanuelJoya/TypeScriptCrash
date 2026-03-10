//Variables & Data Types
// Modern JS/TS - use const by default, let when reassignment needed
const userName: string = "Immanuel"// String
export const  age : number = 23// Number
const isStudent: boolean = false// Boolean
const tasks: string[] = ["Task 1", "Task 2", "Task 3"]// Array
const user: { name: string; id: number } = { name: "Chief", id: 1 }; // Object

// console.log(`Name: ${userName} and I'm ${age} years old. Am I a student? ${isStudent}`)
console.log("My tasks for today:")
tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`)
    
})
console.log (`You have ${tasks.length} tasks`) 