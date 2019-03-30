import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

const salesSchema = new Schema({
    date:{
        type: Date,
        default: Date.now,
        required: True,
    },
    item: {
        type: Schema.Types.ObjectId,
        ref: 'Item',
    },
    qty:{
        type: Number,
        required: True,
        default: 1,
    }
});

const Sales = Mongoose.model(salesSchema, 'Sales');

export default Sales;