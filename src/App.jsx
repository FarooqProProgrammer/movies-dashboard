import React, {  useEffect, useState } from 'react'

import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Cookies from 'js-cookie'



export default function App() {

  const [user, setUser] = useState();

  useEffect(() => {



    const storedUser = Cookies.get('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route path={user === null ? '/login' : '/'} element={user === null ? <Login /> : <Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
