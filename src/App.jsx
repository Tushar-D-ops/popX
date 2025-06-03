
import { BrowserRouter, Route, Routes} from 'react-router-dom'
// import './App.css'
import Welcome from './components/Welcome'
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App
