import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import './assets/css/style.css';
import './assets/vendor/aos/aos.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import AOS from 'aos';

//import './assets/js/main.js';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
AOS.init();
ReactDOM.render(

  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>,
  rootElement);

//registerServiceWorker();

