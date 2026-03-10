// Promises & Async/Await

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