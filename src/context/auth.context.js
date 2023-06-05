import React, { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import shared from "../utils/shared";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RoutePaths } from "../utils/routePaths";
import { toast } from "react-toastify";

const initialUserValue = {
    id:0,
    firstName:"",
    lastName:"",
    email:"",
    roleId: 0,
    password:"",
}

const initialState = {
    setUser: () => {},
    user: initialUserValue,
    signOut: () => {},
    appInitialize: false,
} 

const authContext = createContext(initialState);

export const AuthWrapper = ({ children }) => {
    
    const [user, _setUser] = useState(initialUserValue);    

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const setUser = (user) => {
        localStorage.setItem(shared.localStorageKeys.USER, JSON.stringify(user));
        _setUser(user);
    };

    const signOut = () => {
        _setUser(initialUserValue);
        localStorage.removeItem(shared.localStorageKeys.USER);
        navigate(RoutePaths.Login);
    }

    useEffect(() => {
        const str = 
            JSON.parse(localStorage.getItem(shared.localStorageKeys.USER)) ||
            initialUserValue;
        if (str.id) {
            _setUser(str);
        }
        if (!str.id) {
            navigate(RoutePaths.Login);
        }
    },[])

    useEffect(() => {
        if (pathname === RoutePaths.Login && user.id) {
            navigate(RoutePaths.BookListing);
        }

        if (!user.id) {
            return;
        }

        const access = shared.hasAccess(pathname, user);
        if (!access) {
            toast.warning("Sorry, You are not authorized to access this page");
            navigate(RoutePaths.BookListing);
            return;
        }
    },[user, pathname])

    const value = {
        user,
        setUser,
        signOut,
    }
    return <authContext.Provider value={value}>{children}</authContext.Provider>
}

export const useAuthContext = () => {
    return useContext(authContext);
} 