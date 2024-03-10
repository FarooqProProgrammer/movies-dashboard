import React from 'react'
import WelcomeBanner from "../assets/WelcomeBanner.png"
import { Box } from '@chakra-ui/react'

export default function WelcomeScreen() {
  return (
    <Box
       width={'100%'}
       height={'100vh'}
        style={{ backgroundImage: `url(${WelcomeBanner})`, backgroundSize:'cover',backgroundPosition:'center' }}
    >
        
    </Box>
  )
}
