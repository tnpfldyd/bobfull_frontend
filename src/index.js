import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { Provider } from 'react-redux'
import store from './store.js'
import {PersistGate} from "redux-persist/integration/react"
import {persistStore} from "redux-persist"

const root = ReactDOM.createRoot(document.getElementById('root'));
export let persistor = persistStore(store)

axios.defaults.headers.common["Authorization"] = localStorage.getItem("Authorization")

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);


axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
