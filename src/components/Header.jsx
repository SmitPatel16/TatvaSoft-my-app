import './Header.css';
import bookService from '../service/book.service';
import React, { useMemo, useState } from "react";
import { logoHeader } from "../assets/images";
// import { cart } from "../assets/images";
// import Button from '@mui/material/Button';
import { Link, NavLink } from "react-router-dom";
import Box from '@mui/material/Box';
import { Button, Icon, Stack ,colors, TextField, List, ListItem } from "@mui/material";    //List, ListItem, Stack, TextField,
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAuthContext } from '../context/auth.context';
import shared from '../utils/shared';
import { RoutePaths } from '../utils/routePaths';


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

    const authContext = useAuthContext();


    // const open = false;
    const [query, setquery] = useState("");
    const [bookList, setbookList] = useState([]);
    const [openSearchResult, setOpenSearchResult] = useState(false);

    const searchBook = async () => {
        const res = await bookService.searchBook(query);
        setbookList(res);
    }

    const search = () => {
        document.body.classList.add("search-results-open");
        searchBook();
        setOpenSearchResult(true);
    }

    const logOut = () => {
        authContext.signOut();
    }

    const items = useMemo(() => {
        return shared.NavigationItems
        
      }, []);

    // const items = useMemo(() => {
    //     return shared.NavigationItems.filter(
    //       (item) =>
    //         !item.access.length || item.access.includes(authContext.user.roleId)
    //     );
    //   }, [authContext.user]);
    
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
                {!authContext.user.id && (
                <div className="header_right">
                    <List className="top-nav-bar">
                    {!authContext.user.id && (
                      <>
                        <ListItem>
                          <NavLink to={RoutePaths.Login} title="Login">
                            Login
                          </NavLink>
                        </ListItem>
                        <ListItem>
                          <Link to={RoutePaths.Register} title="Register">
                            Register
                          </Link>
                        </ListItem>
                      </>
                    )}
                    {items.map((item, index) => (
                      <ListItem key={index}>
                        <Link to={item.route} title={item.name}>
                            {console.log("inside map function")}
                          {item.name}
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                    {/* <ul className="header_list">
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>|</li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </ul> */}
                    <Box className="header_cart" display="flex" component="span" sx={{ p: 1, border: '1px solid #f14d54' }}>
                        <Icon color="error" component={ShoppingCartIcon}/>                            
                        <p>0</p>
                        <p>Cart</p>
                    </Box>

                        {/* {items.map((item, index) => {
                            <ListItem key={index}>
                                <Link to={item.route} title={item.name}>
                                    {item.name}
                                </Link>
                            </ListItem>
                        })} */}
                </div>
                
                )}
                {authContext.user.id &&(
                    <div className='btn_logout_container'>
                        <Button className='btn_logout' color='error' variant='outlined' onClick={() => logOut()}>
                            Log out
                        </Button>
                    </div>
                )}
            </div>


            <div className="search_container">
                <div>
                    {/* <div className="search-result-open"> */}
                    <div className="search-overlay search-result-open"
                        onClick={() => {
                            setOpenSearchResult(false);
                            document.body.classList.remove("search-result-open");
                        }}
                    ></div>
                    {/* </div> */}
                    {/* <input id="search_text" type="text" placeholder="What are you looking for..."/> */}
                    <TextField
                        id="text"
                        name="text"
                        size='small'
                        className='search_text_field'
                        placeholder="What are you looking for..."
                        variant="outlined"
                        value={query}
                        onChange={(e) => setquery(e.target.value)}
                    />
                    {/* <div className="search-result-open"> */}
                    {openSearchResult &&(
                        <>
                            <div className="product-listing">
                                {bookList?.length === 0 && (
                                    <p className="no-product">No product found</p>
                                )}

                                <List className="related-product-list">
                                    {bookList?.length > 0 && 
                                        bookList.map((item, i) => {
                                            return (
                                                <ListItem key={i}>
                                                    <div className="inner-block">
                                                        <div className="left-col">
                                                            <span className="title">{item.name}</span>
                                                            <p>{item.description}</p>
                                                        </div>
                                                        <div className="right-col">
                                                            <span className="price">{item.price}</span>
                                                            <Link > 
                                                                Add to Cart
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </ListItem>
                                            );
                                        })
                                    }
                                </List>

                            </div>
                        </>
                    )}
                    {/* </div> */}
                </div>
                <div className="button_container">
                    <Stack spacing={2} direction="row">
                    <Button startIcon={<SearchIcon/>} onClick={search} color="secondary" className="button" type='submit' variant="contained">
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
