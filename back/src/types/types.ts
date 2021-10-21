interface IResult {
  name: string;
  value: number;
}
interface ICard {
  value: number;
  suit: string;
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

interface IPlayerObject {
  name: string;
  cards: ICard[];
  result?: IResult;
}

interface IWinner {
  name: string;
  cards: ICard[];
  result: IResult;
}

export { ICard, IPlayer, IPlayerObject, IResult, IWinner };
