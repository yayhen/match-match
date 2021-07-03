import App from '../app';
import Page from './../../core/templates/page'

class Settings extends Page {
  constructor(id: string) {
    super(id)
  }

  protected createMain(text: string) {
    const mainText = document.createElement('main');
    let difficunitySelect = document.createElement('select');
    difficunitySelect.className = 'difficunity-select';
    let difficunitySelect_4on4 = document.createElement('option');
    difficunitySelect_4on4.innerText = '4 on 4';
    difficunitySelect_4on4.value = '4';
    let difficunitySelect_6on6 = document.createElement('option');
    difficunitySelect_6on6.innerText = '6 on 6';
    difficunitySelect_6on6.value = '6';
    let difficunitySelect_8on8 = document.createElement('option');
    difficunitySelect_8on8.innerText = '8 on 8';
    difficunitySelect_8on8.value = '8';
    difficunitySelect.append(difficunitySelect_4on4, difficunitySelect_6on6, difficunitySelect_8on8);
    

    let cardPackSelect = document.createElement('select');
    cardPackSelect.className = 'card-pack-select';
    let packAnimals = document.createElement('option');
    packAnimals.innerText = 'Animals';
    packAnimals.value = 'animals';
    let packGirls = document.createElement('option');
    packGirls.innerText = 'Girls';
    packGirls.value = 'girls';
    let packMems = document.createElement('option');
    packMems.innerText = 'Mems';
    packMems.value = 'mems';
    cardPackSelect.append(packAnimals, packGirls, packMems);
    

    let saveOptionButton = document.createElement('button');
    saveOptionButton.className = 'save-option-button';
    saveOptionButton.innerText = 'Save';
    saveOptionButton.onclick = () => {
      App.gameSettings.setDifficunity(parseInt(difficunitySelect.value));
      App.gameSettings.setImagesPack(cardPackSelect.value);
    }
    mainText.append(difficunitySelect, cardPackSelect, saveOptionButton);
    return mainText;
  }

  render() {
    const header = this.createHeader('Settings');
    const main = this.createMain('settings of game');
    const footer = this.createFooter('powered by my');
    this.container.append(header, main, footer);
    return this.container;
  }
}

export default Settings