import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth, db } from '../../Firebase/FireConfig';
import '../../Style/User.css'

// const initialState = { email: '', password: '', confirmPassword: '', imageUrl: '', };
const initialState = { email: '', password: '', confirmPassword: '', };

const SignUp = () => {
  const history = useHistory();
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleChange = ({ target }) => {
    setInput({
      ...input,
      [target.name]: target.value,
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ( input.password !== input.confirmPassword ) return setError('Password don`t match')

    try{
      await auth.createUserWithEmailAndPassword(input.email, input.password);
    //   await auth.
      setInput(initialState);
      // history.push('/');
      history.push('/ReactEcommerceAccount'); 
      // db.collection("Cart Items").
    } catch(error){
      setError(error.message);
    }
  };

  return (
    <div id="account" className={'beforeNav'}>
      {/* <h1>User Account <span>using firebase authentication</span></h1> */}
    <div className="signup">
      <h1>Sign Up Page</h1>
      <form onSubmit={handleSubmit}>
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
        
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="confirmPassword"
          value={input.confirmPassword}
          autoComplete="off"
          onChange={handleChange}
          name="confirmPassword"
        />
        
        {/* <label htmlFor="imageUrl">Image Url</label>
        <input
          type="imageUrl"
          value={input.imageUrl}
          autoComplete="off"
          onChange={handleChange}
          name="imageUrl"
        /> */}

        <button type="submit">Submit</button>
        <p className="form__error">{error}</p>
      </form>
      <p>
        Already a user? <Link to="/ReactEcommerceLogin">Log In</Link>
      </p>
    </div>
    </div>
  );
};

export default SignUp;