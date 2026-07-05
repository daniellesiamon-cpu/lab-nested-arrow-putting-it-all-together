const createLoginTracker = (userInfo) => {
  const MAX_ATTEMPTS = 3;
  let attemptCount = 0;

  // This inner function forms a "closure", remembering attemptCount across calls
  return (passwordAttempt) => {
    attemptCount++;

    // 1. If they've already failed 3 times, lock them out immediately on the 4th try
    if (attemptCount > MAX_ATTEMPTS) {
      return "Account locked due to too many failed login attempts";
    }

    // 2. If the password matches, grant access
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    }

    // 3. If it's exactly the 3rd failed attempt, lock the account
    if (attemptCount === MAX_ATTEMPTS) {
      return "Account locked due to too many failed login attempts";
    }

    // 4. For attempts 1 and 2, show the failure count
    return `Attempt ${attemptCount}: Login failed`;
  };
};

// Make sure the function is exported so Jest can test it
module.exports = { createLoginTracker };
