/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express';
import cors from 'cors';
import { combinationValue } from './scripts/combinations/combinationValue';

const app = express();

const http = require('http').createServer(app);

app.use(cors());

 const cards = [
      { value: 2, suit: 'Clubs' },
      { value: 4, suit: 'Clubs' },
      { value: 3, suit: 'Clubs' },
      { value: 2, suit: 'Clubs' },
      { value: 13, suit: 'Hearts' },
      { value: 4, suit: 'Clubs' },
      { value: 5, suit: 'Diamonds' },
    ];

    const res = combinationValue(cards, 9);

    console.log(res)

http.listen(3050, () => {
  console.log('listening on *:3050');
});
