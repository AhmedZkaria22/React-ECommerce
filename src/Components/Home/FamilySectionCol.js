import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function FamilySectionCol({cardType}) {
    return (
        <Col lg={4} md={6} sm={9} xs={9}>
            <Card>                     
                <Card.Body>
                    <Card.Text className={'h3 text-center'}> {cardType} </Card.Text>                                    
                    {/* <Link to={'/ReactEcommerceShop'} target={'_blank'} className={'text-center'}>Shop now</Link>  */}
                    <a href={'/ReactEcommerceShop'} target={'_blank'} className={'text-center'}>Shop now</a>
                </Card.Body> 
            </Card>                        
        </Col>
    )
}

export default FamilySectionCol
