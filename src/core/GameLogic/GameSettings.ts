class GameSettings {
  private imagesPack: string;
  private difficunity: number;
  private gameEnabled: boolean;
  private currentPlayer: {
    firstName: string,
    lastName: string,
    email: string,
  };

  constructor() {
    this.imagesPack = 'animals';
    this.difficunity = 4;
    this.gameEnabled = false;
    this.currentPlayer = {
      firstName: '',
      lastName: '',
      email: '',
    }
  }

  setImagesPack(pack: string):void {
    this.imagesPack = pack;
  }

  getImagesPack():string {
    return this.imagesPack;
  }

  setDifficunity(difficunity: number):void {
    this.difficunity = difficunity;
  }

  getDifficunity(): number {
    return this.difficunity;
  }

  setGameEnabled(gameEnabled: boolean):void {
    this.gameEnabled = gameEnabled;
  }

  getGameEnabled(): boolean {
    return this.gameEnabled;
  }

  setCurrentPlayer(player: {firstName: string, lastName: string, email: string}):void {
    this.currentPlayer = player;
  }

  getCurrentPlayer(): {} {
    return this.currentPlayer;
  }
}

export default GameSettings