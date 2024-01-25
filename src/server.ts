import Express from 'express'; 
import 'dotenv/config';

const app = Express();

app.use(Express.json());



app.listen(process.env.PORT || 4000, () => {
  console.log(`Server Running on port ${process.env.PORT || 4000}`);
});