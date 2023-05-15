import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config("../");
const SECRET_KEY = process.env.SECRET_KEY;

/**
 * This function generates a JSON Web Token (JWT) with a given data and a secret key that expires in 24
 * hours.
 * @param data - The data parameter is the payload that will be encoded in the JWT token. It can be any
 * JSON object that you want to include in the token.
 * @returns The function `tokenGen` is returning a JSON Web Token (JWT) that is generated using the
 * `jwt.sign` method from the `jsonwebtoken` library. The token is signed with a `SECRET_KEY` and has
 * an expiration time of 24 hours. The `data` parameter passed to the function is the payload that will
 * be encoded in the token.
 */
const tokenGen = (data)=>{
    return jwt.sign(data, SECRET_KEY, { expiresIn: '24h' });
};

/**
 * This function validates a token using a secret key and returns the decoded token or false if there
 * is an error.
 * @param token - The `token` parameter is a string that represents a JSON Web Token (JWT) that needs
 * to be validated.
 * @returns The function `tokenValidator` is returning the decoded token if it is valid and has been
 * verified using the `jwt.verify` method with the `SECRET_KEY`. If the token is invalid or cannot be
 * verified, the function returns `false`.
 */
const tokenValidator = (token) => {
    try{
        return jwt.verify(token, SECRET_KEY);
    }catch(err){
        return false;
    }
};

export {tokenGen, tokenValidator};