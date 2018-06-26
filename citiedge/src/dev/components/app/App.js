import React, { Component } from "react";
import { reactLocalStorage } from 'reactjs-localstorage';
import { Switch,Route } from 'react-router-dom';
import { MenuItem,Nav,Navbar,NavItem,NavDropdown } from 'react-bootstrap';

import "./App.css";
import ProductsComponent from '../products/products';
import KitchenComponent from '../kitchen/kitchen';

class App extends Component {

  render() {
    return ( 
      <div>
        <Route path="/products" component={ProductsComponent}  />
        <Route path="/kitchen/:id" component={KitchenComponent}/>
      </div>
    );
  }
}

export default App;
