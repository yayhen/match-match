import Database from '../../core/gatabase/database';
import Page from './../../core/templates/page'

class BestScores extends Page {
  constructor(id: string) {
    super(id)
  }

  protected createMain(text: string) {
    const mainText = document.createElement('main');
    //mainText.innerText = text;
    Database.getScores();
    return mainText;
  }

  static highScoresRender(hiScores: {firstName: string, lastName: string, email: string, score: number}[]) {
    let main = document.getElementsByTagName('main');
    let head = document.createElement('h3');
    head.innerText = 'Best players'
    main[0].append(head);
    hiScores.sort((a ,b) => {
        return b.score - a.score;
    });
    const maxVisibeScores: number = 10;
    let visibleScores: number = 1;
    hiScores.forEach(item => {
      if(visibleScores <= maxVisibeScores) {
        let recordContainer = document.createElement('div');
        recordContainer.className = 'record';
        let nameSurnameEmail = document.createElement('div');
        let nameAndSurname = document.createElement('div');
        nameAndSurname.className = 'record__name-surname';
        nameAndSurname.innerText = item.firstName +' '+ item.lastName;
        let email = document.createElement('div');
        email.className = 'record__email';
        email.innerText = item.email;
        nameSurnameEmail.append(nameAndSurname, email);
        let score = document.createElement('div');
        score.className = 'record__score';
        score.innerHTML = `Score: <span>${item.score}</span>`;
        recordContainer.append(nameSurnameEmail, score);
        main[0].append(recordContainer);
        visibleScores += 1;
      }
    });
    if(hiScores.length === 0) {
      let main = document.getElementsByTagName('main');
      main[0].innerText = 'Еhe list of records is empty';
    }
  }

  render() {
    const header = this.createHeader('Best scores');
    const main = this.createMain('leaders in match');
    //const footer = this.createFooter('powered by my');
    this.container.append(header, main);
    return this.container;
  }
}

export default BestScores