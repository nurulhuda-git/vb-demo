import { Elysia, t } from "elysia";
import { loginController } from "./login.controller";

export const loginRoute = new Elysia()
  .post("/login", loginController, {
    body: t.Object({
      email: t.String({ format: 'email' }),
      password: t.String(),
    })
  });
