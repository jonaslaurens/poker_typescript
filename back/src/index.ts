/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express';
import cors from 'cors';

const app = express();

const http = require('http').createServer(app);

app.use(cors());


http.listen(3050, () => {
  console.log('listening on *:3050');
});
