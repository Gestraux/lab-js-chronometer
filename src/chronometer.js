class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      if (printTimeCallback) {
        printTimeCallback()
      }
      this.currentTime += 1
    },1000)
  }

  getMinutes() {
    return this.minutes = Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.minutes = Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    //
  }

  stop() {
    return clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    //
  }
}
