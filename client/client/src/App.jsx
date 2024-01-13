import './App.css';

import {Routes, Route} from 'react-router-dom';
//COMPONENTS
import Home from './components/features/Home/roots/Home';
import LoginForm from './components/features/LoginForm/roots/LoginForm';
import Login from './components/features/Login/roots/Login';
import Details from './components/features/Details/roots/Details';
import ProductPage from './components/features/ProductPage/roots/ProductPage';
import Cart from './components/features/Cart/roots/Cart';

const App = () => {
  return (

<div>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/account/create' element={<LoginForm/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/details/:id' element={<Details/>}/>
  <Route path='/products' element={<ProductPage/>}/>
  <Route path='/cart' element={<Cart/>}/>
</Routes>
</div>
  )
}

export default App;
