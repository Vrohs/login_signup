const mongoose = require('mongoose');
mongoose.connect(`mongodb://127.0.0.1:27017/testbase`);



const UserSchema = mongoose.Schema({

    username:{
        
        type: String,
        required: true,
        unique: true
    },

    password: {

        type: String,
        required: true,
        unique: true
    }
});

const UserModel = mongoose.model('user', UserSchema);

module.exports =  { UserModel }


