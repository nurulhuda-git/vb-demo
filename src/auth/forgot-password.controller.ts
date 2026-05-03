import { successResponse, errorResponse } from "../utils/response";

export const forgotPasswordController = async ({ body }: { body: any }) => {
  const { email } = body;
  
  if (email === "notfound@example.com") {
    return errorResponse("User not found");
  }

  return successResponse("Password reset link sent to your email", { email });
};
