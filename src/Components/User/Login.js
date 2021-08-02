import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth, db } from '../../Firebase/FireConfig';
import '../../Style/User.css'

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

  const handleSubmit = async (e) => {
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
  };

  return (
    <div id="account" className={'beforeNav'}>
      {/* <h1>User Account <span>using firebase authentication</span></h1> */}
    <div className="login">
      <h1>Login Page</h1>
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