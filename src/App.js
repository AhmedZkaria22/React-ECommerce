import Home from './Pages/Home'
import Shop from './Pages/Shop'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import TestFire from './Pages/TestFire';

import PrivateRoute from './Auth/PrivateRoute';
import Account from './Components/User/User';
import Login from './Components/User/Login';
import SignUp from './Components/User/SignUp';
import ShopingCart from './Pages/ShopingCart';
import Footer from './Components/General/Footer';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
        var nv = document.getElementsByClassName("navbar")[0];
        var pr = document.getElementsByClassName("App")[0];
        var trg = document.getElementsByClassName("beforeNav")[0];
        pr.insertBefore(nv, trg);    
  }, []);

  return (
    <Router basename="/">
      <header></header>
      <Navbar /> 
      <div className={'App'}>
        <Switch>
          <Route path="/ReactEcommerceHome" exact component={Home} />
          <Route path="/ReactEcommerceShop" component={Shop} />      
          <Route path="/ReactEcommerceTest" component={TestFire} /> 
          <PrivateRoute path="/ReactEcommerceAccount" exact component={Account}/>
          <Route path="/ReactEcommerceLogin"  component={Login} />
          <Route path="/ReactEcommerceSignup"  component={SignUp} />
          <Route path="/ReactEcommerceShopingcart"  component={ShopingCart} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
