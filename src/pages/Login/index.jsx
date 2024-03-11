import { Box, Button, Input } from '@chakra-ui/react'
import React from 'react'

export default function Login() {
    return (
        <Box
            width={'100%'}
            height={'100vh'}
            backgroundColor={'#6100C2'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Box
                width={'30%'}
                height={'60%'}
                bgColor={'#FFF'}
                rounded={'2xl'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                padding={10}
                gap={5}
            >
                <Input
                    width={'100%'}
                    placeholder='Enter Email'
                />
                <Input
                    width={'100%'}
                    placeholder='Enter Password'
                />
                <Button>Login</Button>
            </Box>
        </Box>
    )
}
