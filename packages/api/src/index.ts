import koa from "koa";
import cors from "@koa/cors";
import { initialize } from "./light";
import bodyParser from "koa-bodyparser";
import { lightController } from "./light.controller";

const app = new koa();

app.use(cors());
app.use(bodyParser());
app.use(lightController.routes());
app.use(lightController.allowedMethods());

app.listen(8022, "0.0.0.0", () => {
  console.log("Api Server started");
  initialize();
  console.log("Lights initialized");
});
