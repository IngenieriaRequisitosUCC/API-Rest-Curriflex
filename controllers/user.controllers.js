import {UserModel as User} from '../models/User.model.js';
import {tokenGen} from "../utils/token.js";

/**
 * The function retrieves user data based on their ID and returns it as a JSON object.
 * @param req - The request object contains information about the HTTP request that was made, such as
 * the URL, headers, and any data that was sent in the request body.
 * @param res - The `res` parameter is an object representing the HTTP response that will be sent back
 * to the client. It contains properties and methods that allow the server to send data, set headers,
 * and control the response status.
 * @returns The function `get` is returning a JSON object containing the user's email, name, job,
 * profile, contact, education, experience, skills, languages, and theme. The status code of the
 * response is 200, indicating a successful request.
 */
const get = async (req, res) =>{
    try{
        const {_id} = res.locals.data
        const { email, name, job, profile, contact, education, experience, skills, languages, theme } = await User.findOne({_id});
        const data ={
            email, 
            name, 
            job, 
            profile,
            contact,
            education,
            experience,
            skills,
            languages,
            theme
        }
        return res.status(200).json(data);
    }catch(e){
        res.status(500).json({"msg": "Bad Request"})
    }
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
        const {_id} = await newUser.save();
        const token = tokenGen({_id});
        return res.status(201).json({token});
    }catch(e){
        let msg = "Bad Request";

        if (e.message.includes("duplicate key")){
            msg = "Email already registered";
        }else if(e.message.includes("User validation failed")){
            msg = e.message;
        }

        return res.status(500).json({
            msg
        });
    }
};

const update = (req, res) =>{
    return res.json({"msg": "Update"});
};

export {get, signIn, signUp, update};