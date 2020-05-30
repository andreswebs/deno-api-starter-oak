import { Application, Context } from "https://deno.land/x/oak/mod.ts";
import * as middlewares from "./middlewares/middlewares.ts";
import { router } from "./routes/routes.ts";

const port = 8000;
const app = new Application();

app.use(middlewares.loggerMiddleware);
app.use(middlewares.timingMiddleware);

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port });
