export function createTodo(text: string) {
  return {
    id: Math.random(),
    text,
    completed: false,
  };
}

export async function createTodoAsync(text: string) {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify({ title: text }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  if (!response.ok) {
    throw new Error("Ошибка создания задачи");
  }

  return response.json();
}
