import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { ListGroup } from 'react-bootstrap';

function Footer() {
    const social = [faShoppingBasket, faShoppingBasket, faShoppingBasket, faShoppingBasket]
    , socialLinks  = [
        "https://www.linkedin.com/in/ahmed-zakaria-a554a4183/",        
        "https://codepen.io/ahmedzkaria22",
        "https://github.com/AhmedZkaria22?tab=repositories",
        "https://www.pinterest.com/zikoser/_saved/",
    ];
    
    return (
        <footer>
            <h6>Copyright ©2021 All rights reserved | Developed by
                <a href="https://www.facebook.com/profile.php?id=100009428856148">Ahmed Zakaria</a></h6>

            <ListGroup horizontal>{
                social.map( (soc, index) => 
                    <ListGroup.Item key={index}><a href={`${socialLinks[index]}`}><FontAwesomeIcon icon={ soc }/></a></ListGroup.Item>
                )
            }</ListGroup>                            
        </footer>  
    )
}

export default Footer
