import { Box, Grid, GridItem, IconButton, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { TrendingImage1 } from '../../assets'
import { CiHeart } from "react-icons/ci";
import { TrendingData } from '../../Data';


export default function Trending() {
    return (
        <Box
            width={'100%'}
            backgroundColor={'#641DA1'}
        >
            <Text
                __css={{
                    'width': "100%"
                }}
                py={2}
                pl={5}
                color={'#FFF'}
                fontSize={'2xl'}
            >
                Trending
            </Text>
            <Grid
                templateColumns='repeat(4, 1fr)'
                px={5}
                py={3}
                gap={6}


            >
                {
                    TrendingData?.map((item) => {
                        return (
                            <GridItem
                                height={'290px'}
                                backgroundImage={`url(${item.img})`}
                                backgroundSize={'cover'}
                                backgroundPosition={'center'}
                                position={'relative'}
                                _after={{
                                    'content': "''",
                                    'position': 'absolute',
                                    'width': '100%',
                                    'height': '100px',
                                    'backgroundColor': '#FFF',
                                    'bottom': '0px',
                                    'borderBottomRightRadius': '10px',
                                    'borderBottomLeftRadius': '10px',

                                }}
                            >
                                <IconButton
                                    position={'absolute'}
                                    right={'10px'}
                                    top={'10px'}
                                >
                                    <CiHeart />
                                </IconButton>
                                <Box
                                    __css={{
                                        'width': '100%',
                                        'height': '100px',
                                        'position': 'absolute',
                                        'bottom': '0px',
                                        'zIndex': '1',
                                        'borderBottomRightRadius': '10px',
                                        'borderBottomLeftRadius': '10px',
                                        'padding': '10px',
                                        'display': 'flex',
                                        'flexDirection': 'column',
                                        'justifyContent': 'start',
                                        'alignItems': "start"
                                    }}
                                    shadow={'md'}
                                >
                                    <Text
                                        fontWeight={'700'}
                                    >
                                        {item.text}
                                    </Text>
                                    <Text>
                                        {item.desc}
                                    </Text>
                                </Box>

                            </GridItem>
                        )
                    })
                }


            </Grid>
        </Box>
    )
}
