import React, { useEffect } from 'react'
import { Col, Figure, SafeAnchor } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Product_related_col({preload}) { 


    useEffect(() => {
        let relatedElms = document.querySelectorAll("#Test_Product_view > div:nth-of-type(2) > div");
        for( let i=0; i<relatedElms.length; i++ ){
            if( i >= 4 ) relatedElms[i].style.display = 'none';
        }
    }, []);

    return (
        <Col lg={3} md={4} sm={6} xs={9}>
            {/* <Figure className={'Test_Product_related_item text-center'} as={SafeAnchor} href={`/ReactEcommerceTest/${preload[0]}`}> */}
            <Figure className={'Test_Product_related_item text-center'} as={Link} to={`/ReactEcommerceTest/${preload[0]}`}>
                <Figure.Image
                    src={`${preload[1]}`}
                />
                <Figure.Caption> <p>{preload[2]}</p> <p>EGP {preload[3]}</p> </Figure.Caption>
            </Figure>
        </Col>
    );
}

export default Product_related_col
