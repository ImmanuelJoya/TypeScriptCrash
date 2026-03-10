//TypeScript Essentials
//Type System Fundamentals

// Basic types
let username: string = "dev";
let count: number = 42;
let isDone: boolean = false;
let anything: any = 4; // Avoid using 'any' since it defeats type safety

// Union types (either/or)
type Status = "pending" | "in-progress" | "completed";
let taskStatus: Status = "pending";

// Literal types
type Priority = 1 | 2 | 3;
let taskPriority: Priority = 2;

// Arrays
let names: string[] = ["Immanuel", "Joy"];
let scores: Array<number> = [95, 87, 92]; // Generic syntax

// Tuples (fixed-length, typed arrays) 
//Purpose: To represent a fixed number of elements with specific types, often used for structured data like coordinates, user info, etc.
let coordinate: [number, number] = [10, 20];
let userTuple: [string, number, boolean] = ["Immanuel", 23, true];

// Objects
interface Task {
    id: number;
    title: string;
    description?: string; // Optional property
    completed: boolean;
    priority: Priority;
    tags: string[];
    createdAt: Date;
}

const myTask: Task = {
    id: 1,
    title: "Learn TypeScript",
    completed: false,
    priority: 1,
    tags: ["coding", "education"],
    createdAt: new Date()
};