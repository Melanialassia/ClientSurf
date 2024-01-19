import './App.css';

import {Routes, Route} from 'react-router-dom';

//COMPONENTS
import ProductPage from './components/features/ProductPage/roots/ProductPage';
import LoginForm from './components/features/LoginForm/roots/LoginForm';
import Details from './components/features/Details/roots/Details';
import Header from './components/features/Header/roots/Header';
import Footer from './components/features/Footer/roots/Footer';
import Login from './components/features/Login/roots/Login';
import Home from './components/features/Home/roots/Home';
import Cart from './components/features/Cart/roots/Cart';
import AboutUs from './components/features/About/roots/AboutUs';
import FavoritesPage from './components/features/FavoritesPage/root/FavoritesPage';
import Services from './components/features/Services/roots/Services';
import CreateProducts from './adminComponents/features/CreateProduct/roots/CreateProducts';
import MyAccount from './userComponents/features/UserDashboard/roots/MyAccount';
import ChangePolicy from './components/features/ChangePolicy/components/ChangePolicy';

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
        <Route path='/aboutus' element= {<AboutUs/>} />
        <Route path='/favorites' element= {<FavoritesPage/>} />
        <Route path='/services' element= {<Services/>}/>
        <Route path='/admin/dashboard' element= {<CreateProducts/>} />
        <Route path='/my-account' element= {<MyAccount/>} />
        <Route path='/change-policy' element= {<ChangePolicy />} />
      </Routes>
      <Footer />

</div>
  )
}

export default App;
