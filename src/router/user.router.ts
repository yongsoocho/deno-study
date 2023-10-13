import { Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";

export const router = new Router();

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

router
  .get("/", async (ctx) => {
    await sleep(3000);

    //  ctx.response.type = "application/json";
    ctx.response.body = {
      msg: "hello user",
    };
  })
  .post("/", (ctx) => {
    ctx.response.body = {
      msg: "create user",
    };
  });
