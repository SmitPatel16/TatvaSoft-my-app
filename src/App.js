// import logo from './logo.svg';
import './App.css';
// import { RoutePaths } from './utils/routePaths';
// import Register from './pages/Register';
// import Login from './pages/Login';
// import ProductList from './pages/ProductList';
import { BrowserRouter } from 'react-router-dom' ;    // Route, Routes
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MainNavigation } from './components/MainNavigation';
import Header from './components/Header';
import Footer from './components/Footer';
import { AuthWrapper } from './context/auth.context';

function App() {
  return (
    <>
    <BrowserRouter>
      <AuthWrapper>
        <Header/>
        <main>
          <MainNavigation/>
        </main>
        <Footer/>
      <ToastContainer/>
      </AuthWrapper>
    </BrowserRouter>
    </>
  );
}

export default App;





/*        <Routes>
          <Route path='/register' Component={Register}></Route>
          <Route path='/login' Component={Login}></Route>
          <Route path='/product-list' Component={ProductList}></Route>
          <Route path='/' Component={Login}></Route>
        </Routes>
 */