import express from 'express';

const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
  console.log('listagem de usuario');
  res.json({
    name: 'Heberth',
    lastName: 'junor',
  });
});

app.listen(3000);
