import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';

import "./App.css";

const Knowledge = () => (
  <div>
    <h1>THE KNOWLEDGE</h1>
  </div>
)

function App() {
 return (
   <div>
       <Route exact path="/" component={Header} />
       <Route exact path="/" component={HomePage} />
       <Route path="/Knowledge" component={Knowledge} />
       
   </div>
 );
}

export default App;
