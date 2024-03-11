import React from 'react'
import Carousel from 'react-multi-carousel'

export default function SliderCarousel({ children, mobile , tablet ,superLargeDesktop,desktop }) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: superLargeDesktop ? superLargeDesktop : 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items:desktop ? desktop : 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: tablet ? tablet :  2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: mobile ? mobile : 1
        }
    }
    return (
        <Carousel responsive={responsive}>
            {children}
        </Carousel>
    )
}
