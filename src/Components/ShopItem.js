import React from 'react'
import { Figure } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function ShopItem( props ) { 
    return (
        <Link to={`/ReactEcommerceTest/${props.indx}`} as={Figure}  className={`shop_container_item text-center ${[...props.inf]}`}>
            <Figure.Image src={props.ing} />
            <Figure.Caption> 
                <h5>{props.int}</h5>
                {
                    (props.invbd) ?
                    <>
                        <p >EGP{props.inv}</p>
                        <p >EGP{props.invbd}</p> 
                    </>
                    : <p className={'ShopItem1Price'}>EGP{props.inv}</p>
                }
                {/* <span> {props.prpk} </span> */}
            </Figure.Caption>
        </Link>
    ) 
}

export default ShopItem
