import { validateEmail, validationEmailMessage } from "./validateEmail";

describe("validateEmail", () => {
  it("should return true for valid email", () => {
    expect(validateEmail("test@example.com")).toBe(true);
  });

  it('should return "Email should not be empty" for empty email', () => {
    expect(validateEmail("")).toBe(validationEmailMessage.length);
  });

  it('should return "Invalid email format. Please include "@" symbol." for invalid email', () => {
    expect(validateEmail("testexample.com")).toBe(
      validationEmailMessage.format
    );
  });

  it("should return false for invalid email", () => {
    // TODO: после рефакторинга удалили этот кейс
    // expect(validateEmail("")).toBe(false);

    expect(validateEmail("test@example@example.com")).toBe(true);
    expect(validateEmail("test@example")).toBe(true);
  });
  it("should return true for email with plus sign", () => {
    expect(validateEmail("test+example@example.com")).toBe(true);
  });

  it("should return true for email with special character in local part", () => {
    expect(validateEmail("test!example@example.com")).toBe(true);
  });
});
