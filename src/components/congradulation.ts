class Congradulation {
  private container: HTMLElement;
  constructor(score: number) {
    this.container = document.createElement('div');
    this.container.className = 'congradulation';
    let buttonOK = document.createElement('button');
    this.container.innerText = `Great job! You scored ${score} points`;
    buttonOK.innerText = 'OK'
    buttonOK.onclick = () => {
      let modalClose = document.getElementsByClassName('congradulation');
      modalClose[0].remove();
      console.log('OK');
      
    }
    this.container.append(buttonOK);
  }

  render() {
    return this.container;
  }
}

export default Congradulation