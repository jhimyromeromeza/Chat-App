import express from 'express';
import dotenv from 'dotenv';
import autRoutes from './Routes/aut.routes.js';
import messageRoutes from './Routes/message.routes.js'
import morgan from 'morgan'
import {connectToMongoDB} from './db/connectToMongo.js';
import cookieParser from 'cookie-parser';
import userRoutes from './Routes/user.routes.js'

const app = express();

dotenv.config();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', autRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);


const port =process.env.PORT || 5000;

app.listen(port, () => {
    connectToMongoDB();
    console.log(`server listening in ${port}`)
})
