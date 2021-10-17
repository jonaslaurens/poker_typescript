import { generateID } from "../utils/generateID";

export class Player {

  public name: string;

  private id: string;

  public socket: any;

  public credits: number;

  public bet: number;

  constructor(name: string, socket: any) {
    this.name = name;
    this.id = generateID();
    this.socket = socket;
    this.credits = 0;
    this.bet = 0;
  }

  getName() {
    return this.name;
  }

  setName(name: string) {
    return (this.name = name);
  }

  getPlayerID() {
    return this.id;
  }

  toObject(): {name: string; id: string, credits: number} {
    return {
      name: this.name,
      id: this.id,
      credits: this.credits,
    };
  }
}