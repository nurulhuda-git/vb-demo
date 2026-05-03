import { Elysia, t } from "elysia";
import { registerController } from "./register.controller";

export const registerRoute = new Elysia()
  .post("/register", registerController, {
    body: t.Object({
      name: t.String(),
      email: t.String({ format: 'email' }),
      password: t.String(),
    })
  });
