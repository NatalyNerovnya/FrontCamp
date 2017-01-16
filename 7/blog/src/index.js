import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App';
import Header from './components/Header/Header';
import './index.css';

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);

ReactDOM.render(
  <div className="container"><App /></div>,
  document.getElementById('root')
);