import React from 'react'
import { Figure, NavLink } from 'react-bootstrap'

function SaleSection4smFigure({preload}) {
    return (
        <Figure as={NavLink} href={`/ReactEcommerceTest/${preload[4]}`}>
            
            <Figure.Image  src={`${preload[0]}`} />
            <Figure.Caption> 
                <h5> {preload[1]} </h5>
                <p> {preload[2]} </p>
                { ( preload[3] !== '') ? <p> {preload[3]} </p> : <p style={{ display: 'none' }}></p> }
            </Figure.Caption> 
        </Figure>
    )
}

export default SaleSection4smFigure
