import App from '../pages/app';
import CardsContainer from './cards-container';

class Timer {
  public prepareToGame: boolean;

  public seconds: number;

  private container: HTMLElement;

  private interval: NodeJS.Timeout;

  private timerIsRun: boolean = false;

  private cardsContainer: CardsContainer;

  constructor(cardsContainer: CardsContainer) {
    this.cardsContainer = cardsContainer;
    this.prepareToGame = true;
    this.container = document.createElement('div');
    this.container.className = 'timer';
    this.container.onclick = () => {
      if (this.prepareToGame) {
        // not stop timer in preparation stage
      } else if (this.timerIsRun) {
        this.pause();
      } else {
        this.resume();
      }
    };
    this.seconds = 30;
    clearInterval(App.gameSettings.timeoutId);
    this.interval = setInterval(() => {
      if (this.prepareToGame) {
        this.seconds -= 1;
        this.update();
        if (this.seconds === 0) {
          this.prepareToGame = false;
          this.cardsContainer.game.invisibleAllCards();
          this.cardsContainer.refresh(this.cardsContainer.game);
        }
      } else {
        this.seconds += 1;
        this.update();
      }
    }, 1000);
    App.gameSettings.timeoutId = this.interval;
    this.timerIsRun = true;
  }

  update() {
    const timerSeconds: number = this.seconds % 60;
    const timerMinutes: number = (this.seconds - timerSeconds) / 60;
    const timerContainer = document.getElementsByClassName('timer');
    if (timerSeconds <= 9) {
      timerContainer[0].innerHTML = `${timerMinutes}:0${timerSeconds}`;
    } else {
      timerContainer[0].innerHTML = `${timerMinutes}:${timerSeconds}`;
    }
    timerContainer[0].replaceWith(document.getElementsByClassName('timer')[0]);
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

export default Timer;
