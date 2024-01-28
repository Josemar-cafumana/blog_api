import 'express-async-errors';
import Express from 'express'; 
import 'dotenv/config';
import './shared/services/yup';
import { authRouter } from './routes/auth.routes';
import { categoryRouter } from './routes/category.routes';
import { tagRouter } from './routes/tag.routes';
import { errorHandler } from './shared/middleware';

const app = Express();

app.use(Express.json());

app.use('/auth', authRouter);
app.use('/category', categoryRouter);
app.use('/tag', tagRouter);

app.use(errorHandler);

app.listen(process.env.PORT || 4000, async () => {
  console.log(`Server Running on port ${process.env.PORT || 4000}`);
});