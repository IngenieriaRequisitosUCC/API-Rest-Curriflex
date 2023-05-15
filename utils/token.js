import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config("../");

const SECRET_KEY = process.env.SECRET_KEY;

const tokenGen = (data)=>{
    return jwt.sign(data, SECRET_KEY, { expiresIn: '24h' });
};

const tokenValidator = (token) => {
    try{
        return jwt.verify(token, SECRET_KEY);
    }catch(err){
        return false;
    }
};

export {tokenGen, tokenValidator};