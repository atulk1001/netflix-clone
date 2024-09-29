export const checkValidateData = (email,password,name,dob) => {
    if(email.current) {
        const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.current.value);
        if(!isEmailValid) return "Email is not valid";
    }
    if(password.current) {
        const isPassValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password.current.value);
        if(!isPassValid) return "Password is not valid";
    }
    if(name.current) {
        const isNameValid = /([a-zA-Z0-9_\s]+)/.test(name.current.value);
        if(!isNameValid) return "Name is not valid";
    }
    if(dob.current) {
        return dob.current.value.length !== 10 && "Date of Birth is not valid"
    }
    return null;
}