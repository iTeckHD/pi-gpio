import Router from "koa-router";
import { turnOn, turnOff, getState } from "./light";

export const lightController = new Router();

lightController.get("/api/lights/:light", ctx => {
  try {
    if (isNaN(ctx.params.light)) {
      throw new Error("Light is not a number");
    }

    console.log("Getting status of light number", ctx.params.light);

    ctx.status = 200;
    ctx.body = getState(parseInt(ctx.params.light, 10));
  } catch (err) {
    console.log(err);
    ctx.status = 500;
    ctx.body = err;
  }
});

lightController.post("/api/lights/:light/_turnOn", ctx => {
  try {
    if (isNaN(ctx.params.light)) {
      throw new Error("Light is not a number");
    }

    console.log("Turning on light number", ctx.params.light);

    turnOn(parseInt(ctx.params.light, 10));

    ctx.status = 200;
    ctx.body = null;
  } catch (err) {
    console.log(err);
    ctx.status = 500;
    ctx.body = err;
  }
});

lightController.post("/api/lights/:light/_turnOff", ctx => {
  try {
    if (isNaN(ctx.params.light)) {
      throw new Error("Light is not a number");
    }
    console.log("Turning off light number", ctx.params.light);

    turnOff(parseInt(ctx.params.light, 10));

    ctx.status = 200;
    ctx.body = null;
  } catch (err) {
    console.log(err);
    ctx.status = 500;
    ctx.body = err;
  }
});

lightController.post("/api/lights/:light/_toggle", ctx => {
  try {
    if (isNaN(ctx.params.light)) {
      throw new Error("Light is not a number");
    }

    console.log("Toggling light number", ctx.params.light);

    if (getState(ctx.params.light)) {
      turnOff(parseInt(ctx.params.light, 10));
    } else {
      turnOn(parseInt(ctx.params.light, 10));
    }

    ctx.status = 200;
    ctx.body = null;
  } catch (err) {
    console.log(err);
    ctx.status = 500;
    ctx.body = err;
  }
});
