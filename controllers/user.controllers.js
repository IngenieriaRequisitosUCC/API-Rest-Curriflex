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

/**
 * This function handles user sign-in by checking the email and password, generating a token, and
 * returning it in a JSON response.
 * @param req - req stands for request and it is an object that contains information about the incoming
 * HTTP request such as the request headers, request parameters, request body, etc.
 * @param res - `res` is the response object that is sent back to the client after processing the
 * request. It contains information such as the status code, headers, and response body. In this case,
 * the `res` object is used to send a JSON response containing a token if the user is successfully
 * authenticated,
 * @returns a JSON response with a status code of 200 and a token if the user is found and the password
 * matches. If there is an error, it returns a JSON response with an appropriate error message and
 * status code.
 */
const signIn = async (req, res) =>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});

        if(!user) throw new Error(404);
        if(password != user.password) throw new Error(400);

        const _id = user._id;
        const token = tokenGen({_id});
        return res.status(200).json({token});
    }catch({message}){
        console.log(message);
        message = parseInt(message);             
        const msg = message == 404 ? "Not Found" : "Wrong email or password";
        return res.status(message).json({
            msg
        });
    }
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