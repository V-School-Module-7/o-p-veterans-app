import React, { useContext, useEffect, useState } from 'react';
import Loginpage from './components/Loginpage.js'
import Nameform from "./components/Nameform.js"
import Businessinfo from "./components/Businessinfo.js"
import Nonprofit from "./components/Nonprofit.js"
import Square from './components/Square.js';
import Sponsorshiplevels from "./components/Sponsorshiplevels.js"
import Profile from "./components/Profilepage.js"
import {Switch, Route, Redirect, useHistory, Link} from "react-router-dom"
import { FormContext } from "./context/FormContext"
import Adminpage from './components/Adminpage.js';
import Thankyou from './components/Thankyou.js';
import Interactivemap from './components/Interactivemap'





function App() {
  const { uid, isAdmin, value, hasPayed } = useContext(FormContext)
  const [isLoad, setLoad] = useState(false);
  const history = useHistory()
  useEffect(() => {

    // this is going to mount to payment form and wait for it load, before it will be rendered to the page 
    let sqPaymentScript = document.createElement("script");
    // sandbox: https://js.squareupsandbox.com/v2/paymentform
    // production: https://js.squareup.com/v2/paymentform
    sqPaymentScript.src = "https://js.squareupsandbox.com/v2/paymentform";
    sqPaymentScript.type = "text/javascript";
    sqPaymentScript.async = false;
    sqPaymentScript.onload = () => {
      setLoad(true);
    };
    document.getElementsByTagName("head")[0].appendChild(sqPaymentScript);
  });


// check to make sure the form is loaded before it is rendered. 
  const squarePayment = isLoad && <Square paymentForm={ window.SqPaymentForm } value = {value} />

  return (
    <div className="App">
      {uid ? <Link className = "link" to = "/profile">Profile</Link> : null}
      {isAdmin ? <Link className = "link" to = "/viewer">Admin</Link> : null}
      <Switch>
         <Route exact path = "/"      render ={() => uid ? <Redirect to = "/form1" /> : <Loginpage />} />
         <Route exact path = "/form1" render ={() => uid ? <Nameform /> : <Redirect to = "/" />} />
         <Route exact path = "/form2" render ={() => uid ? <Businessinfo /> : <Redirect to = "/" />} />
         <Route exact path = "/form3" render ={() => uid ? <Nonprofit /> : <Redirect to = "/" /> } />
         <Route exact path = "/form4" render ={() => uid ? <Sponsorshiplevels /> : <Redirect to = "/" />} />
         <Route exact path = "/form5" render ={() => uid ? <div className="App"> {squarePayment} </div> : <Redirect to = "/" />} />
         {/* make sure ti add back in hasPayed to ternary operation
             it was removed to make dev work easier  */}
         <Route exact path = "/form6" render ={() => uid && hasPayed ? <Interactivemap /> : history.goBack()} />
         <Route exact path = "/viewer" render={() => isAdmin ? <Adminpage /> : <Redirect to = "/" />} />
         <Route exact path = "/thankyou" render = {() => uid ?  <Thankyou /> : history.goBack()} />
         {uid ?  <Route exact path = "/profile" render = {() => uid ?  <Profile /> : <Redirect to = "/" />} /> : ""} 
         <Route path='/opvet' component={() => { window.location.href = 'https://opveteran.org/'  
            return null }}/>
      </Switch>
      
    </div>
  );
} 







export default App; 
