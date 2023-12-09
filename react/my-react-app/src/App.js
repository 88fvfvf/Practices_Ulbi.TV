import React, { useEffect, useState } from 'react';
import './style/App.css'
import { BrowserRouter } from "react-router-dom" // Import Outlet and Navigate
import Navbar from './component/UI/Navbar/Navbar';
import AppRouter from './component/AppRouter';
import { AuthContext } from './context';

function App() {
  const [isAuth, setIsAuth] = useState(true);

  useEffect(() => {
    if(localStorage.getItem('auth')){
      setIsAuth(true)
    }
  },[])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
