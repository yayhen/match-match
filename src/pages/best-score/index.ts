import Database from '../../core/gatabase/database';
import Page from './../../core/templates/page'

class BestScores extends Page {
  constructor(id: string) {
    super(id)
  }

  protected createMain(text: string) {
    const mainText = document.createElement('main');
    mainText.innerText = text;
    Database.getScores();
    return mainText;
  }

  static highScoresRender(hiScores: {firstName: string, lastName: string, email: string, score: number}[]) {
    hiScores.sort((a ,b) => {
        return b.score - a.score;
    });
    const maxVisibeScores: number = 10;
    let visibleScores: number = 0;
    hiScores.forEach(item => {
      let main = document.getElementsByTagName('main');
      if(visibleScores <= maxVisibeScores) {
        main[0].append(JSON.stringify(item));
        visibleScores += 1;
        let tab = document.createElement('br');
        main[0].append(tab);
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
    const footer = this.createFooter('powered by my');
    this.container.append(header, main, footer);
    return this.container;
  }
}

export default BestScores