type User = {
  id: number;
  name: string;
  email: string;
};

class UserService {
  private users: User[] = [
    { id: 1, name: "Admin", email: "admin@example.com" },
    { id: 2, name: "Junior Engineer", email: "junior@example.com" },
  ];

  async getAllUsers(): Promise<User[]> {
    return this.users;
  }

  async createUser(data: Omit<User, "id">): Promise<User> {
    const newUser: User = {
      id: this.users.length + 1,
      ...data,
    };
    this.users.push(newUser);
    return newUser;
  }

  async getUserById(id: number): Promise<User | undefined> {
    return this.users.find((u) => u.id === id);
  }
}

export const userService = new UserService();
