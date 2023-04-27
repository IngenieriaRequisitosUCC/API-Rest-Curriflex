import {Schema, model} from 'mongoose';

/* Creating a schema for the user. */
const userSchema = new Schema({
    email: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true
    },
    name: {
        type:String,
        required: true
    },
    job: {
        type:String,
        required: true
    },
    profile: {
        type:String,
        required: true
    },
    contact: {
        phone: String,
        web: String,
    }, 
    education: [{
        degree: String,
        start: Date, 
        end: Date, 
        location: String, 
        college: String, 
        description: String,
    }],
    experience: [{
        job: String,
        start: Date, 
        end: Date, 
        location: String, 
        company: String, 
        description: String,
    }],
    skills: [{
        skill: String, 
        rating: Number,
    }],
    languages: [{
        language: String, 
        rating: Number,
    }],
    theme: String,
});

const UserModel = model('User', userSchema);

export {UserModel};