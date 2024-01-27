import Express from 'express'; 
import 'dotenv/config';
import './shared/services/yup';
import { authRouter } from './routes/auth.routes';

const app = Express();

app.use(Express.json());

app.use('/auth', authRouter);


app.listen(process.env.PORT || 4000, async () => {
  console.log(`Server Running on port ${process.env.PORT || 4000}`);
});