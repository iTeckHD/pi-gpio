import Router from "koa-router";
import { turnOn, turnOff, getState } from "./light";

export const lightController = new Router();

lightController.get("/api/lights/:light", ctx => {
  try {
    if (isNaN(ctx.params.light)) {
      throw new Error("Light is not a number");
    }

    console.log("Getting status of light number: ", ctx.params.light);

    ctx.status = 200;
    ctx.body = getState(parseInt(ctx.params.light, 10));
  } catch (err) {
    ctx.status = 500;
    ctx.body = err;
  }
});

lightController.post("/api/lighs/:light/_turnOn", ctx => {
  try {
    if (isNaN(ctx.params.light)) {
      throw new Error("Light is not a number");
    }

    console.log("Turining on light number: ", ctx.params.light);

    turnOn(parseInt(ctx.params.light, 10));

    ctx.status = 200;
    ctx.body = null;
  } catch (err) {
    ctx.status = 500;
    ctx.body = err;
  }
});

lightController.post("/api/lighs/:light/_turnOff", ctx => {
  try {
    if (isNaN(ctx.params.light)) {
      throw new Error("Light is not a number");
    }
    console.log("Turining off light number: ", ctx.params.light);

    turnOff(parseInt(ctx.params.light, 10));

    ctx.status = 200;
    ctx.body = null;
  } catch (err) {
    ctx.status = 500;
    ctx.body = err;
  }
});

lightController.post("/api/lighs/:light/_toggle", ctx => {
  try {
    if (isNaN(ctx.params.light)) {
      throw new Error("Light is not a number");
    }

    console.log("Toggeling light number: ", ctx.params.light);

    if (getState(ctx.params.light)) {
      turnOff(parseInt(ctx.params.light, 10));
    } else {
      turnOn(parseInt(ctx.params.light, 10));
    }

    ctx.status = 200;
    ctx.body = null;
  } catch (err) {
    ctx.status = 500;
    ctx.body = err;
  }
});
