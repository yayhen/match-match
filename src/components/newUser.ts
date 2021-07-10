import Database from '../core/gatabase/database';
import App from '../pages/app';
import Filter from './filter';

class NewUser {
  private container: HTMLElement;

  private newUserData: {
    firstName: string,
    lastName: string,
    email: string,
    correctFormCheck: {
      firstName: boolean,
      lastName: boolean,
      email: boolean,
    }
  };

  constructor() {
    document.body.append(Filter.grayFilter());
    this.container = document.createElement('div');
    this.container.className = 'new-user-modal';

    const head = document.createElement('h3');
    head.innerText = 'Registr new Player';
    this.container.append(head);

    const firstNameInput = document.createElement('input');
    firstNameInput.className = 'new-user-modal__first-name';
    firstNameInput.placeholder = 'First name';
    firstNameInput.pattern = '[A-Za-zА-Яа-яЁё]+$';
    firstNameInput.minLength = 1;
    firstNameInput.maxLength = 30;
    firstNameInput.oninput = (e) => {
      const target = e.target as HTMLTextAreaElement;
      if (this.fistNameCheck(target.value) === true) {
        firstNameInput.className = 'new-user-modal__first-name_valid';
        this.newUserData.firstName = target.value;
        this.newUserData.correctFormCheck.firstName = true;
        if (this.correctAllInputsCheck()) {
          const submitButton = document.getElementById('submit-button');
          submitButton?.classList.remove('new-user-modal__submit-button_inactive');
          submitButton?.classList.add('new-user-modal__submit-button_active');
        } else {
          const submitButton = document.getElementById('submit-button');
          submitButton?.classList.remove('new-user-modal__submit-button_active');
          submitButton?.classList.add('new-user-modal__submit-button_inactive');
        }
      } else {
        this.newUserData.correctFormCheck.firstName = false;
        firstNameInput.className = 'new-user-modal__first-name_invalid';
        const submitButton = document.getElementById('submit-button');
        submitButton?.classList.remove('new-user-modal__submit-button_active');
        submitButton?.classList.add('new-user-modal__submit-button_inactive');
      }
    };

    const lastNameInput = document.createElement('input');
    lastNameInput.className = 'new-user-modal__last-name';
    lastNameInput.placeholder = 'Last name';
    lastNameInput.pattern = '[A-Za-zА-Яа-яЁё]+$';
    lastNameInput.minLength = 1;
    lastNameInput.maxLength = 30;
    lastNameInput.oninput = (e) => {
      const target = e.target as HTMLTextAreaElement;
      if (this.lastNameCheck(target.value) === true) {
        this.newUserData.lastName = target.value;
        this.newUserData.correctFormCheck.lastName = true;
        lastNameInput.className = 'new-user-modal__last-name_valid';
        if (this.correctAllInputsCheck()) {
          const submitButton = document.getElementById('submit-button');
          submitButton?.classList.remove('new-user-modal__submit-button_inactive');
          submitButton?.classList.add('new-user-modal__submit-button_active');
        } else {
          const submitButton = document.getElementById('submit-button');
          submitButton?.classList.remove('new-user-modal__submit-button_active');
          submitButton?.classList.add('new-user-modal__submit-button_inactive');
        }
      } else {
        this.newUserData.correctFormCheck.lastName = false;
        lastNameInput.className = 'new-user-modal__last-name_invalid';
        submitButton?.classList.remove('new-user-modal__submit-button_active');
        submitButton?.classList.add('new-user-modal__submit-button_inactive');
      }
    };

    const emailInput = document.createElement('input');
    emailInput.className = 'new-user-modal__email';
    emailInput.placeholder = 'Email';
    emailInput.type = 'email';
    emailInput.oninput = (e) => {
      const target = e.target as HTMLTextAreaElement;
      if (this.emailCheck(target.value) === true) {
        this.newUserData.email = target.value;
        this.newUserData.correctFormCheck.email = true;
        emailInput.className = 'new-user-modal__email_valid';
        if (this.correctAllInputsCheck()) {
          const submitButton = document.getElementById('submit-button');
          submitButton?.classList.remove('new-user-modal__submit-button_inactive');
          submitButton?.classList.add('new-user-modal__submit-button_active');
        } else {
          const submitButton = document.getElementById('submit-button');
          submitButton?.classList.remove('new-user-modal__submit-button_active');
          submitButton?.classList.add('new-user-modal__submit-button_inactive');
        }
      } else {
        this.newUserData.correctFormCheck.email = false;
        emailInput.className = 'new-user-modal__email_invalid';
        submitButton?.classList.remove('new-user-modal__submit-button_active');
        submitButton?.classList.add('new-user-modal__submit-button_inactive');
      }
    };

    let submitButton = document.createElement('button');
    submitButton.innerText = 'ADD USER';
    submitButton.id = 'submit-button';
    submitButton.className = 'new-user-modal__submit-button_inactive';
    submitButton.onclick = (e) => {
      if (this.correctAllInputsCheck()) {
        Database.addNewPlayer({
          firstName: this.newUserData.firstName,
          lastName: this.newUserData.lastName,
          email: this.newUserData.email,
        });
        App.gameSettings.setCurrentPlayer({
          firstName: this.newUserData.firstName,
          lastName: this.newUserData.lastName,
          email: this.newUserData.email,
        });
        App.gameSettings.setGameEnabled(true);
        App.renderNewPage('about');
      }
    };

    const cancelButton = document.createElement('button');
    cancelButton.className = 'cancel-button';
    cancelButton.innerText = 'CANCEL';
    cancelButton.onclick = (e) => {
      App.renderNewPage('about');
    };

    this.newUserData = {
      firstName: '',
      lastName: '',
      email: '',
      correctFormCheck: {
        firstName: false,
        lastName: false,
        email: false,
      },
    };

    this.container.append(firstNameInput, lastNameInput, emailInput, submitButton, cancelButton);
  }

  fistNameCheck(text: string): boolean {
    const pattern = new RegExp('[A-Za-zА-Яа-яЁё]+$');
    return pattern.test(text);
  }

  lastNameCheck(text: string): boolean {
    const pattern = new RegExp('^[а-яА-ЯёЁa-zA-Z]+$');
    return pattern.test(text);
  }

  emailCheck(text: string): boolean {
    // let pattern = new RegExp("^(?:[-a-z\d\+\*\/\?!{}`~_%&'=^$#]+(?:\.[-a-z\d\+\*\/\?!{}`~_%&'=^$#]+)*)@(?:[-a-z\d_]+\.){1,60}[a-z]{2,6}$");
    const pattern = new RegExp("^(([().!#$%&'*+\/=?^_`{|}~\u00BF-\u1FFF\u2C00-\uD7FF\w-]+[,\n#\s$&:\n\t]+){2,}){0,}(?:<){0,1}[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]))(?:>){0,1}$");
    return pattern.test(text);
  }

  correctAllInputsCheck(): boolean {
    const { firstName } = this.newUserData.correctFormCheck;
    const { lastName } = this.newUserData.correctFormCheck;
    const { email } = this.newUserData.correctFormCheck;

    if (firstName && lastName && email) {
      return true;
    }
    return false;
  }

  render() {
    return this.container;
  }
}

export default NewUser;
