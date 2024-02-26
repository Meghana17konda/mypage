function validation(values) {
    let errors = {};

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (!values.name) {
        errors.name = "* Name should not be empty";
    } else {
        errors.name = ""; // Clear the error if the input is valid
    }

    if (!values.email) {
        errors.email = "* Email should not be empty";
    } else if (!emailPattern.test(values.email)) {
        errors.email = "* Invalid email address";
    } else {
        errors.email = ""; // Clear the error if the input is valid
    }

    if (!values.password) {
        errors.password = "* Password should not be empty";
    } else if (!passwordPattern.test(values.password)) {
        errors.password = "* Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number";
    } else {
        errors.password = ""; // Clear the error if the input is valid
    }

    return errors;
}

export default validation;
