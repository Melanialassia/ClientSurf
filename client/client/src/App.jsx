import './App.css';

import {Routes, Route} from 'react-router-dom';

import Home from './components/features/Home/roots/Home';
import LoginForm from './components/features/LoginForm/roots/LoginForm';

const App = () => {


  return (
<div>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/account/create' element={<LoginForm/>}/>
</Routes>
</div>
  )
}

export default App
