import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Portfolio from './component/Portfolio';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Navbar />
         <Route path="/" exact component={Home} />
         <Route path="/portfolio" exact component={Portfolio} />
      </BrowserRouter>
    </div>
  );
}

export default App;
