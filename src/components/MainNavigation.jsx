import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { RoutePaths } from '../utils/routePaths';
import Login from "../pages/Login";
import Register from "../pages/Register";
import { useAuthContext } from "../context/auth.context";
import BookListing from '../pages/BookListing';
export const MainNavigation = () => {

    const authContext = useAuthContext(); 

    const Redirect = <Navigate to={RoutePaths.Login} />
     

    return(
        <Routes>
            {/* <Route exact path={RoutePaths.Home} element={<Login />}></Route> */}
            <Route exact path={RoutePaths.Login} element={<Login />}></Route>
            <Route exact path={RoutePaths.Register} element={<Register />}></Route>
            <Route exact 
                path={RoutePaths.BookListing} 
                element={authContext.user.id ? <BookListing /> : Redirect}>
            </Route>
        </Routes>
    );
};