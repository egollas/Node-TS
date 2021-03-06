import express from 'express';
import api from './api';

const app = express();

app.use(express.json());
app.use(api);
app.listen(3000, () => {
  console.log('Server started');
});