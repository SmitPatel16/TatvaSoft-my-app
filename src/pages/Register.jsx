import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import './Register.css';
import { Button, Stack, TextField, ThemeProvider, colors, createTheme } from "@mui/material";

const theme = createTheme ({
    palette : {
        register_button : {
            main : colors.red[400]
        },
    }
})

function Register(){

    const [valueFName, setValueFName] = useState('')
    const [valueLName, setValueLName] = useState('')
    const [valueEmail, setValueEmail] = useState('')
    const [valuePass, setValuePass] = useState('')
    const [valueConfirmPass, setValueConfirmPass] = useState('')

    return (
        <>
        <ThemeProvider theme={theme}>
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
                                <Link to="/register">Register</Link>
                                </li>
                            </ul>
                    </div>
                    <div className="title_underline">
                        <h1>Login or Create an Account</h1>
                    </div>
                </stack>
            </div>

            <form>
                <div  className="register_detail_container">
                    <div className="personal_information">
                        <h2>Personal Information</h2>
                        <p>Please enter the following information to create your account.</p>
                                                
                        <div className="row">
                            <div className="column">
                                <div className="textfield_left">
                                    <Stack direction="column" className="register_input_field">
                                    <p>First Name *</p>
                                    <TextField 
                                            size="small"
                                            className="input_field"
                                            placeholder="Enter your Name"
                                            required
                                            value={valueFName}
                                            onChange={(e) => setValueFName(e.target.value)}
                                            error={!valueFName}
                                            helperText={!valueFName ? 'This field is Required' : ''}
                                    />
                                    </Stack>
                                </div>
                                <div className="textfield_right">
                                    <Stack direction="column" className="register_input_field">
                                        <p>Last Name *</p>
                                        <TextField 
                                            size="small"
                                            className="input_field"
                                            placeholder="Enter your Surname"
                                            required 
                                            value={valueLName}
                                            onChange={(e) => setValueLName(e.target.value)}
                                            error={!valueLName}
                                            helperText={!valueLName ? 'This field is Required' : ''}
                                        />
                                    </Stack>
                                </div>
                            </div>            
                        </div>
                        <div className="row">
                            <div className="column">
                                <div className="textfield_left">
                                    <Stack direction="column" className="register_email_input_field">
                                    <p>Email Address *</p>
                                    <TextField 
                                        size="small"
                                        className="input_field_email"
                                        placeholder="Enter your Email Address"
                                        required
                                        value={valueEmail}
                                        onChange={(e) => setValueEmail(e.target.value)}
                                        error={!valueEmail}
                                        helperText={!valueEmail ? 'This field is Required' : ''}
                                    />
                                    </Stack>
                                </div>
                                
                            </div>            
                        </div>
                    </div>

                    <div className="login_information">
                        <h2>Login Information</h2>

                        <div className="row">
                            <div className="column">
                            <Stack>
                            <p>Password *</p>
                            <TextField 
                                size="small"
                                type="password"
                                className="input_field"
                                required
                                value={valuePass}
                                onChange={(e) => setValuePass(e.target.value)}
                                error={!valuePass}
                                helperText={!valuePass ? 'This field is Required' : ''}
                            />
                            </Stack>
                            <Stack>
                            <p>Confirm Password *</p>
                            <TextField 
                                size="small"
                                type="password"
                                className="input_field"
                                required
                                value={valueConfirmPass}
                                onChange={(e) => setValueConfirmPass(e.target.value)}
                                error={!valueConfirmPass}
                                helperText={!valueConfirmPass ? 'This field is Required' : ''}
                            />
                            </Stack>
                            </div>
                        </div>
                    </div>
                    <div className="register_button_container">
                        <Button color="register_button" variant="contained" className="register_button">
                            <p>Register</p>
                        </Button>
                    </div>
                </div>
        </form>
                
        <Footer/>
        </ThemeProvider>    
        </>
    );
}

export default Register;






// <Stack spacing={0} direction="row">
//                             <Stack className="column" direction="column">
//                                 <p>First Name *</p>
//                                 <TextField 
//                                 className="text_field"
//                                     required 
//                                     error={!value}
//                                     onChange={(e) => setValue(e.target.value)}
//                                     helperText={!value ? 'This field is required' : ''}
//                                 ></TextField>
//                             </Stack>
//                             <Stack className="column2" direction="column">
//                                 <p>First Name *</p>
//                                 <TextField 
//                                 className="text_field"
//                                     required 
//                                     error={!value}
//                                     onChange={(e) => setValue(e.target.value)}
//                                     helperText={!value ? 'This field is required' : ''}
//                                 ></TextField>
//                             </Stack>
//                         </Stack>