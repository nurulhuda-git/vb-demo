import { userService } from "../services/user.service";
import { successResponse, errorResponse } from "../utils/response";

export const registerController = async ({ body }: { body: any }) => {
  try {
    const user = await userService.createUser(body);
    return successResponse("Registration successful", { user });
  } catch (error: any) {
    return errorResponse(error.message || "Registration failed");
  }
};
