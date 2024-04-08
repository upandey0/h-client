import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { SnackbarProvider } from 'notistack';
import {Provider } from 'react-redux'
import { store } from './store/store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
 
    <Provider store={store}>
    <Router>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </Router>
    </Provider>

)
