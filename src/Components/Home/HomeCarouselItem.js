import React from 'react'
import { Carousel, Figure } from 'react-bootstrap'

function HomeCarousel_item({preload}) {
    return (
        <>
            <h1>Customer Testimonial</h1>
            <p>{preload[0]}</p>
            <Carousel.Caption>
                <Figure>                    
                    <Figure.Image src={`${preload[1]}`}  alt="171x180"/>
                    <Figure.Caption>
                        <p>{preload[2]}</p>    <p>{preload[3]}</p>
                    </Figure.Caption>
                </Figure>                    
            </Carousel.Caption>
        </>
    )
}

export default HomeCarousel_item
