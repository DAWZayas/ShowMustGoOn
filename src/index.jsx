import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';

import init from './utils/init';

require('./css/search.css');
require ('./css/sign-in.css');
require ('./css/style.css');
require ('./css/calendar.css');
require ('./css/spinner.css');
require('bootstrap/dist/css/bootstrap.min.css');
global.jQuery = require('jquery/dist/jquery.min.js');
require('bootstrap/dist/js/bootstrap.min.js');
require('alertifyjs/build/css/alertify.min.css');
require('alertifyjs/build/css/themes/default.min.css');


const store = init();

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
);
