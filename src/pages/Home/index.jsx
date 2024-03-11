import React from 'react'
import Layout from '../../components/Layout'
import { Box } from "@chakra-ui/react"
import { useCss } from "react-use"
import HomeBanner from '../../components/HomeBanner'
import Trending from '../../components/Trending'
import Watching from '../../components/Watching'

export default function Home() {

    const HomePage = useCss({
        'width': '100%',
        'height': '100%',
        'overflow-y': 'auto'
    })

    return (
        <Layout>
            <Box
                className={HomePage}
            >
                <HomeBanner />
                <Trending />
                <Watching />
            </Box>
        </Layout>
    )
}
