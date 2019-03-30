import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

export const itemSchema = new Schema({
    name:{
        type: String,
        required: True,
        unique: True,
    },
    photo:{
        type: String,
        default: 'empty',
    },
    price:{
        type: Number,
        required: True,
    },
    sold:{
        type: Number,
        default: 0,
    },
});

const Item = Mongoose.model(itemSchema,'Item');

export default Item;