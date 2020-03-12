import rpio from "rpio";

const gpioPins = [38, 40, 37];

export function initialize() {
  gpioPins.forEach(pin => rpio.open(pin, rpio.OUTPUT, rpio.HIGH));
}

export function tunOnAll() {
  gpioPins.forEach(pin => rpio.write(pin, rpio.LOW));
}

export function tunOffAll() {
  gpioPins.forEach(pin => rpio.write(pin, rpio.HIGH));
}

export function turnOn(light: number) {
  if (getState(light)) {
    // Already turned on!
    return;
  }

  rpio.write(getGpioPin(light), rpio.LOW);
}

export function turnOff(light: number) {
  if (!getState(light)) {
    // Already turned off!
    return;
  }

  rpio.write(getGpioPin(light), rpio.HIGH);
}

export function getState(light: number) {
  return !Boolean(rpio.read(getGpioPin(light)));
}

function getGpioPin(light: number) {
  if (light > gpioPins.length || light < 1) {
    throw new Error("Invalid light number");
  }

  return gpioPins[light - 1];
}
