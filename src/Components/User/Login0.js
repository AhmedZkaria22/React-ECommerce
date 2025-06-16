import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth, db } from '../../Firebase/FireConfig';
import '../../Style/User.css'
import dayjs from 'dayjs';

const initialState = { email: '', password: '' }; 

const Login = () => {
  const history = useHistory();
  const [input, setInput] = useState(initialState);
  const [error, setError] = useState('');

  const handleChange = ({ target }) => {
    setInput({
      ...input,
      [target.name]: target.value,
    })
    setError('');
  };

  /*const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await auth.signInWithEmailAndPassword(input.email, input.password);
      // db.
      // db.collection()
      setInput(initialState);
      history.push('/ReactEcommerceAccount');
    } catch(error){
      setError(error.message);
    }
  };*/

// this new submit logic to add signed in customer info as a new doc in customers collection  
  // Add new customer  
  const addCustomer = async(customer) => {
    await db.collection('Customers').add({...customer});
  }
  // Update customer
  const updateCustomer = async(docId, customer) => {
    await db.collection('Customers').doc(docId).update({...customer});
  }

  // get customer cart items
  const [lastBuyItem, setLastBuyItem] = useState(null);
  const [customerInfo, setCustomerInfo] = useState(null);
  const [checkedCustomer, setCheckedCustomer] = useState(null);
  const [customersLength, setCustomersLength] = useState(null);
  
  const getCustomerCartItems = async(uCredential, uEmail) => {
    db.collection(`User-${uEmail}`).orderBy('createdAt', 'desc').onSnapshot(
      snap => {
          const fetchedCIt = snap.docs.map(
            doc => { return { ...doc.data(), id: doc.id } }                    
          );

          setLastBuyItem(fetchedCIt[0]);
          setCustomerInfo(uCredential);
      }
    );
  }
  
  // handleSubmit1 : to handle sign in and get customer info
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    await auth.signInWithEmailAndPassword(input.email, input.password)
    .then((userCredential) => {
      getCustomerCartItems(userCredential, userCredential?.user?.email);
    }).catch((error) => {
      setError(error.message);
    })
  };
  
  // handleSubmit2 : to check customer found or not and get customers length using customer info from handleSubmit1
  const handleSubmit2 = () => {    
    // to check if customer found in collection or not, to add customer in collection if not found
    db.collection('Customers').where('email', '==', `${customerInfo?.user?.email}`).onSnapshot(
      snap => {
        const fetchedIt = snap.docs.map(
          doc => { return { ...doc.data(), id: doc.id } }                    
        );

        setCheckedCustomer(fetchedIt[0]);
      }
    );

    // to get customers collection length, to use it as an index for new added customer
    db.collection('Customers').onSnapshot(
      snap => {
        const fetchedIt = snap.docs.map(
          doc => { return { ...doc.data(), id: doc.id } }                    
        );

        setCustomersLength(fetchedIt.length);
      }
    );
  };

  // handleSubmit3 : to add new customer in customers collection or update using checkedCustomer from handleSubmit2
  const handleSubmit3 = () => {
    if(!checkedCustomer){
      addCustomer({
        index: customersLength+1,
        image: customerInfo?.user?.photoURL,
        email: customerInfo?.user?.email,
        name: customerInfo?.user?.displayName,
        firstSignIn: dayjs(new Date(customerInfo?.user?.metadata?.creationTime)).format("MM/DD/YYYY"),
        lastBuy: dayjs(new Date(lastBuyItem?.createdAt)).format("MM/DD/YYYY")
      });
      setInput(initialState);
      setLastBuyItem(null);
      setCustomerInfo(null);
      setCheckedCustomer(null);
      setCustomersLength(null);
      history.push('/ReactEcommerceAccount');
    }else{
      // this update to update lastBuy if customer exist in customers collection, not need to add to cart to update
      updateCustomer(checkedCustomer?.id, {
        index: checkedCustomer?.index,
        image: checkedCustomer?.image,
        email: checkedCustomer?.email,
        name: checkedCustomer?.name,
        firstSignIn: checkedCustomer?.firstSignIn,
        lastBuy: !lastBuyItem ? checkedCustomer?.lastBuy : dayjs(new Date(lastBuyItem?.createdAt)).format("MM/DD/YYYY")
      });
      setInput(initialState);
      setLastBuyItem(null);
      setCustomerInfo(null);
      setCheckedCustomer(null);
      setCustomersLength(null);
      history.push('/ReactEcommerceAccount');
    }
  };

  useEffect(() => {
    // if(lastBuyItem && customerInfo){
    if(customerInfo){
      handleSubmit2();
    }
    // condtion to check customersLength state changed, will change to 0(collection empty||not found) || >= 1(collection not empty)
    if(customersLength != null){
      handleSubmit3();
    }
  }, [lastBuyItem, customerInfo, checkedCustomer, customersLength])
// this new submit logic to add signed in customer info as a new doc in customers collection  


  return (
    <div id="account" className={'beforeNav'}>
      {/* <h1>User Account <span>using firebase authentication</span></h1> */}
    <div className="login">
      <h1>Login Page</h1>
      {/* <form onSubmit={handleSubmit}> */}
      <form onSubmit={handleSubmit1}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={input.email}
          autoComplete="off"
          onChange={handleChange}
          name="email"
        />
        
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={input.password}
          autoComplete="off"
          onChange={handleChange}
          name="password"
        />
        
        <button type="submit">Submit</button>
        <p className="form__error">{error}</p>
      </form>
      <p>
        Not a user? <Link to="/ReactEcommerceSignup">Sign Up</Link>
      </p>      
    </div>
    </div>
  );
};

export default Login;