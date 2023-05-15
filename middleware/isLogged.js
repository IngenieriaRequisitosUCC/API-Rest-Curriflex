import { tokenValidator} from "../utils/token.js";

const isLogged = (req, res, next) => {
    try{
        const {authorization: TOKEN } = req.headers;
        const data = tokenValidator(TOKEN);
        if(data == false) {
            return res.status(401).json({"msg": "Invalid Token"});
        }
        res.locals.data = data;
        next();
    }catch(e){
        return res.status(500).json({"msg": "Bad Request"});
    }
};

export {isLogged};