import Router from "koa-router";
import { turnOn, turnOff, getState } from "./light";

export const lightController = new Router();

lightController.get("api/lights/:light", ctx => {
  try {
    if (isNaN(ctx.params.light)) {
      throw new Error("Light is not a number");
    }

    ctx.status = 200;
    ctx.body = getState(ctx.params.light);
  } catch (err) {
    ctx.status = 500;
    ctx.body = err;
  }
});

lightController.post("api/lighs/:light/_turnOn", ctx => {
  try {
    if (isNaN(ctx.params.light)) {
      throw new Error("Light is not a number");
    }

    turnOn(ctx.params.light);

    ctx.status = 200;
    ctx.body = null;
  } catch (err) {
    ctx.status = 500;
    ctx.body = err;
  }
});

lightController.post("api/lighs/:light/_turnOff", ctx => {
  try {
    if (isNaN(ctx.params.light)) {
      throw new Error("Light is not a number");
    }

    turnOff(ctx.params.light);

    ctx.status = 200;
    ctx.body = null;
  } catch (err) {
    ctx.status = 500;
    ctx.body = err;
  }
});
