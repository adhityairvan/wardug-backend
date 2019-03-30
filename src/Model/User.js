import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

const userSchema = new Schema({
    username:{
        type: String,
        unique: True,
        required: True,
    },
    name:{
        type: String,
        default: this.username,
    },
    password: String,
    phone:{
        type: String,
        required: True,
    },
    token:{
        jwt: String,
    },
    cart:[
        {
            date:{
                type: Date,
                default: Date.now,
            },
            item: {
                type: Schema.Types.ObjectId,
                ref: 'Item',
            },
            qty:{
                type: Number,
                default: 1,
            }
        },
    ],
});

const User = Mongoose.model(userSchema,'User');

export default User;