import React from 'react'
import { Figure } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NewSection_figure({preload}) {
    return (
        <Figure className={'newSection_row_item'}>
            <Figure.Image
                src={`${preload[0]}`}
            />
            <Figure.Caption className={'h5'}> {preload[1]} <span>{preload[2]}</span></Figure.Caption>
            <Link to={`/ReactEcommerceTest/${preload[3]}`} target={'_blank'} className={'text-center'}>Shop now</Link> 
        </Figure>
    )
}

export default NewSection_figure
