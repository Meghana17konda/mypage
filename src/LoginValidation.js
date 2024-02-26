function validation(values) {
    alert("")
    let error={}
    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern=/^(?=.*\d)(?=.8[a-z])(?=.8[A-Z])(a-zA-Z0-9){8,}$/

    if(values.email ===""){
        error.email="*Name Should not be empty"
    }
    else if(!email_pattern.test(values.email)){
        error.email="*Email Didn't match"
    }
    else{
        error.email=""
    }

    if(values.password ===""){
        error.password="*Password Should not be empty"
    }
    else if(!password_pattern.test(values.password)){
        error.password="*Password Didn't match"
    }
    else{
        error.password=""
    }
    return error;
}
export default validation;