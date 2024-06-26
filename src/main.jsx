import React from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './css/style.css';

createRoot(document.getElementById('root')).render(<App />);