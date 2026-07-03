// Outer function
const createLoginSystem = (correctPassword, maxAttempts) => {

    // Variables stored in the outer function
    let attemptsRemaining = maxAttempts;
    let accountLocked = false;

    // Inner arrow function (Closure)
    return (enteredPassword) => {

        if (accountLocked) {
            return "Account is locked. Contact customer support.";
        }

        if (enteredPassword === correctPassword) {
            attemptsRemaining = maxAttempts;
            return "Login Successful!";
        }

        attemptsRemaining--;

        if (attemptsRemaining === 0) {
            accountLocked = true;
            return "Incorrect password. Account has been locked.";
        }

        return `Incorrect password. Attempts remaining: ${attemptsRemaining}`;
    };
};

// Create login object
const login = createLoginSystem("Shop123", 3);

// Testing
console.log(login("hello"));
console.log(login("password"));
console.log(login("Shop123"));
console.log(login("wrong"));
console.log(login("wrong"));
console.log(login("wrong"));
console.log(login("Shop123"));
};