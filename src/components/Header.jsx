import React from "react";
import './Header.css';
import { logoHeader } from "../assets/images";
// import { cart } from "../assets/images";
// import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import { Button, Icon, Stack, colors } from "@mui/material";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const theme = createTheme({
    palette: {
        secondary : {
            main: colors.green[500], 
        },
        custom : {
            main: colors.red[600],
        }
    },
})
function Header(){

    return(
        <ThemeProvider theme={theme}>
        <>
            <div className="header_upper">
                <span> </span>
            </div>
            
            <div className="header">
                <div className="header_left">
                    <img src={logoHeader} alt="logo" />
                </div>
                
                <div className="header_right">
                    <ul className="header_list">
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>|</li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                    <Box className="header_cart" display="flex" component="span" sx={{ p: 1, border: '1px solid #f14d54' }}>
                        <Icon color="error" component={ShoppingCartIcon}/>                            
                        <p>0</p>
                        <p>Cart</p>
                    </Box>
                </div>
            </div>


            <div className="search_container">
                <div>
                    <input id="search_text" type="text" placeholder="What are you looking for..."/>
                </div>
                <div className="button_container">
                    <Stack spacing={2} direction="row">
                    <Button startIcon={<SearchIcon/>} color="secondary" className="button" variant="contained">
                        <span>Search</span>    
                    </Button>
                    <Button color="custom" className="button" variant="contained">
                        <span>Cancel</span>    
                    </Button>
                    </Stack>
                </div>
            </div>

            

        </>
        </ThemeProvider>
    );

}

export default Header;
