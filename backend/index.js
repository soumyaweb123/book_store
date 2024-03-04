import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { PORT, MONGOURI } from './config.js';
import bookRouter from './routes/bookRouter.js';

const app = express();

// Enable CORS before defining routes
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  })
);

app.use(express.json());

app.get('/', (req, res) => {
  console.log(req);
  return res.status(234).send('Welcome to the MERN stack bookstore');
});

app.use('/books', bookRouter);

mongoose
  .connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('App connected to the database');
    app.listen(PORT, () => {
      console.log(`App is listening on ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
