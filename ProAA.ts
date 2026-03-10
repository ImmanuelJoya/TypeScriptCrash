// Promises & Async/Await

//whats the purpose of promises? 
// Promises are a way to handle asynchronous operations in JavaScript and TypeScript. 
// They represent a value that may not be available yet but will be resolved in the future.
//  Promises allow you to write cleaner and more manageable code when dealing with asynchronous tasks,
//  such as fetching data from an API or performing time-consuming operations, 
// without getting into callback hell.

//whats the purpose of async/await? 
// Async/await is a syntactic sugar built on top of promises
//  that allows you to write asynchronous code in a more synchronous and readable manner.
//  The 'async' keyword is used to declare a function as asynchronous,
//  and the 'await' keyword is used to pause the execution of the function until a promise is resolved.
//  This makes it easier to work with asynchronous code, 
//  as it avoids the need for chaining .then() calls 
// and makes error handling more straightforward with try/catch blocks.

// Promise creation
function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function
async function fetchUserData(userId: number): Promise<User> {
    try {
        const response = await fetch(`/api/users/${userId}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: User = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch user:", error);
        throw error; // Re-throw or handle gracefully
    }
}



// Promise.all for parallel execution
async function loadDashboardData() {
    const [user, tasks, notifications] = await Promise.all([
        fetchUserData(1),
        fetchTasks(),
        fetchNotifications()
    ]);
    return { user, tasks, notifications };
}

// Promise.race for timeout patterns
async function fetchWithTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
    const timeout = new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error("Timeout")), timeoutMs);
    });
    return Promise.race([promise, timeout]);
}