
export const checkValidData = (name,email, password) =>{
    // const isValidName = /^[A-Z][a-zA-Z0-9_\s]{2,29}$/.test(name);
   const isEmailValid =  /^\S+@\S+\.\S+$/.test(email);
   const  isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

 if (name !== "" && name.length < 3) return "Invalid name";    
 if(!isEmailValid) return "Email Id is not valid";
    if(!isPasswordValid) return "Password is not valid";

    return null;
}