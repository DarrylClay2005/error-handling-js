function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        console.log(a / b);
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("Execution complete.");
    }
}


