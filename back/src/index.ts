/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express';
import cors from 'cors';
import { Dealer } from './model/Dealer';

const app = express();

const http = require('http').createServer(app);

const dealer = new Dealer();

console.log(dealer);

app.use(cors());

http.listen(3050, () => {
  console.log('listening on *:3050');
});
