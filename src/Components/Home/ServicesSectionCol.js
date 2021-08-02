// import { faAmbulance, faAnkh, faArrowUp, faServer } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col } from 'react-bootstrap'

import service1 from '../../Photos/services1.svg';
import service2 from '../../Photos/services2.svg';
import service3 from '../../Photos/services3.svg';
import service4 from '../../Photos/services4.svg';

function ServicesSectionCol({preload}) {
    const ics = [service1, service2, service3, service4]
    return (
        <Col lg={3} md={6} sm={10} className={"text-center"}>
            <img src={ics[preload[0]]} alt="img"/>
            <h5>{preload[1]}</h5>
            <p>{preload[2]}</p>
        </Col> 
    )
}

export default ServicesSectionCol
