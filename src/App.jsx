import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'
import FavouriteScreen from './pages/FavouriteScreen'
import PlayerScreen from './pages/PlayerScreen'
import TrendingScreen from './pages/TrendingScreen'

export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/favourite-screen' element={<FavouriteScreen />} />
          <Route path='/player-screen' element={<PlayerScreen />} />
          <Route path='/trending-screen' element={<TrendingScreen />} />
          <Route path='/welcome-screen' element={<TrendingScreen />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}
