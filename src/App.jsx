import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Contact from './components/molecules/Contact'
import Depas from './components/molecules/departamentos';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/departamentos" element={<Depas />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App