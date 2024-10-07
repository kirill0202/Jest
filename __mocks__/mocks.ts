export type MocksDataType = {
  id: number;
  text: string;
  completed: boolean;
  price: number;
};

export const mocks_data: MocksDataType[] = [
  {
    id: 1,
    text: "hello",
    completed: false,
    price: 100,
  },
  {
    id: 3,
    text: "Lorem",
    completed: false,
    price: 400,
  },
  {
    id: 2,
    text: "hello",
    completed: false,
    price: 200,
  },
  {
    id: 4,
    text: "lorem ipsum",
    completed: false,
    price: 300,
  },
];

// Результат после фильтрации
export const result_mocks_data: MocksDataType[] = [
  {
    id: 3,
    text: "Lorem",
    completed: false,
    price: 400,
  },
  {
    id: 2,
    text: "hello",
    completed: false,
    price: 200,
  },
  {
    id: 4,
    text: "lorem ipsum",
    completed: false,
    price: 300,
  },
];

export const mockTodo = { id: 1, title: "Todo 1", completed: false };

export const mockResponseTodo = {
  id: 201,
  title: "todo",
};
