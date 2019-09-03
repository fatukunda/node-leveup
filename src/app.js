import express from 'express';
import indexRouter from './routes/index';
import usersRouter from './routes/usersRouter';

const app = express();

app.use(express.json());
app.use(indexRouter);
app.use(usersRouter);

export default app;
