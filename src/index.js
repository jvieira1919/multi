 import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ServiceWorker from '../../../week-21/multi/src/serviceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
<App />
  </BrowserRouter>
  , document.getElementById('root'));
ServiceWorker();