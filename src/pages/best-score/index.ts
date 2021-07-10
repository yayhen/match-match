import Database from '../../core/gatabase/database';
import Page from '../../core/templates/page';

class BestScores extends Page {
  constructor(id: string) {
    super(id);
  }

  protected createMain() {
    const mainText = document.createElement('main');
    Database.getScores();
    return mainText;
  }

  static highScoresRender(hiScores: { firstName: string, lastName: string, email: string, score: number }[]) {
    const main = document.getElementsByTagName('main');
    const head = document.createElement('h3');
    head.innerText = 'Best players';
    main[0].append(head);
    hiScores.sort((a, b) => b.score - a.score);
    const maxVisibeScores: number = 10;
    let visibleScores: number = 1;
    hiScores.forEach((item) => {
      if (visibleScores <= maxVisibeScores) {
        const recordContainer = document.createElement('div');
        recordContainer.className = 'record';
        const nameSurnameEmail = document.createElement('div');
        const nameAndSurname = document.createElement('div');
        nameAndSurname.className = 'record__name-surname';
        nameAndSurname.innerText = `${item.firstName} ${item.lastName}`;
        const email = document.createElement('div');
        email.className = 'record__email';
        email.innerText = item.email;
        nameSurnameEmail.append(nameAndSurname, email);
        const score = document.createElement('div');
        score.className = 'record__score';
        score.innerHTML = `Score: <span>${item.score}</span>`;
        recordContainer.append(nameSurnameEmail, score);
        main[0].append(recordContainer);
        visibleScores += 1;
      }
    });
    if (hiScores.length === 0) {
      const main = document.getElementsByTagName('main');
      main[0].innerText = 'No games have been played';
    }
  }

  render() {
    const header = this.createHeader('Best scores');
    const main = this.createMain();
    this.container.append(header, main);
    return this.container;
  }
}

export default BestScores;
