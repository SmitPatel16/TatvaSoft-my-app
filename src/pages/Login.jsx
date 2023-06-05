import React from "react";
import './Login.css';
// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Register from "./Register";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
import { createTheme, ThemeProvider, Button, Stack, colors, TextField } from "@mui/material";
import { useFormik } from "formik";
import { signInSchema } from "../schemas";
import authService from "../service/auth.service";
import { toast } from "react-toastify";
import { useAuthContext } from "../context/auth.context";
import { RoutePaths } from "../utils/routePaths";

const theme = createTheme({
    palette : {
        left_btn : {
            main : colors.red[400]
        }
    }
})


function Login(){
    // const [valueEmail, setValueEmail] = useState('')
    // const [valuePass, setValuePass] = useState('')

    const authContext = useAuthContext();

    const navigate = useNavigate();

    const { values, errors, touched, handleSubmit, handleBlur, handleChange } = useFormik({
        initialValues: {
            email:"",
            password:""
        },
        validationSchema:signInSchema,
        onSubmit : (values) => {
            console.log("Login values are ",values);
            authService.login(values).then((res) => {
                delete res._id;
                delete res.__v;
                // authContext.setUser(res);
                toast.success("Login Successful");
                console.log("Successsssss Login");
                authContext.setUser(res);
                navigate(RoutePaths.BookListing);
            })
        }
    })


    return (
        <>
        <ThemeProvider theme={theme} >
            <div className="title_container">
                <Stack direction="column" className="title_stack">
                    <div className="navlink_header">
                            <ul className="navLink_list" type="none">
                                <li>
                                    <Link to="/login">Home</Link>
                                </li>
                                <li>&gt;</li>
                                <li id="current_page">
                                <Link to="/login">Login</Link>
                                </li>
                            </ul>
                    </div>
                    <div className="title_underline">
                        <h1>Login or Create an Account</h1>
                    </div>
                </Stack>
            </div>

            <Stack direction="row" className="main_container">
                <Stack direction="column" className="left_container">
                    <div className="login_heading">
                        <h3>New Customer</h3>
                        <p>Registration is free and easy</p>
                    </div>
                    <div className="left_list">
                        <ul>
                            <li>Faster checkout</li>
                            <li>Save multiple shipping addresses</li>
                            <li>View and track orders and more</li>
                        </ul>
                    </div>
                    <div className="left_btn">
                        <Button color="left_btn" variant="contained">
                            <p id="btn_txt">Create an Account</p>
                        </Button>
                    </div>
                </Stack>
                <Stack direction="column" className="left_container">
                    <div className="login_heading">
                        <h3>Registered Customers</h3>
                        <p>If you have an account with us, please log in.</p>
                    </div>
                    <Stack direction="column" className="right_field">
                        <form onSubmit={handleSubmit}>
                        <Stack direction="column" className="login_input_container">
                            <p>Email Address *</p>
                            <TextField 
                                type="email"
                                name="email"
                                required 
                                size="small"
                                placeholder="Enter your email" 
                                className="email_input" 
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                // value={valueEmail}
                                // onChange={(e) => setValueEmail(e.target.value)}
                                // error={!valueEmail}
                                // helperText={!valueEmail ? 'This field is Required' : ''}
                                />
                                { errors.email &&  touched.email ? (
                                        <p className="form-error">{errors.email}</p>
                                        ) : null}
                        </Stack>

                        <Stack className="login_input_container" direction="column">
                            <p>Password *</p>
                            <TextField 
                                type="password"
                                name="password"
                                size="small"
                                autoComplete="off"
                                placeholder="Enter your password" 
                                className="email_input" 
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            { errors.password &&  touched.password ? (
                                <p className="form-error">{errors.password}</p>
                                ) : null}
                        </Stack>
                        <Stack direction="column" className="login_right_btn">
                            <Button type="submit" color="left_btn" variant="contained" className="login_right_btn" >
                                <p id="btn_text">Login</p>
                            </Button>
                        </Stack>
                        </form>

                    </Stack>
                </Stack>
            </Stack>

        </ThemeProvider>
        </>
    );
}

export default Login;