const { validateEmail, validatePassword } = require("../utils/validators.js");

const isValidForm = (req, res, next) => {
    try{
        const {email, password} = req.body;

        if (!validateEmail(email) || !validatePassword(password)){
            throw new Error("Invalid format of email or password");
        }

        next();
    }catch({message: msg}){
        return res.status(500).json({msg});
    }
};

module.exports = {
    isValidForm
}