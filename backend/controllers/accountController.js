import * as express from 'express';
export const accountController = express.Router();
import { accountsModel } from '../models/accountModel.js';
// get all
accountController.get('/', async(req, res) => {
    try {
        const account = await accountsModel.findOne();
        return res.json(account.title);
    } catch (error) {
        console.error(error);
    }
});
