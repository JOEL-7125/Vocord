import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Main } from './pages/Main';
import Contact from './pages/contact';

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLogin(!!user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Or a spinner component
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route 
          path='/login' 
          element={!isLogin ? <Login /> : <Navigate to="/main" />} 
        />
        <Route 
          path='/main' 
          element={isLogin ? <Main /> : <Navigate to="/login" />} 
        />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App
