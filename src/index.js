import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import Items from './component/sec';
import 'bootstrap/dist/css/bootstrap.css';
//import Hello from './component/dhars';
import {BrowserRouter} from 'react-router-dom'
import Hii from './component/page';
import { Forgot1 } from './component/divya';
import { Men } from './component/men';
import { Women } from './component/women';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Hii />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
