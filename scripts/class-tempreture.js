//based on an exercise from https://github.com/marijnh/eloquent-javascript
class Temperature {
  constructor(temp) {
    this.c = (temp - 32) / 1.8;
    // this.temp = temp;
    this.f = temp * 1.8 + 32;
  }

  set toFahrenheit(c) {
    this.c = c;
    this.f = Math.round(c * 1.8 + 32);
  }
  get fahrenheit() {
    return this.f;
  }

  set toCelsius(f) {
    this.f = f;
    this.c = Math.round((f - 32) / 1.8);

  }
  get celsius() {
    return this.c;
  }
}
