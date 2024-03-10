import React from 'react'
import Welcome from './pages/Welcome'
import { ChakraProvider } from '@chakra-ui/react'
import Home from './pages/Home'


export default function App() {
  return (
    <ChakraProvider>
      {/* <Welcome /> */}
      <Home />
    </ChakraProvider>
  )
}
