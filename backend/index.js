import cors from 'cors';
import express from 'express';
import * as mongoose from 'mongoose';
import { accountController } from './controllers/accountController.js';
const port = process.env.port || 3001;
// mongoose.set('debug', true);
const app = express();
const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.cjd5b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Server connected to MongoDb!');
    } catch (err) {
        console.error(err);
    }
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use('/images', express.static('public/images'));
    app.use('/api', accountController);
    app.listen(port, () => {
        console.log(`Server is listening on ${port}!!!!!!!!!`);
    });
};

start();


