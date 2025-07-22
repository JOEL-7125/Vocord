import React, { useState } from 'react'
import { Home } from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { Main } from './pages/Main'
import Contact from './pages/contact'

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = (username, password) => {
    // Dummy login logic
    if (username === 'admin' && password === '1234') {
      setIsLogin(true);
      return true;
    }
    return false;
  }

  const handleLogout = () => {
    setIsLogin(false);
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route 
          path='/login' 
          element={<Login handleLogin={handleLogin} />} 
        />
        <Route 
          path='/main' 
          element={isLogin ? <Main handleLogout={handleLogout} /> : <Login handleLogin={handleLogin} />} 
        />
        <Route path='/contact' element={<Contact />} />

      </Routes>
    </div>
  )
}

export default App
