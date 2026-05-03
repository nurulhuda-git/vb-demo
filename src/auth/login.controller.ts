import { userService } from "../services/user.service";
import { successResponse, errorResponse } from "../utils/response";

export const loginController = async ({ body }: { body: any }) => {
  const { email, password } = body;
  
  // Mock logic: find user and check password
  const users = await userService.getAllUsers();
  const user = users.find(u => u.email === email);

  if (user && password === "password123") { // Mock password
    return successResponse("Login successful", { 
      token: "mock-jwt-token",
      user: { id: user.id, name: user.name, email: user.email }
    });
  }

  return errorResponse("Invalid email or password");
};
