function login(username, password) {
    if (username === "admin" && password === "123") {
        return true;
    }
// Updated login logic for feature branch
    if (username === "") {
        throw new Error("Username cannot be empty");
    }

    if (password === "") {
        throw new Error("Password cannot be empty");
    }

    if (password.includes("!")) {
        throw new Error("Password contains special character");
    }

    if (username === "locked") {
        throw new Error("Account is locked");
    }

    return false;
}

module.exports = { login };
