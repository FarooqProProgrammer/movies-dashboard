import React from 'react'
import { Box, Flex, Text } from "@chakra-ui/react"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useCss } from "react-use"
import { BsCupHot } from "react-icons/bs";
import { MdOutlinePermMedia, MdPeopleOutline } from "react-icons/md";
import { CiCalendar, CiHeart, CiSettings } from "react-icons/ci";
import { FaChartLine, FaRegMessage } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";


export default function Layout({ children }) {

    const SidebarCss = useCss({
        'height': '100%',

        '& .css-dip3t8': {
            'background-color': "#21201E",
            'padding': '10px',
        },
        '& .css-12w9als': {
            'color': '#FFF',
        },
        '& .ps-menu-root': {
            'margint-top': '20px',
        },
        '& .css-16jesut >.ps-menu-button:hover': {
            'background-color': '#21201E',
        },
        '& .css-1tqrhto >.ps-menu-button:hover': {
            'background-color': '#21201E',
        },
        '& .css-1tqrhto >.ps-menu-button': {
            'background-color': '#21201E',
        },
        '& .css-1t8x7v1 >.ps-menu-button:hover': {
            'background-color': '#21201E',
        },
        '& .ps-menu-label': {
            'display': 'flex',
            'justify-content': "start",
            'align-items': "center",
            'gap': '10px'
        }
    })


    return (
        <Box height={'100vh'} display={'flex'}>
            <Box className='' height={'100%'}>
                <Sidebar className={SidebarCss}>
                    <Flex
                        justifyContent={'start'}
                        alignItems={'center'}
                        gap={2}
                        ps={4}
                        pt={3}
                    >
                        <BsCupHot size={20} color='#FFF' />
                        <Text color={'#FFF'} fontSize={'xl'} textTransform={'uppercase'}>Watch</Text>
                    </Flex>
                    <Menu style={{ marginTop: "32px" }}>

                        <MenuItem >
                            <MdOutlinePermMedia />
                            <span>Home</span>
                        </MenuItem>
                        <MenuItem >
                            <CiHeart />
                            <span>Favourites</span>
                        </MenuItem>
                        <MenuItem >
                            <FaChartLine />
                            <span>Trending</span>
                        </MenuItem>
                        <MenuItem >
                            <CiCalendar />
                            <span>Coming Soon</span>
                        </MenuItem>
                    </Menu>
                    <Menu style={{ marginTop: "32px" }}>
                        <MenuItem >
                            <MdPeopleOutline />
                            <span>Community</span>
                        </MenuItem>
                        <MenuItem >
                            <FaRegMessage />
                            <span>Social</span>
                        </MenuItem>
                    </Menu>
                    <Menu style={{ marginTop: "32px" }}>
                        <MenuItem >
                            <CiSettings />
                            <span>Settings</span>
                        </MenuItem>
                        <MenuItem >
                            <IoIosLogOut />
                            <span>Logout</span>
                        </MenuItem>
                    </Menu>
                </Sidebar>
            </Box>
            <Box
                width={'100%'}
                height={'100%'}
            >
                {children}
            </Box>
        </Box>
    )
}
