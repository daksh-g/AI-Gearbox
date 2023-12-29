import { PORT } from "./setup.js";

import { Elysia } from "elysia";
import { html } from '@elysiajs/html'
import { staticPlugin } from '@elysiajs/static'

import api from "./controllers/index.js";

const app = new Elysia();

app.use(api);
app.use(staticPlugin({ assets: "src/public", prefix: "/" }));
app.use(html());
app.get("/", Bun.file("src/pages/index.html"));

app.listen(PORT);
console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
