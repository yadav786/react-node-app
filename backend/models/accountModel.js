import { Schema } from "mongoose";
import * as  mongoose from 'mongoose';

const AccountSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    title: {
        type: String
    },
    desc: {
        type: String
    },
    category: {
        type: String
    }
});

export const accountsModel = mongoose.model('accounts', AccountSchema);
