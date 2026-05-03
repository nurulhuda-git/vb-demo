import { Elysia, t } from "elysia";
import { forgotPasswordController } from "./forgot-password.controller";

export const forgotPasswordRoute = new Elysia()
  .post("/forgot-password", forgotPasswordController, {
    body: t.Object({
      email: t.String({ format: 'email' }),
    })
  });
