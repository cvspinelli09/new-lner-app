import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import HeadcodePage from './pages/headcode/headcode.component';
import KnowledgePage from './pages/knowledge/knowledge.component';
import YankeePage from './pages/yankee/yankee.component';
import TicketsPage from './pages/tickets/tickets.component';

import "./App.css";

function App() {
 return (
   <div>
   <Header />
     <Switch>
       <Route exact path="/" component={HomePage} />
       <Route path="/Knowledge" component={KnowledgePage} />
       <Route path="/Headcode" component={HeadcodePage} />
       <Route path="/Yankee" component={YankeePage} />
       <Route path="/Tickets" component={TicketsPage} />
     </Switch>
   </div>
 );
}

export default App;
