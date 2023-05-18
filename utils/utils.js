function validateEmail(email){
    
    var regexExpression =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if( regexExpression.test(email) ){
        return true;
    }
    return false;
} 

function validatePassword(password){
    
    var regexExpression =  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if( regexExpression.test(password) ){
        return true;
    }
    return false;
} 

module.exports = {validatePassword, validateEmail}