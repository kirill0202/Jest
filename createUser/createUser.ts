type User = {
  name?: string;
  lastName?: string;
  age?: number;
  phone?: string;
  email?: string;
};
export const createUser = ({ name, lastName, age, phone, email }: User) => {
  return {
    phone,
    email,
    age,
    lastName,
    name,
  };
};
