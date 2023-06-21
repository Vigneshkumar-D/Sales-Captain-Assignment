import {Routes, Route} from 'react-router-dom'

import Login from './components/Login'

import Home from './components/Home'

import './App.css'

const App = () => (
  <Routes>
    <Route exact path="/login" Component={Login} />
    <Route exact path="/" Component={Home} />
  </Routes>
)

export default App
