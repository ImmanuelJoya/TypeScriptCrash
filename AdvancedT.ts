//Advanced types
// Interfaces vs Type Aliases
interface User {
    id: number;
    name: string;
}

interface Admin extends User { // Interface extension
    permissions: string[];
}

//the <T> stands for a generic type parameter, allowing the function to work with any type while maintaining type safety.
type ID = string | number; // Type alias
type Nullable<T> = T | null; // Generic type alias

// Generics (reusable type components)
function identity<T>(arg: T): T {
    return arg;
}

// Generic with constraints
function logLength<T extends { length: number }>(arg: T): T {
    console.log(arg.length);
    return arg;
}

// Generic interface
interface Repository<T> {
    findById(id: number): T | undefined;
    save(item: T): void;
    getAll(): T[];
}

// Utility types
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">; // Select specific keys
type TodoInfo = Omit<Todo, "completed">; // Remove specific keys
type PartialTodo = Partial<Todo>; // All properties optional
type ReadonlyTodo = Readonly<Todo>; // Immutable
type RequiredTodo = Required<Todo>; // All properties required