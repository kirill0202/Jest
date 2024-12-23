import { createUser } from "./createUser";

describe("createUser", () => {
  it("should create user with firstname and lastname", () => {
    const user = createUser({ name: "Kirill", lastName: "Korobov" });
    expect(user).toMatchSnapshot();
  });

  it("should create user with firstname, lastname and phone", () => {
    const user = createUser({
      name: "Kirill",
      lastName: "Korobov",
      phone: "+7(123)456-78-90",
    });
    expect(user).toMatchSnapshot();
  });
  it("should create user with firstname, lastname, phone, email", () => {
    const user = createUser({
      name: "Kirill",
      lastName: "Korobov",
      phone: "+7(123)456-78-90",
      email: "test@example.com",
    });
    expect(user).toMatchSnapshot();
  });
});
