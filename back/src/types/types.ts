interface IResult {
  name: string;
  value: number;
}
interface ICard {
  value: number;
  suit: string;
}

interface IDealer {
  dealtCards: ICard[];
  deck: ICard[];
  dealAmountOfCards(amount: number): ICard[];
}

interface IPlayer {
  name: string;
  id: string;
  socket: any;
  credits: number;
  bet: number;
  cards: ICard[];
  result: IResult;
}

export const instanceOfIPlayer: any(object: any): object is IPlayer => {
  return object.name in object;
}

interface IPlayerObject {
  name: string;
  cards: ICard[];
  result?: IResult;
}

interface ITablePlayer {
  name: string;
  id: string;
  credits: number;
}

interface ITableObject {
  id: string;
  players: ITablePlayer[]
}

interface IWinner {
  name: string;
  cards: ICard[];
  result: IResult;
}

export { ICard, IDealer, IPlayer, IPlayerObject, IResult, IWinner, ITableObject };
