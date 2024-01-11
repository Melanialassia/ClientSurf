import './App.css';

import {Routes, Route} from 'react-router-dom';

import Home from './components/features/Home/roots/Home';
import Details from './components/features/Details/roots/Details';
import LoginForm from './components/features/LoginForm/roots/LoginForm';

const App = () => {


  return (
<div>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/details/:id' element={<Details/>}/>
  <Route path='/account/create' element={<LoginForm/>}/>

</Routes>
</div>
  )
}

export default App
