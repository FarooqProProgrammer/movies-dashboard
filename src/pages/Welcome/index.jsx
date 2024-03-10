import React from 'react'
import { Box, Flex, Link, Button, Text } from "@chakra-ui/react"
import { BsCupHot } from "react-icons/bs";


export default function Welcome() {
    return (
        <Flex
            width={'100%'}
            height={'100vh'}
            backgroundColor={'#7900C2'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={'10px'}
        >
            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <BsCupHot size={40} color='#FFF' />

                <Text color={'#FFF'} fontSize={'3xl'} ms={2} mt={2} textTransform={'uppercase'}>Watch</Text>
            </Box>
            <Button px={14} bgColor={'#FFF'} color={'#6100C2'}>Login</Button>
            <Flex
                justifyContent={'center'}
                alignItems={'center'}
                gap={2}
            >
                <Text color={'#FFF'}>No Account</Text>
                <Link color={'#FFF'} fontWeight={900}>Signup ?</Link>
            </Flex>
        </Flex>
    )
}
