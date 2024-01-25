import Express from 'express'; 
import 'dotenv/config';
import { authRouter } from './routes/auth.routes';

const app = Express();

app.use(Express.json());

app.use('/auth', authRouter);



app.listen(process.env.PORT || 4000, () => {
  console.log(`Server Running on port ${process.env.PORT || 4000}`);
});