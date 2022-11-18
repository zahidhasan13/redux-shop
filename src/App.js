import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Cart from './pages/Cart/Cart';
import CheckOut from './pages/CheckOut';
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import SingleProduct from './pages/SingleProduct/SingleProduct';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product/:id' element={<SingleProduct/>}/>
        <Route path='/checkOut' element={<CheckOut/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
