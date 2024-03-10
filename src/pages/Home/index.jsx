import React from 'react'
import Layout from '../../components/Layout'
import { Box } from "@chakra-ui/react"
import { useCss } from "react-use"
import HomeBanner from '../../components/HomeBanner'

export default function Home() {

    const HomePage = useCss({
        'width': '100%',
        'height': '100%',
    })

    return (
        <Layout>
            <Box
                className={HomePage}
            >
                <HomeBanner />
            </Box>
        </Layout>
    )
}
