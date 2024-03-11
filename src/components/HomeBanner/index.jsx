import React from 'react'
import { Box, Flex, Link, Text, Button, IconButton } from "@chakra-ui/react"
import { HomeBannerImg } from '../../assets'
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Avatar, WrapItem } from '@chakra-ui/react'

export default function HomeBanner() {
    return (
        <Box
            width={'100%'}
            height={'300px'}
            backgroundImage={`url(${HomeBannerImg})`}
            bgSize={'cover'}
            bgPosition={'center'}
        >
            <Box
                width={'100%'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
                padding={'15px'}
            >
                <Flex
                    justifyContent={'center'}
                    alignItems={'center'}
                    gap={6}
                >
                    <Link color={'#FFF'}>Movies</Link>
                    <Link color={'#FFF'}>Series</Link>
                    <Link color={'#FFF'}>Documentaries</Link>
                </Flex>
                <Flex
                    justifyContent={'center'}
                    alignItems={'center'}
                    gap={6}
                >
                    <CiSearch color='#FFF' size={24} />
                    <IoIosNotificationsOutline size={24} color='#FFF' />

                    <WrapItem>
                        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                    </WrapItem>
                </Flex>
            </Box>
            <Box
                width={'100%'}
                display={'flex'}
                justifyContent={'end'}
                alignItems={'end'}
                height={'200px'}
            >
                <Box
                    width={'100%'}
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'start'}
                    alignItems={'start'}
                    px={4}
                >
                    <Text
                        color={'#FFF'}
                        fontSize={'6xl'}
                    >
                        Insider
                    </Text>
                    <Text
                        color={'#FFF'}
                    >
                        2022 | Comedy horror | 1 Season
                    </Text>
                    <Flex
                        justifyContent={'start'}
                        alignItems={'center'}
                        gap={3}
                    >
                        <Button
                            mt={4}
                            backgroundColor={'#6100C2'}
                            color={'#FFF'}
                            _hover={{
                                backgroundColor: 'transparent',
                                color: '#FFF',
                                border: '1px solid #FFF'
                            }}
                        >
                            Watch Now
                        </Button>
                        <IconButton mt={4}>
                            <CiHeart />
                        </IconButton>
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}
