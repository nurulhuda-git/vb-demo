import { Elysia } from "elysia";
import { userService } from "./services/user.service";
import { registerRoute } from "./auth/register.route";
import { loginRoute } from "./auth/login.route";
import { forgotPasswordRoute } from "./auth/forgot-password.route";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .group("/users", (app) =>
    app
      .get("/", () => userService.getAllUsers())
      .get("/:id", ({ params: { id } }) => {
        const user = userService.getUserById(Number(id));
        if (!user) throw new Error("User not found");
        return user;
      })
  )
  .group("/auth", (app) => 
    app
      .use(registerRoute)
      .use(loginRoute)
      .use(forgotPasswordRoute)
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
