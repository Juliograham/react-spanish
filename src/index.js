import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Things from './Things';
import { BrowserRouter, Route } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
  <div>
    <Route exact path='/' component={App} />
    <Route exact path='/things' component={Things} />
  </div>
  </BrowserRouter>, 
document.getElementById('root'));

