import { Application } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { UserRouter } from "./router/index.ts";

const app = new Application();
const port = 8080;

// Logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
  // await next();
});

// Timing
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();

  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

app.use(UserRouter.routes());
// 구현되지 않은 메소드나 허용되지 않는 메소드를 처리하는 경우
app.use(UserRouter.allowedMethods());

app.addEventListener("listen", () => {
  console.log(`\x1b[1;32mListening on localhost:${port}\x1b[0;m`);
});

app.listen({ port });
