import express from 'express';
import cors from 'cors';

import summ from './summ';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  console.log(Boolean(Number(req.query.a)));
  console.log(Boolean(Number(req.query.b)));

  const numa = (typeof Number(+req.query.a + +0) === 'number') ? Number(req.query.a) : +0;
  const numb = (typeof Number(+req.query.b + +0) === 'number') ? Number(req.query.b) : +0;
  console.log(typeof (numa));
  console.log(typeof (numb));
  console.log(numa);
  console.log(numb);

  const summa = summ(numa, numb);
  console.log(summa);

  const sum = String(summa);
  res.send(sum);
});
app.get('/task2a', (req, res) => {
  const sum = (+req.query.a || 0) + (+req.query.b || 0);
  res.send(sum.toString());
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
