//Classes and OOP
 

// Class definition
abstract class Entity {
    protected id: number;
    protected createdAt: Date;

    //whats a constructor? A constructor is a special method in a class that is automatically called when an instance of the class is created. It is used to initialize the properties of the class and set up any necessary state. In TypeScript, constructors can also take parameters to allow for more flexible object creation.
    constructor() {
        this.id = Date.now();
        this.createdAt = new Date();
    }

    abstract getInfo(): string; // Must be implemented by subclasses

    getId(): number {
        return this.id;
    }
}

// Inheritance
class TaskItem extends Entity {
    private _title: string; // Private field
    completed: boolean; // Public by default

    constructor(title: string, public priority: Priority = 2) {
        super();
        this._title = title;
        this.completed = false;
    }

    // Getter
    get title(): string {
        return this._title.toUpperCase();
    }

    // Setter with validation
    set title(value: string) {
        if (value.length < 3) {
            throw new Error("Title too short");
        }
        this._title = value;
    }

    // Method
    toggle(): void {
        this.completed = !this.completed;
    }

    getInfo(): string {
        return `[${this.priority}] ${this.title} - ${this.completed ? "Done" : "Pending"}`;
    }

    // Static method
    static createDefault(): TaskItem {
        return new TaskItem("New Task");
    }
}

// Interface implementation
interface Printable {
    print(): void;
}

class TaskManager implements Printable {
    private tasks: TaskItem[] = [];

    add(task: TaskItem): void {
        this.tasks.push(task);
    }

    getTasks(): readonly TaskItem[] { // Return immutable array
        return this.tasks;
    }

    print(): void {
        this.tasks.forEach(t => console.log(t.getInfo()));
    }
}
