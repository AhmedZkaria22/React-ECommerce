import React, { useContext, useEffect, useState } from 'react'
import { Button, Nav, Navbar, Pagination, OverlayTrigger, Tooltip } from 'react-bootstrap'

import ShopItem from '../Components/ShopItem';
import UseFirestore from '../Firebase/UseFirestore';
import '../Style/Shop.css';
import AddItemModal from '../Components/AddItemModal';
import { faFemale, faMale, faPlus, faRestroom } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthContext } from '../Auth/AuthContext';


function Shop() {    
    
    let [ Items,  ] = UseFirestore();

    const [screenLmts, setScreenLmts] = useState([]); 
    const { user } = useContext(AuthContext);


    useEffect(() => {
        document.getElementById("AddItemModal").style.display = "none"; 
        
        // Handel pagination in 3 screens
        if( window.innerWidth >= 992 ){ setScreenLmts([3, 8, 3, 4, 0]); } 
        else if( window.innerWidth >= 768 && window.innerWidth < 992 ){ setScreenLmts([2, 6, 2, 3, 0]); }
        else if( window.innerWidth < 768 ){ setScreenLmts([1, 4, 1, 2, 0]); }  
        window.onresize = () => {            
            if( window.innerWidth >= 992 ){ setScreenLmts([3, 8, 3, 4, 0]); } 
            else if( window.innerWidth >= 768 && window.innerWidth < 992 ){ setScreenLmts([2, 6, 2, 3, 0]); }
            else if( window.innerWidth < 768 ){ setScreenLmts([1, 4, 1, 2, 0]); }     
        }      
    }, []);

    // handel shop nav buttons colors
    const spcFiltersColors = ['white', '#16161a', 'transparent', 'white'];
    const spcFiltersSubColors = ['#6c757d', '#16161a', '#16161a', '#6c757d'];
    const handelFiltersClick = (e,Array) => {
        for( let i = 0; i< e.target.parentElement.children.length; i++ ){
            if(e.target.parentElement.children[i] == e.target){
                e.target.style.backgroundColor = Array[0];
                e.target.style.color = Array[1];
            }else{
                e.target.parentElement.children[i].style.backgroundColor = Array[2];
                e.target.parentElement.children[i].style.color = Array[3];
            }                                 
        }
    }

    // get specific items from fire base
    const [spcFilters, setSpcFilters] = useState('shirt');
    const [spcFiltersSub , setSpcFiltersSub] = useState('men');
    let spcItems = Items.filter( function (item) {
        return (item.filter === spcFilters && item.gender === spcFiltersSub);
    });

    // Pagination
    const [pagNum, setPagNum] = useState(0);

    return (        
        <>                    
            <section id="shop_nav" className={'beforeNav'}>                
                <Navbar bg="dark" variant="dark">
                    <Nav className={'shop_nav_basic'}>
                        <Nav.Link as={Button} onClick={(e) => {setSpcFilters('shirt');  handelFiltersClick(e, spcFiltersColors); }}>Shirts</Nav.Link>
                        <Nav.Link as={Button} onClick={(e) => {setSpcFilters('pant');  handelFiltersClick(e, spcFiltersColors); }}>Pants</Nav.Link>
                        <Nav.Link as={Button} onClick={(e) => {setSpcFilters('shoes');  handelFiltersClick(e, spcFiltersColors); }}>Shoes</Nav.Link>
                    </Nav>
                    <Nav className={'shop_nav_gender'}>
                        <Button variant="outline-info" title='men' onClick={(e) => {setSpcFiltersSub('men');  handelFiltersClick(e, spcFiltersSubColors); }}> <FontAwesomeIcon icon={faMale}/> </Button>
                        <Button variant="outline-info" title='female' onClick={(e) => {setSpcFiltersSub('female');  handelFiltersClick(e, spcFiltersSubColors); }}> <FontAwesomeIcon icon={faFemale}/> </Button>
                        <Button variant="outline-info" title='twinz' onClick={(e) => {setSpcFiltersSub('twinz');  handelFiltersClick(e, spcFiltersSubColors); }}> <FontAwesomeIcon icon={faRestroom}/> </Button>
                    </Nav>
                    
                    {/* handel add item button to visible only to admin (abdomadridesta) */}
                    {                        
                        // (user.email.slice(0, user.email.indexOf('@') ) === 'abdomadridesta') ?                        
                        ( ! user ) ? null
                        : ( user.email.slice(0, user.email.indexOf('@') ) === 'abdomadridesta' ) ?
                            <OverlayTrigger placement="top"  overlay={ <Tooltip> Add Item  </Tooltip> } >
                                <Button id="addItemBtn"  onClick={ () => document.getElementById("AddItemModal").style.display = "block" }> <FontAwesomeIcon icon={faPlus} /> </Button>
                            </OverlayTrigger>
                            : null
                    }
                </Navbar>
            </section>

            {/* Read data from fire base  */}
            <section id="shop_container">
                <article className={'justify-content-around'}> 
                    <div>{ 
                        spcItems.map( (Item, index) =>   
                            (index >= pagNum && index <= pagNum+screenLmts[0] && index < spcItems.length)
                                ? <ShopItem key={index} prpk={index} int={Item.title} inv={Item.price} invbd={Item.PriceBeforeDescount} ing={Item.images[0]} inf={[Item.filter, Item.gender]} indx={Item.id}/>
                                : null
                        ) 
                    }</div>                
                </article>
            </section>
            
            <Pagination>
                <Pagination.Prev onClick={ () => setPagNum( (prevPag => (prevPag-screenLmts[3] <= screenLmts[4]) ? screenLmts[4] : prevPag-screenLmts[3] ) ) }/>
                <Pagination.Item onClick={ () => setPagNum( 0 ) }>{1}</Pagination.Item>        
                <Pagination.Item onClick={ () => setPagNum( screenLmts[3] ) }>{2}</Pagination.Item>
                <Pagination.Item onClick={ () => setPagNum( screenLmts[3]*2 ) }>{3}</Pagination.Item>
                <Pagination.Next onClick={ () => setPagNum( (prevPag => (prevPag+screenLmts[1] > spcItems.length-1) ? spcItems.length-1 - screenLmts[2] : prevPag+screenLmts[3] ) ) }/>
            </Pagination>
            
            <AddItemModal />
        </>
    )
}

export default Shop
