import Mongoose from 'mongoose';
import ItemSchema from './Item';

const Schema = Mongoose.Schema;

const categorySchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    items:[
        ItemSchema
    ],
});

const Category = Mongoose.model(categorySchema,'Category');

export default Category;