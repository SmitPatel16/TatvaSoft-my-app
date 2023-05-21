import { Stack } from "@mui/material";
import { logoHeader } from "../assets/images";
import React from "react";
import './Header.css';

function Footer(){
    return(
        <>
        
        <div className="footer">
            <Stack spacing={0.8} direction="column" className="footer_stack">
                <img src={logoHeader} alt="logo" />
                <p>© 2015 Tatvasoft.com. All rights reserved.</p>
            </Stack>
        </div>

        </>
    );
}

export default Footer;