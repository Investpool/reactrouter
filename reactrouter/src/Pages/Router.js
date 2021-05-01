import React from 'react';
import Home from './Home';
import About from "./About";
import Contact from './Contacts';
import Services from './Services';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "../Components/Navbar";
import ServiceDetails from './ServiceDetails';


function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/services" component={Services} />
        <Route path="/services/:id" component={ServiceDetails} />
        
      </Switch>
    </BrowserRouter>
  );
}

export default Router;