import Database from "../core/gatabase/database";

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
  }

  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'new-user-modal';

    let firstNameInput = document.createElement('input');
    firstNameInput.className = 'new-user-modal__first-name'
    firstNameInput.placeholder = 'First name';
    firstNameInput.oninput = (e) => {
      const target = e.target as HTMLTextAreaElement;
      if(this.fistNameCheck(target.value)===true) {
        this.newUserData.firstName = target.value;
        this.newUserData.correctFormCheck.firstName = true;
        if(this.correctAllInputsCheck()) {
          let submitButton = document.getElementById('submit-button');
          submitButton?.classList.remove('new-user-modal__submit-button_inactive');
          submitButton?.classList.add('new-user-modal__submit-button_active');
        } else {
          let submitButton = document.getElementById('submit-button');
          submitButton?.classList.remove('new-user-modal__submit-button_active');
          submitButton?.classList.add('new-user-modal__submit-button_inactive');
        }
      } else {
        this.newUserData.correctFormCheck.firstName = false;
        let submitButton = document.getElementById('submit-button');
          submitButton?.classList.remove('new-user-modal__submit-button_active');
          submitButton?.classList.add('new-user-modal__submit-button_inactive');
      }
    }

    let lastNameInput = document.createElement('input');
    lastNameInput.className = 'new-user-modal__last-name'
    lastNameInput.placeholder = 'Last name';
    lastNameInput.oninput = (e) => {
      const target = e.target as HTMLTextAreaElement;
      if(this.lastNameCheck(target.value)===true) {
        this.newUserData.lastName = target.value;
        this.newUserData.correctFormCheck.lastName = true;
        if(this.correctAllInputsCheck()) {
          let submitButton = document.getElementById('submit-button');
          submitButton?.classList.remove('new-user-modal__submit-button_inactive');
          submitButton?.classList.add('new-user-modal__submit-button_active');
        } else {
          let submitButton = document.getElementById('submit-button');
          submitButton?.classList.remove('new-user-modal__submit-button_active');
          submitButton?.classList.add('new-user-modal__submit-button_inactive');
        }
      } else {
        this.newUserData.correctFormCheck.lastName = false;
        submitButton?.classList.remove('new-user-modal__submit-button_active');
        submitButton?.classList.add('new-user-modal__submit-button_inactive');
      }
    }

    let emailInput = document.createElement('input');
    emailInput.className = 'new-user-modal__email'
    emailInput.placeholder = 'Email';
    emailInput.oninput = (e) => {
      const target = e.target as HTMLTextAreaElement;
      if(this.emailCheck(target.value)===true) {
        this.newUserData.email = target.value;
        this.newUserData.correctFormCheck.email = true;
        if(this.correctAllInputsCheck()) {
          let submitButton = document.getElementById('submit-button');
          submitButton?.classList.remove('new-user-modal__submit-button_inactive');
          submitButton?.classList.add('new-user-modal__submit-button_active');
        } else {
          let submitButton = document.getElementById('submit-button');
          submitButton?.classList.remove('new-user-modal__submit-button_active');
          submitButton?.classList.add('new-user-modal__submit-button_inactive');
        }
      } else {
        this.newUserData.correctFormCheck.email = false;
        submitButton?.classList.remove('new-user-modal__submit-button_active');
        submitButton?.classList.add('new-user-modal__submit-button_inactive');
      }
    }

    let submitButton = document.createElement('button');
    submitButton.innerText = 'Add user';
    submitButton.id = 'submit-button'
    submitButton.className = 'new-user-modal__submit-button_inactive';
    submitButton.onclick = (e) => {
      if(this.correctAllInputsCheck()) {
        Database.addNewPlayer(this.newUserData)
      } 
    }

    this.newUserData = {
      firstName: '',
      lastName: '',
      email: '',
      correctFormCheck: {
        firstName: false,
        lastName: false,
        email: false,
      }
    }

    this.container.append(firstNameInput, lastNameInput, emailInput, submitButton);
  }

  fistNameCheck(text: string): boolean {
    let pattern = new RegExp('^[а-яА-ЯёЁa-zA-Z]+$');
    return pattern.test(text);
  }

  lastNameCheck(text: string): boolean {
    let pattern = new RegExp('^[а-яА-ЯёЁa-zA-Z]+$');
    return pattern.test(text);
  } 

  emailCheck(text: string): boolean {
    let pattern = new RegExp("^(?:[-a-z\d\+\*\/\?!{}`~_%&'=^$#]+(?:\.[-a-z\d\+\*\/\?!{}`~_%&'=^$#]+)*)@(?:[-a-z\d_]+\.){1,60}[a-z]{2,6}$");
    return pattern.test(text);
  }

  correctAllInputsCheck(): boolean {
    const firstName: boolean = this.newUserData.correctFormCheck.firstName;
    const lastName: boolean = this.newUserData.correctFormCheck.lastName;
    const email: boolean = this.newUserData.correctFormCheck.email;

    if(firstName && lastName && email) {
      return true;
    } else {
      return false
    }
  }

  render() {
    return this.container;
  }
}

export default NewUser