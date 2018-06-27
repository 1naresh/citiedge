import React, { Component } from "react";
import { reactLocalStorage } from 'reactjs-localstorage';
import { Switch,Route } from 'react-router-dom';
import { MenuItem,Nav,Navbar,NavItem,NavDropdown } from 'react-bootstrap';

import "./App.css";
import ProductsComponent from '../products/products';
import KitchenComponent from '../kitchen/kitchen';
import UShapeComponent from '../shapes/uShape';
import LShapeComponent from '../shapes/lShape';
import PShapeComponent from '../shapes/pShape';
import SShapeComponent from '../shapes/sShape';
import WordrobesComponent from '../wordrobes/wordrobes';
import FullInteriorsComponent from '../fullInteriors/fullInterior';
import FinalComponent from '../final/final';
import FormComponent from '../form/form';
import OtpComponent from '../form/otp';
class App extends Component {

  render() {
    return ( 
      <div>
        <Route exact path="/"              component={ProductsComponent}   />
        <Route exact path="/kitchen/:id"   component={KitchenComponent}    />
        <Route exact path="/uShape/:id"    component={UShapeComponent}     />
        <Route exact path="/lShape/:id"    component={LShapeComponent}     />
        <Route exact path="/pShape/:id"    component={PShapeComponent}     />
        <Route exact path="/sShape/:id"    component={SShapeComponent}     />
        <Route exact path="/wordrobes/:id" component={WordrobesComponent}  />
        <Route exact path="/fullInteriors/:id" component={FullInteriorsComponent}  />
        <Route exact path="/final/:id"     component={FinalComponent}      />
        <Route exact path="/form"     component={FormComponent}      />
        <Route exact path="/otp"     component={OtpComponent}      />
      </div>
    );
  }
}

export default App;
