import React from 'react';
import ReactDOM from 'react-dom/client';
import MenuBar from './components/menu-bar/menu-bar';

import './index.css';

let rootObj: any = document.getElementById('root');
const root = ReactDOM.createRoot(rootObj);
root.render(<MenuBar />);