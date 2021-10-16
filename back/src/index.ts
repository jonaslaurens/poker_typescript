import express from 'express';
import cors from 'cors';
const app = express();

const http = require('http').createServer(app);

import { Card } from './model/Card';
import { Deck } from './model/Deck';

const newDeck = new Deck();

console.log(newDeck);


app.use(cors());

http.listen(3050, function () {
  console.log('listening on *:3050');
});