import React, { Component } from "react";
import { reactLocalStorage } from 'reactjs-localstorage';
import { Switch,Route } from 'react-router-dom';
import { MenuItem,Nav,Navbar,NavItem,NavDropdown } from 'react-bootstrap';

import "./App.css";
import ProductsComponent from '../products/products';
import KitchenComponent from '../kitchen/kitchen';
import UShapeComponent from '../shapes/uShape';

class App extends Component {

  render() {
    return ( 
      <div>
        <Route exact path="/" component={ProductsComponent}   />
        <Route exact path="/kitchen/:id" component={KitchenComponent} />
        <Route exact path="/uShape/:id" component={UShapeComponent}   />
        
      </div>
    );
  }
}

export default App;
