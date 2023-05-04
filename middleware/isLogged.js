const isLogged = (req, res, next) => {
    try{
        next();
    }catch(e){
        return res.status(500).json({"msg": "Bad Request"});
    }
};

export {isLogged};