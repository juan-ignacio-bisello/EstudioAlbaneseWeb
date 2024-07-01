import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { NavbarTool } from './components/NavbarTool';
import { FooterTool } from './components/Footer';
import { About } from './components/About';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavbarTool />
    <About />
    <FooterTool />
  </React.StrictMode>,
)
