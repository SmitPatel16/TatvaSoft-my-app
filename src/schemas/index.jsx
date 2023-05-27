import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    firstName: Yup.string().min(2, "Your name must contain atleast 2 Character").max(30).required("Please enter your Name"),
    lastName: Yup.string().min(2, "Your name must contain atleast 2 Character").max(30).required("Please enter your Surname"),
    emailAddress: Yup.string().email("Please enter valid Email Address").required("Please enter your Email Address"),
    password:Yup.string().min(6, "Your Password must contain atleast 6 Character").required("Please Create your password"),
    confirmPassword: Yup.string()
        .required("Confirm password is a required field")
        .oneOf([Yup.ref('password'), null], "Password must match"),

});

export const signInSchema = Yup.object({
    emailAddress: Yup.string().email(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i ,"Please enter valid Email Address").required("Please enter your Email Address"),
    password:Yup.string().min(6, "Your Password must contain atleast 6 Character").required("Please enter your password"),

});

 