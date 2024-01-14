import './App.css';

import {Routes, Route} from 'react-router-dom';

//COMPONENTS
import Home from './components/features/Home/roots/Home';
import LoginForm from './components/features/LoginForm/roots/LoginForm';
import Login from './components/features/Login/roots/Login';
import Details from './components/features/Details/roots/Details';
import ProductPage from './components/features/ProductPage/roots/ProductPage';
import Header from './components/features/Header/roots/Header';
import Footer from './components/features/Footer/roots/Footer';
import Cart from './components/features/Cart/roots/Cart';

const App = () => {


  return (

<div>
 
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/account/create' element={<LoginForm />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />

</div>
  )
}

export default App;
