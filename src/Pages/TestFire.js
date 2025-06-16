import React, { useContext, useEffect, useState }  from 'react'
import { Container, Col, Row, ListGroup, Carousel } from 'react-bootstrap';
import UseFirestore from '../Firebase/UseFirestore';
import '../Style/ProductView.css';
import Product_view_listGroup from '../Components/Product/Product_view_listGroup';
import Product_related_col from '../Components/Product/Product_related_col';
import dayjs from 'dayjs';
import { AuthContext } from '../Auth/AuthContext';
import { db } from '../Firebase/FireConfig';


let dt = new Date();

const TestFire = () => {    
    
    let szar = [];
    let szarCount = [];
    const szl = (it) => {        szar.length = 0;       szarCount.length = 0;
        for (const key in it) {
            if (Object.hasOwnProperty.call(it, key)) {
                szar.push(key);
                szarCount.push(it[key]);
                console.log( key, it[key], szar );
            }
        }
    }
    const [count, setCount] = useState(1);    

    const [items, , ,,, addCartItem] = UseFirestore();

    const { user } = useContext(AuthContext);
    const [checkedCustomer, setCheckedCustomer] = useState(null);

    const ReadProduct = 
        window.location.href.substring( window.location.href.lastIndexOf("/")+1 , window.location.href.length );
    
    console.log(
        items.filter( function(item)  { return item.id === ReadProduct } )
    ); 

    const updateCustomer = async(docId, customer) => {
        await db.collection('Customers').doc(docId).update({...customer});
    }
    
    
    const ReadCartItem = async() => {
        const cartItem = {
            createdAt: dt.toLocaleString().substring( 0, dt.toLocaleString().indexOf(",") ),
            image: document.querySelector("#Test_Product_view__row1 > div:first-of-type img").getAttribute("src"),
            name: document.querySelector("#Test_Product_view__row1 > div:last-of-type h1").textContent,
            price: document.querySelector("#Test_Product_view__row1 > div:last-of-type p.h3").textContent,    
            size: document.querySelector("#Test_Product_view__row1 > div:last-of-type .list-group:nth-of-type(2) .list-group-item.checked").textContent,
            color: document.querySelector("#Test_Product_view__row1 > div:last-of-type .list-group:nth-of-type(3) .list-group-item.checked p")?.style?.backgroundColor,
            amount: document.querySelector("#Test_Product_view__row1 > div:last-of-type .list-group:nth-of-type(4) .list-group-item:nth-of-type(2)").textContent,
            storeAmount: document.querySelector("#Test_Product_view__row1 > div:last-of-type .Product_view_sizeStock span").textContent,            
            totId: document.querySelector("#Test_Product_view__row1 > div:last-of-type .ProductId").textContent,
        };
        await addCartItem(cartItem);
        // console.log(cartItem);

        // to update customer in customers collection with lastBuy from current added item
        updateCustomer(checkedCustomer?.id, {
            index: checkedCustomer?.index,
            image: checkedCustomer?.image,
            email: checkedCustomer?.email,
            name: checkedCustomer?.name,
            firstSignIn: checkedCustomer?.firstSignIn,
            lastBuy: dayjs(new Date(dt.toLocaleString().substring( 0, dt.toLocaleString().indexOf(",") ))).format("MM/DD/YYYY")
        });        
    }

    useEffect(() => {
        const unSubscribe = db.collection('Customers').where('email', '==', `${user?.email}`).onSnapshot(
            snap => {
            const fetchedIt = snap.docs.map(
                doc => { return { ...doc.data(), id: doc.id } }                    
            );
    
            setCheckedCustomer(fetchedIt[0]);
            }
        );

        return unSubscribe;
    }, [user])


    return (
        <>
        {
            items.map( (item, index) =>  (item.id === ReadProduct) &&
                <Container key={index} id="Test_Product_view" className={'beforeNav'}>
                    <Row id="Test_Product_view__row1" className={'justify-content-center'}>
                        
                        <Col lg={5} md={6} sm={11} xs={11}>
                            <Carousel className={'Product_view__carousel'}> {
                                item.images.map( (image, index) => 
                                    <Carousel.Item key={index}>
                                        <img src={`${image}`}  alt="img#0"/> 
                                    </Carousel.Item>
                                )}                                
                            </Carousel>
                        </Col>

                        <Col lg={7} md={6} sm={11} xs={11}>
                            <h1>{item.title}</h1>
                            
                            <p>{item.desc}</p>
                            
                            <Carousel className={'Product_view__carousel d-md-none d-lg-none d-xl-none'}> {
                                item.images.map( (image, index) => 
                                    <Carousel.Item key={index}>
                                        <img src={`${image}`}  alt="img#0"/> 
                                    </Carousel.Item>
                                )}                                
                            </Carousel>
                            
                            <p className={'h3'}>EGP{item.price}</p>
                            
                            { (item.PriceBeforeDescount) && <p className={'h4 text-muted'}>EGP{item.PriceBeforeDescount}</p> }
                            
                            { szl(item.sizes) } 

                            <Product_view_listGroup preload={["Size", ...szar]} cTg={[`h5`, 0]} sizesCount={[...szarCount]} />
                            
                            <p className={'Product_view_sizeStock'} style={{display: 'none'}}> <span></span> in stock </p>
                            
                            <span className={'d-none ProductId'}> {item.id} </span>
                            
                            <Product_view_listGroup preload={["Color", ...item.colors]} cTg={[`h5`, 0]}/>
                            
                            <ListGroup horizontal>                            
                                <ListGroup.Item onClick={ () => setCount(
                                    prevState => (prevState - 1 <= 0) ? 1 : prevState - 1
                                )}> - </ListGroup.Item>
                                <ListGroup.Item> {count} </ListGroup.Item> 
                                <ListGroup.Item onClick={ () => {setCount(
                                    prevState => (prevState + 1 >= parseInt(document.querySelector(".Product_view_sizeStock span").textContent)) 
                                    ? parseInt(document.querySelector(".Product_view_sizeStock span").textContent) 
                                    : prevState + 1
                                );
                                }}> + </ListGroup.Item> 
                                
                                <ListGroup.Item> <button type="button" onClick={ ReadCartItem }>ADD TO CART</button> </ListGroup.Item>
                            </ListGroup>   
                        </Col>
                    </Row>
                    
                    <Row id="Test_Product_view__row2"  className={'justify-content-around'}>
                        <h2 className={'col-12'}>You May Like</h2>
                        {
                            items.map( (item, index) =>  
                                (item.id !== ReadProduct && item.filter === 'shirt') && 
                                <Product_related_col key={index} preload={[`${item.id}`, `${item.images[0]}`, `${item.title}`, `${item.price}`]}/>
                            )}
                        {/* <Product_related_col preload={["https://www.facebook.com/profile.php?id=100009428856148", "https://cf3.s3.souqcdn.com/item/2016/07/14/11/10/37/60/item_XL_11103760_15308200.jpg", "Sport shirt", "$24.00"]}/>
                        <Product_related_col preload={["https://www.facebook.com/profile.php?id=100009428856148", "https://cf3.s3.souqcdn.com/item/2016/07/14/11/10/37/60/item_XL_11103760_15308200.jpg", "Sport shirt", "$24.00"]}/>
                        <Product_related_col preload={["https://www.facebook.com/profile.php?id=100009428856148", "https://cf3.s3.souqcdn.com/item/2016/07/14/11/10/37/60/item_XL_11103760_15308200.jpg", "Sport shirt", "$24.00"]}/> */}
                    </Row>
                </Container>                             
            )
        }
        </>
    )
}

export default TestFire
