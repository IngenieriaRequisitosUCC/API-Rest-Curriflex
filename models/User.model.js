import {Schema, model} from 'mongoose';

const userSchema = new Schema({
    // Atributos que contendra el usuario

});

const UserModel = model('User', userSchema);

export default UserModel;