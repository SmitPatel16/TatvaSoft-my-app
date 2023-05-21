// import logo from './logo.svg';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import {BrowserRouter, Route, Routes} from 'react-router-dom' ;

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' Component={Register}></Route>
          <Route path='/login' Component={Login}></Route>
          <Route path='/product-list' Component={ProductList}></Route>
          <Route path='/' Component={Login}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
