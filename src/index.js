import { Elysia } from "elysia";
import { html } from '@elysiajs/html'
import { staticPlugin } from '@elysiajs/static'

const app = new Elysia();

app.use(staticPlugin({ assets: "src/public", prefix: "/" }));
app.use(html());
app.get("/", Bun.file("src/pages/index.html"));

app.listen(process.env.PORT || 3000);
console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
