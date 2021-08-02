import React, { useEffect, useState } from 'react'
import UseFirestore from '../Firebase/UseFirestore';

const ShopingCartItem = (props) => {
    
    const {cid,  amount, totalAmount, price, Alltot, setAlltot, prCls} = props;
    const [cartItemAmount, setCartItemAmount] = useState( parseInt(amount) );    

    const subtotSpan = document.querySelector(".ShCartContainer__Calculate p:first-of-type span");
    const totSpan = document.querySelector(".ShCartContainer__Calculate p:last-of-type span");

    const [,,,,,,,updateDocAmount] = UseFirestore();

    useEffect(() => {
        // collect subtotal of all items
        const ReadyAmount = document.querySelectorAll(".ShCartContainer__ProductList__item__subtotal");
        let ReadyAmountVal = 0;
        for(let i=0; i<ReadyAmount.length; i++){
            ReadyAmountVal += parseFloat(ReadyAmount[i].textContent.substr(3));
        }           
        setAlltot( ReadyAmountVal );
    }, []);

    subtotSpan.textContent = `EGP ${Alltot}`;
    totSpan.textContent = `EGP ${Alltot-35}`; 

    return (
        <>
            {
                ( prCls === 'ShCartContainer__ProductList__item' )
                ? <>
                    <div>
                        <button type="button" onClick={ () => {
                            setCartItemAmount( prevState => (prevState - 1 <= 0) ? 1 : prevState - 1 );
                            updateDocAmount(cartItemAmount, 0, '-', cid);
                            if( cartItemAmount > 1 ) {setAlltot( prevtot => prevtot - parseFloat((price).substr(3)) );}
                        }}>-</button>
                        <p>{cartItemAmount}</p>
                        <button type="button" onClick={ () => {
                            setCartItemAmount( prevState => (prevState + 1 >= totalAmount) ? totalAmount : prevState + 1 );
                            updateDocAmount(cartItemAmount, totalAmount, '+', cid);
                            if(cartItemAmount < totalAmount) {setAlltot( prevtot => prevtot + parseFloat((price).substr(3)) );}
                        }}>+</button>  
                    </div>
                    <span className={'spnStr , d-none'}> { parseFloat((price).substr(3)) } </span>
                    <p className={'ShCartContainer__ProductList__item__subtotal'}>{ `EGP${parseFloat((price).substr(3)) * cartItemAmount}` }</p>
                </>
                : <>
                    <div>
                        <span>Quantity</span>                    
                        <button type="button" onClick={ () => {
                            setCartItemAmount( prevState => (prevState + 1 >= totalAmount) ? totalAmount : prevState + 1 );                            
                            updateDocAmount(cartItemAmount, totalAmount, '+', cid);
                            if(cartItemAmount < totalAmount) {setAlltot( prevtot => prevtot + parseFloat((price).substr(3)) );}
                        }}>+</button>  
                        <p>{cartItemAmount}</p>
                        <button type="button" onClick={ () => {
                            setCartItemAmount( prevState => (prevState - 1 <= 0) ? 1 : prevState - 1 );
                            updateDocAmount(cartItemAmount, 0, '-', cid);
                            if( cartItemAmount > 1 ) {setAlltot( prevtot => prevtot - parseFloat((price).substr(3)) );}
                        }}>-</button>
                    </div>                                
                    <p> 
                        <span className={'spnStr , d-none'}> { parseFloat((price).substr(3)) * cartItemAmount } </span>
                        <span>Subtotal</span> <span> { `EGP${parseFloat((price).substr(3)) * cartItemAmount}` } </span>
                    </p>
                </>
            }
        </>
    )
}
export default ShopingCartItem
