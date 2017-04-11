import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Widget} from './components/containers';

const app = (
  <div><Widget /> </div>
);

ReactDOM.render(app, document.getElementById('root'));
