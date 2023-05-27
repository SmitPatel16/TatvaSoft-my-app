import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import './Register.css';
import { Button, MenuItem, Select, Stack, TextField, ThemeProvider, colors, createTheme } from "@mui/material";
import { useFormik } from 'formik';
import axios from 'axios';
import { useEffect } from "react";


// import { validationSchema } from "../components/registerValidation";
// import * as Yup from 'yup';
import { signUpSchema } from "../schemas";
import userService from "../service/user_service";
// import FormControl from "@mui/material";
// import FormLabel from "@mui/material";
//Formik, Form, Field,


const theme = createTheme ({
    palette : {
        register_button : {
            main : colors.red[400]
        },
    }
})


function Register(){
    
    const navigate = useNavigate();
    
    const { values, errors, touched, handleSubmit, handleBlur, handleChange } = useFormik({
        initialValues: {
            firstName:"",
            lastName:"",
            emailAddress:"",
            roleId: 0,
            password:"",
            confirmPassword:"",
        },
        
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm();
            alert("First name: " + values.firstName + "\nLast name: " + values.lastName
                + "\nEmail address: " + values.emailAddress
                 );
                 navigate('/login');
        },
    });




    const [roleList, setRoleList] = useState([]);

const getRoles = () => {
  userService.getAllRoles()
    .then((res) => {
      setRoleList(res);
      console.log("Role list", res);
    })
    .catch((error) => {
      console.log("Error in getting roles", error);
    });
};

useEffect(() => {
  getRoles();
}, []);


    // const [roleList, setRoleList] = useState([]);

    // const getRoles = () => {
    //     userService.getAllRoles().then((res) => {
    //         setRoleList(res);
    //         console.log("Role list ", res)
    //     }).catch((error) => {
    //         console.log("Error in getting roles", error)
    //     });
    // };

    // useEffect(() => {
    //     getRoles();
    // }, []);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((data) => {
            console.log("Data is", data.data);
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    // console.log("errors",errors)
     
     return (
         <>
        <ThemeProvider theme={theme}>
            <Header/>
            
            <div className="title_container">
                <Stack direction="column" className="title_stack">
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
                </Stack>
            </div>
            
            <form className="registration_form" onSubmit={handleSubmit}>
                <div  className="register_detail_container">
                    <div className="personal_information">
                        <h2>Personal Information</h2>
                        <p>Please enter the following information to create your account.</p>
                        <div className="row">
                            <div className="column">
                                <div className="textfield_left">
                                    <Stack direction="column" className="register_input_field">
                                    <p>First Name *</p>
                                    {/* <label htmlFor="firstName">First Name *</label> */}
                                    
                                    <TextField 
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        size="small"
                                        className="input_field"
                                        placeholder="Enter your Name"
                                        value={values.firstName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        
                                        // size="small"
                                        // required
                                        // value={valueFName}
                                        // onChange={(e) => setValueFName(e.target.value)}
                                        // error={!valueFName}
                                        // helperText={!valueFName ? 'This field is Required' : ''}
                                    />
                                    { errors.firstName &&  touched.firstName ? (
                                        <p className="form-error">{errors.firstName}</p>
                                        ) : null}
                                    </Stack>
                                </div>
                                <div className="textfield_right">
                                    <Stack direction="column" className="register_input_field">
                                        <p>Last Name *</p>
                                        <TextField 
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            size="small"
                                            className="input_field"
                                            placeholder="Enter your Surname"
                                            value={values.lastName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        { errors.lastName &&  touched.lastName ? (
                                        <p className="form-error">{errors.lastName}</p>
                                        ) : null}
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
                                        type="email"
                                        id="emailAddress"
                                        name="emailAddress"
                                        size="small"
                                        className="input_field"
                                        placeholder="Enter your Email Address"
                                        value={values.emailAddress}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    { errors.emailAddress &&  touched.emailAddress ? (
                                        <p className="form-error">{errors.emailAddress}</p>
                                        ) : null}
                                    </Stack>
                                </div>
                                <div className="textfield_right">
                                    <Stack direction="column" className="register_input_field">
                                        <p>Roles *</p>    
                                        {/* <FormControl>                               */}
                                        {/* <Select 
                                            id="roleId"
                                            name="roleId"
                                            defaultValue={values.roleId}
                                            size="small"
                                            className="input_field"
                                            value={values.roleId}

                                            MenuProps={{
                                                classes: {
                                                    paper: materialClasses.customSelect,
                                                },
                                            }}
                                           
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        /> */}


                                        <Select
                                          id="role"
                                          name="role"
                                          className="input_field"
                                          value={values.roleId}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                        >
                                          {roleList.map((role) => (
                                            <MenuItem value={role.id} key={role.id}>
                                              {role.name}
                                            </MenuItem>
                                          ))}
                                        </Select>

                                        {roleList.length > 0 && 
                                            roleList.map((role) => (
                                                <MenuItem value={role.id} key={"name" + role.id}>
                                                    {role.name}
                                                </MenuItem>
                                            ))}
                                        {/* </FormControl> */}
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
                                type="password"
                                id="password"
                                name="password"
                                size="small"
                                className="input_field"
                                placeholder="Create password for your account"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            { errors.password &&  touched.password ? (
                                <p className="form-error">{errors.password}</p>
                                ) : null}
                            </Stack>
                            <Stack>
                            <p>Confirm Password *</p>
                            <TextField 
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                size="small"
                                className="input_field"
                                placeholder="Confirm your password"
                                value={values.confirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            { errors.confirmPassword &&  touched.confirmPassword ? (
                                <p className="form-error">{errors.confirmPassword}</p>
                                ) : null}
                            </Stack>
                            </div>
                        </div>
                    </div>
                    <div className="register_button_container">
                        <Button type="submit" color="register_button" variant="contained" className="register_button">
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