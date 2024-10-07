import { createTodoAsync, createTodo } from "./createTodo";
import { mockResponseTodo, mockTodo } from "./__mocks__/mocks";

const mockFetch = jest.fn();
mockFetch.mockReturnValueOnce(
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockTodo),
    headers: new Headers(),
    redirected: false,
    status: 200,
    statusText: "OK",
    url: "https://example.com",
    type: "basic",
    body: null,
    bodyUsed: false,
  })
);

describe("createTodo tests", () => {
  it("should create todo", async () => {
    const result = await createTodoAsync("todo");
    expect(result).toEqual(mockResponseTodo);
  });
  it("should throw error when response is not ok", () => {
    mockFetch.mockReturnValueOnce(Promise.resolve({ ok: false }));

    expect(createTodoAsync("todo")).rejects.toThrow("Ошибка создания задачи");
  });
});

describe("createTodo function", () => {
  it("should return an object with id, text, and completed properties", () => {
    const todo = createTodo("New todo item");
    expect(todo).toHaveProperty("id");
    expect(todo).toHaveProperty("text");
    expect(todo).toHaveProperty("completed");
  });

  it("should set the text property to the provided text", () => {
    const text = "New todo item";
    const todo = createTodo(text);
    expect(todo.text).toBe(text);
  });

  it("should set the completed property to false", () => {
    const todo = createTodo("New todo item");
    expect(todo.completed).toBe(false);
  });

  it("should generate a random id", () => {
    const todo1 = createTodo("New todo item");
    const todo2 = createTodo("Another todo item");
    expect(todo1.id).not.toBe(todo2.id);
  });
});
