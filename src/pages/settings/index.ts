import App from '../app';
import Page from '../../core/templates/page';

class Settings extends Page {
  protected createMain(): HTMLElement {
    const mainText = document.createElement('main');
    const head = document.createElement('h3');
    head.innerText = 'Game cards';
    mainText.append(head);
    const difficunitySelect = document.createElement('select');
    difficunitySelect.className = 'difficunity-select';
    const difficunitySelect4on4 = document.createElement('option');
    difficunitySelect4on4.innerText = '4 on 4';
    difficunitySelect4on4.value = '4';
    const difficunitySelect6on6 = document.createElement('option');
    difficunitySelect6on6.innerText = '6 on 6';
    difficunitySelect6on6.value = '6';
    const difficunitySelect8on8 = document.createElement('option');
    difficunitySelect8on8.innerText = '8 on 8';
    difficunitySelect8on8.value = '8';
    difficunitySelect.append(difficunitySelect4on4, difficunitySelect6on6, difficunitySelect8on8);

    mainText.append(difficunitySelect);

    const head2 = document.createElement('h3');
    head2.innerText = 'Difficunity';
    mainText.append(head2);
    const cardPackSelect = document.createElement('select');
    cardPackSelect.className = 'card-pack-select';
    const packAnimals = document.createElement('option');
    packAnimals.innerText = 'Animals';
    packAnimals.value = 'animals';
    const packGirls = document.createElement('option');
    packGirls.innerText = 'Girls';
    packGirls.value = 'girls';
    const packMems = document.createElement('option');
    packMems.innerText = 'Mems';
    packMems.value = 'mems';
    cardPackSelect.append(packAnimals, packGirls, packMems);

    const saveOptionButton = document.createElement('button');
    saveOptionButton.className = 'save-option-button';
    saveOptionButton.innerText = 'Save';
    saveOptionButton.onclick = () => {
      App.gameSettings.setDifficunity(parseInt(difficunitySelect.value, 10));
      App.gameSettings.setImagesPack(cardPackSelect.value);
    };
    mainText.append(cardPackSelect, saveOptionButton);
    return mainText;
  }

  render() {
    const header = this.createHeader('Settings');
    const main = this.createMain();
    this.container.append(header, main);
    return this.container;
  }
}

export default Settings;
