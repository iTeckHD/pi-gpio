import rpio from "rpio";

const gpioPins = [20, 21, 26];

export function initialize() {
  gpioPins.forEach(pin => rpio.open(pin, rpio.OUTPUT, rpio.LOW));
}

export function tunOnAll() {
  gpioPins.forEach(pin => rpio.write(pin, rpio.HIGH));
}

export function tunOffAll() {
  gpioPins.forEach(pin => rpio.write(pin, rpio.LOW));
}

export function turnOn(light: number) {
  if (rpio.read(getGpioPin(light))) {
    // Already turned on!
    return;
  }

  rpio.write(getGpioPin(light), rpio.HIGH);
}

export function turnOff(light: number) {
  if (!rpio.read(getGpioPin(light))) {
    // Already turned off!
    return;
  }

  rpio.write(getGpioPin(light), rpio.LOW);
}

export function getState(light: number) {
  return Boolean(rpio.read(getGpioPin(light)));
}

function getGpioPin(light: number) {
  if (light > gpioPins.length || light < 1) {
    throw new Error("Invalid light number");
  }

  return gpioPins[light - 1];
}
