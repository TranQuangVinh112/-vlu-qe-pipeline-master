const { login } = require("./auth");

describe("Login Regression Tests", () => {

    test("Login successfully with correct credentials", () => {
        expect(login("admin", "123")).toBe(true);
    });

    test("Login fails with wrong password", () => {
        expect(login("admin", "wrong")).toBe(false);
    });

    test("Username cannot be empty", () => {
        expect(() => login("", "123")).toThrow("Username cannot be empty");
    });

    test("Password cannot be empty", () => {
        expect(() => login("admin", "")).toThrow("Password cannot be empty");
    });

    test("Password contains special character", () => {
        expect(() => login("admin", "12!3"))
            .toThrow("Password contains special character");
    });

    test("Locked account cannot login", () => {
        expect(() => login("locked", "123"))
            .toThrow("Account is locked");
    });

});
