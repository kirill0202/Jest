import { checkAge, divideNumbers } from "./utils";

describe("utils", () => {
  test("should divide numbers", () => {
    const res = divideNumbers(10, 5);

    expect(res).toBe(2);
  });

  it("should check age positive", () => {
    const res = checkAge(19);

    expect(res).toBe(true);
  });

  test("should check age negative", () => {
    const res = checkAge(15);

    expect(res).toBe(false);
  });

  test("should check object", () => {
    const obj = { b: 2 };

    expect(obj).toEqual({ b: 2 });
  });

  test("should check array length", () => {
    const array = [4, 3, 1];

    expect(array).toHaveLength(3);
  });

  test("should check element array", () => {
    const array = [4, 3, 1, "a"];

    expect(array).toContain("a");
  });

  test("should check null/undefined", () => {
    expect(undefined).toBeUndefined();
    expect(null).toBeNull();
  });
});

// Параметризованные тесты
describe("Parameterized utils", () => {
  test.skip("should divide numbers", () => {
    const res = divideNumbers(10, 5);

    expect(res).toBe(2);
  });

  it("should check age positive", () => {
    const res = checkAge(19);

    expect(res).toBe(true);
  });
});
