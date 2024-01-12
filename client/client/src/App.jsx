import './App.css';

import {Routes, Route} from 'react-router-dom';
//COMPONENTS
import Home from './components/features/Home/roots/Home';
import LoginForm from './components/features/LoginForm/roots/LoginForm';
import Details from './components/features/Details/roots/Details';
import ProductPage from './components/features/ProductPage/roots/ProductPage';

const App = () => {
  return (

<div>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/account/create' element={<LoginForm/>}/>
  <Route path='/details/:id' element={<Details/>}/>
  <Route path='/producPage' element={<ProductPage/>}/>
</Routes>
</div>
  )
}

export default App;
