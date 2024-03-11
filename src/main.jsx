import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-multi-carousel/lib/styles.css';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from './Hooks/AuthContext';



ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </AuthProvider>
)
