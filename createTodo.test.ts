import { createTodoAsync } from "./createTodo";
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
