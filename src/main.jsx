import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from './Components/DataProvider/DataProvider';
import {initialState, reducer} from './Utility/reducer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
  <DataProvider>
    <App />
  </DataProvider>
  </StrictMode>
);
