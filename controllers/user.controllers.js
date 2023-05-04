import {UserModel as User} from '../models/User.model.js';

const get = (req, res) =>{
    return res.status(200).json({user: "Name"});
};

const signIn = (req, res) =>{
    return res.json({"msg": "signIn"});
};

/**
 * It takes the request body, creates a new user, saves the user, and returns a response.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The user object is being returned.
 */
const signUp = async(req, res) =>{
    try{
        const newUser = new User(req.body);
        const user = await newUser.save();
        return res.status(201).json(user);
    }catch(e){
        return res.status(500).json({
            "msg": "Bad Request"
        });
    }
};

const update = (req, res) =>{
    return res.json({"msg": "Update"});
};

export {get, signIn, signUp, update};