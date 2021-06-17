class Timer {
  public seconds: number;
  private container: HTMLElement;
  private interval: NodeJS.Timeout;
  private timerIsRun: boolean = false;

  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'timer';
    this.container.onclick = () => {
      if(this.timerIsRun) {
        this.pause();
      } else {
        this.resume();
      }
    }
    this.seconds = 0;
    this.interval = setInterval(() => {
      this.seconds += 1;
      this.update();
    }, 1000);
    this.timerIsRun = true;
  }

  update() {
    let timerSeconds: number = this.seconds % 60;
    let timerMinutes: number = (this.seconds - timerSeconds) / 60;
    let timerContainer = document.getElementsByClassName('timer');
    timerContainer[0].innerHTML = `${timerMinutes}:${timerSeconds}`;
    timerContainer[0].replaceWith(document.getElementsByClassName('timer')[0])
  }

  pause() {
    clearInterval(this.interval);
    this.timerIsRun = false;
  }

  resume() {
    this.interval = setInterval(() => {
      this.seconds += 1;
      this.update();
    }, 1000);
    this.timerIsRun = true;
  }

  render() {
    return this.container;
  }
}

export default Timer