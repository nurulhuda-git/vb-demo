import { Elysia, t } from "elysia";
import { userService } from "./services/user.service";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .group("/users", (app) =>
    app
      .get("/", () => userService.getAllUsers())
      .post(
        "/",
        ({ body }) => userService.createUser(body),
        {
          body: t.Object({
            name: t.String(),
            email: t.String({ format: 'email' }),
          }),
        }
      )
      .get("/:id", ({ params: { id } }) => {
        const user = userService.getUserById(Number(id));
        if (!user) throw new Error("User not found");
        return user;
      })
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
