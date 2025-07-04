import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { AuthContext } from '../Auth/AuthContext';
import { db } from '../Firebase/FireConfig';
import UseFirestore from '../Firebase/UseFirestore';
import '../Style/ShopingCart.css';
import ShopingCartItem from './ShopingCartItem';
import dayjs from 'dayjs';

function ShopingCart() { 

    const { user } = useContext(AuthContext);

    const [,,,,cartItems,,handelDeleteItem] = UseFirestore();
    const [tot, setTot] = useState(0);
    const [checkedCustomer, setCheckedCustomer] = useState(null);
    const [lastBuyItem, setLastBuyItem] = useState(null);

    const handleCloseModal = (e) => {
        e.target.parentElement.parentElement.parentElement.style.display = 'none';
        e.target.parentElement.parentElement.parentElement.parentElement.firstElementChild.style.display = 'block';
    }

    const handleShowModal = (e) => {
        e.target.parentElement.lastElementChild.style.display = 'block';
        e.target.style.display = 'none';
    }

    const updateCustomer = async(docId, customer) => {
        await db.collection('Customers').doc(docId).update({...customer});
    }


    useEffect(() => {
        db.collection('Customers').where('email', '==', `${user?.email}`).onSnapshot(
            snap => {
            const fetchedIt = snap.docs.map(
                doc => { return { ...doc.data(), id: doc.id } }                    
            );
    
            setCheckedCustomer(fetchedIt[0]);
            }
        );      
        db.collection(`User-${user?.email}`).orderBy('createdAt', 'desc').onSnapshot(
            snap => {
                const fetchedCIt = snap.docs.map(
                doc => { return { ...doc.data(), id: doc.id } }                    
                );
    
                setLastBuyItem(fetchedCIt[0]);
            }
        );        
    }, [user])
    

    return (
        <>        
        <Container id={'ShCartContainer'} className={'beforeNav'}>
            <Row>
            <Col lg={8} md={12} sm={12}>
                <div className={'ShCartContainer__ProductList__head d-none d-md-block'}>  
                    <p>Product</p>      <p>Price</p>      <p>Quantity</p>      <p>Subtotal</p>
                </div>
                {cartItems.map( (cartItem, index) =>                                  
                        <div className={'w-100'} key={index}>                         
                        <div className={'ShCartContainer__ProductList__item d-none d-md-flex'}>
                            <button type="button" onClick={ (e) => handleShowModal(e) }> X </button>
                            <img src={`${cartItem.image}`} alt={`img${index}`} />
                            <p>{cartItem.name}</p>
                            <p>{cartItem.price}</p>
                            <ShopingCartItem cid={cartItem.id} amount={cartItem.amount} totalAmount={cartItem.storeAmount} price={cartItem.price} Alltot={tot} setAlltot={setTot} prCls={'ShCartContainer__ProductList__item'}/>
                            
                            <Modal.Dialog>
                                <Modal.Body>
                                    <p>Are you sure to delete this item</p>
                                </Modal.Body>

                                <Modal.Footer>
                                    {/* <Button variant="danger" onClick={ (e) => {handelDeleteItem(`${cartItem.id}`);  handleCloseModal(e);} }>Delete</Button> */}
                                    <Button variant="danger" onClick={ (e) => {
                                        handelDeleteItem(`${cartItem.id}`);
                                        updateCustomer(checkedCustomer?.id, {
                                            index: checkedCustomer?.index,
                                            image: checkedCustomer?.image,
                                            email: checkedCustomer?.email,
                                            name: checkedCustomer?.name,
                                            firstSignIn: checkedCustomer?.firstSignIn,
                                            // lastBuy: dayjs(new Date(lastBuyItem?.createdAt)).format("MM/DD/YYYY")
                                            lastBuy: !lastBuyItem ? checkedCustomer?.lastBuy : dayjs(new Date(lastBuyItem?.createdAt)).format("MM/DD/YYYY")
                                        });
                                        setCheckedCustomer(null);
                                        setLastBuyItem(null);
                                        handleCloseModal(e);
                                    } }>Delete</Button>
                                    <Button variant="light" onClick={ (e) => handleCloseModal(e) }>Cancel</Button>
                                </Modal.Footer>
                            </Modal.Dialog>
                        </div>
                        
                        <div className={'ShCartContainer__ProductList__itemSm d-flex d-md-none'}>
                            <div>
                                <img src={`${cartItem.image}`} alt={`img${index}`} className={'img-fluid'}/>
                            </div>
                            <div>
                                <button type="button" onClick={ (e) => handleShowModal(e) }> X </button>
                                <p>{cartItem.name}</p>
                                <p> <span>Price</span> <span>{cartItem.price}</span> </p>
                                <ShopingCartItem cid={cartItem.id} amount={cartItem.amount} totalAmount={cartItem.storeAmount} price={cartItem.price} Alltot={tot} setAlltot={setTot} prCls={'ShCartContainer__ProductList__itemSm'}/>
                                <Modal.Dialog>
                                    <Modal.Body>
                                        <p>Are you sure to delete this item</p>
                                    </Modal.Body>

                                    <Modal.Footer>
                                        <Button variant="danger" onClick={ (e) => {
                                            handelDeleteItem(`${cartItem.id}`);
                                            updateCustomer(checkedCustomer?.id, {
                                                index: checkedCustomer?.index,
                                                image: checkedCustomer?.image,
                                                email: checkedCustomer?.email,
                                                name: checkedCustomer?.name,
                                                firstSignIn: checkedCustomer?.firstSignIn,
                                                lastBuy: !lastBuyItem ? checkedCustomer?.lastBuy : dayjs(new Date(lastBuyItem?.createdAt)).format("MM/DD/YYYY")
                                            });  
                                            setCheckedCustomer(null);
                                            setLastBuyItem(null);    
                                            handleCloseModal(e);
                                        } }>Delete</Button>
                                        <Button variant="light" onClick={ (e) => handleCloseModal(e) }>Cancel</Button>
                                    </Modal.Footer>
                                </Modal.Dialog>
                            </div>
                        </div>
                        </div> 
                )}   
            </Col>
            <Col lg={4} md={12} sm={7} style={{marginInline: 'auto'}}>
                <div className={'ShCartContainer__Calculate'}>
                    <h2>Cart Totals</h2>
                    <p>Subtotal     <span></span></p>
                    <p>Shipping     <span>EGP 35.00</span></p>
                    <p>Total     <span></span></p>

                    {/*  here we handel checkout items quantities between client and storage 
                         cartItem.totId = id of product item in storage
                         Product Items collection = storage
                         User-${user.email} collection = client 
                    */}
                    {/* {console.log('cartItems', cartItems, checkedCustomer, lastBuyItem)} */}
                    <button type="button" onClick={ () => {
                        cartItems.map( (cartItem) => {                            
                            let sizeChange = `sizes.${cartItem.size}`;                            
                            ( cartItem.totId ) &&
                            db.collection('Product Items').doc(`${cartItem.totId.trim()}`)
                            .update({
                                [sizeChange] : cartItem.storeAmount - cartItem.amount, 
                            })
                            .then(() => { console.log("user with id aUserUid updated"); })
                            .catch(error => { console.log("Error getting document:", error); }); 
                            
                            ( cartItem.totId ) &&
                            db.collection(`User-${user.email}`).doc(`${cartItem.id}`)
                            .update({
                                storeAmount: cartItem.storeAmount - cartItem.amount
                            })
                            .then(() => { console.log("user with id aUserUid updated"); })
                            .catch(error => { console.log("Error getting document:", error); }); 

                            // to update customer in customers collection with lastBuy from last item in cart, lastBuyItem (last item in current cart) || checkedCustomer?.lastBuy(last item was in current cart before empty)
                            updateCustomer(checkedCustomer?.id, {
                                index: checkedCustomer?.index,
                                image: checkedCustomer?.image,
                                email: checkedCustomer?.email,
                                name: checkedCustomer?.name,
                                firstSignIn: checkedCustomer?.firstSignIn,
                                lastBuy: !lastBuyItem ? checkedCustomer?.lastBuy : dayjs(new Date(lastBuyItem?.createdAt)).format("MM/DD/YYYY")
                            });
                            
                            db.collection(`User-${user.email}`).get().then(doc => {
                                doc.forEach(element => { element.ref.delete(); });
                            });
                        });
                        document.querySelector(".ShCartContainer_SuccessMsg").style.display = 'block';
                    } }> Proceed to checkout </button>
                </div>
                <p className={'ShCartContainer_SuccessMsg'}> The order has been successfully submitted and will be delivered within an hour  </p>
            </Col>
            </Row>         
        </Container>
        </>

    )
}

export default ShopingCart