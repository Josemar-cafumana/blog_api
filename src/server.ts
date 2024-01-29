import 'express-async-errors';
import Express from 'express';
import 'dotenv/config';
import './shared/services/yup';
import { errorHandler } from './shared/middleware';
import { routes } from './routes';


const app = Express();

app.use(Express.json({ limit: '5mb' }));
app.use(Express.urlencoded({ limit: '5mb', extended: true }));


app.use('/auth', routes.authRouter);
app.use('/category', routes.categoryRouter);
app.use('/tag', routes.tagRouter);
app.use('/profile', routes.profileRouter);
app.use('/media', routes.mediaRouter);


app.use(errorHandler);

app.listen(process.env.PORT || 4000, async () => {
  console.log(`Serve r Running on port ${process.env.PORT || 4000}`);
});
