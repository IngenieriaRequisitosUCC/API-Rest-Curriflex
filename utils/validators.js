function validateEmail(email){
    const regexExpression =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    return regexExpression.test(email);
} 

function validatePassword(password){
    const regexExpression =  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    return regexExpression.test(password);
} 

module.exports = {validatePassword, validateEmail}