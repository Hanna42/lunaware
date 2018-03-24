import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './components/banner/banner'
import Scrollbox from './components/scrollbox/scrollbox'

ReactDOM.render(
  <div>
    <Banner appName={'lunaware'}/>
    <Scrollbox/>
  </div>,
  document.getElementById('app')
);

module.hot.accept();
