import React from "react";
import './Login.css';
import { useState } from "react";
import { Link } from "react-router-dom";
// import Register from "./Register";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { createTheme, ThemeProvider, Button, Stack, colors, TextField } from "@mui/material";

const theme = createTheme({
    palette : {
        left_btn : {
            main : colors.red[400]
        }
    }
})


function Login(){
    const [valueEmail, setValueEmail] = useState('')
    const [valuePass, setValuePass] = useState('')

    return (
        <>
        <ThemeProvider theme={theme} >
            <Header/>
            <div className="title_container">
                <stack direction="column" className="title_stack">
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
                </stack>
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
                        <Stack direction="column" className="login_input_container">
                            <p>Email Address *</p>
                            <TextField 
                                type="email"
                                required 
                                size="small"
                                placeholder="Enter your email" 
                                className="email_input" 
                                value={valueEmail}
                                onChange={(e) => setValueEmail(e.target.value)}
                                error={!valueEmail}
                                helperText={!valueEmail ? 'This field is Required' : ''}/>
                        </Stack>

                        <Stack className="login_input_container" direction="column">
                            <p>Password *</p>
                            <TextField 
                                type="password"
                                required 
                                size="small"
                                placeholder="Enter your password" 
                                className="email_input" 
                                value={valuePass}
                                onChange={(e) => setValuePass(e.target.value)}
                                error={!valuePass}
                                helperText={!valuePass ? 'This field is Required' : ''}
                            />
                        </Stack>

                        <Stack direction="column" className="login_right_btn">
                            <Button color="left_btn" variant="contained" className="login_right_btn" >
                                <p id="btn_text">Login</p>
                            </Button>
                        </Stack>

                    </Stack>
                </Stack>
            </Stack>

            <Footer/>
        </ThemeProvider>
        </>
    );
}

export default Login;