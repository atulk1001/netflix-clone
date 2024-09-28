export const checkValidateData = (email,password,name,dob) => {
    console.log(email,password,name);
    if(email) {
        const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.current.value);
        if(!isEmailValid) return "Email is not valid";
    }
    if(password) {
        const isPassValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password.current.value);
        if(!isPassValid) return "Password is not valid";
    }
    if(name) {
        const isNameValid = /([a-zA-Z0-9_\s]+)/.test(name.current.value);
        if(!isNameValid) return "Name is not valid";
    }
    if(dob) {
        return dob.length !== 10 && "Date of Birth is not valid"
    }
    return null;
}