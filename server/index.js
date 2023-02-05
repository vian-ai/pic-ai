import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './db/connect.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', async (req, res) => {
    res.send('Hello world');
});

const startServer = async () => {
    try {
        connectDB(process.env.MONGO_URI);
    
        app.listen(8080, () => {
            console.log('Server is now running on port http://localhost:8080')
        });
    } catch (error) {
        console.log(error);
    };
};

startServer();