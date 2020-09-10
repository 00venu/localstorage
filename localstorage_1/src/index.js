import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux';

import InputReducer from './store/reducer';

const saveToLocalStorage=(state)=>{
  const dataState= JSON.stringify(state);
  localStorage.setItem('state', dataState);
}

const loadLocalstorage=()=>{
    const dataState = localStorage.getItem('state');
    if(dataState===null || dataState===undefined) return undefined; 
    if(dataState)return JSON.parse(dataState); 
}

const dataFromLocalstore= loadLocalstorage()

const rootReducer= combineReducers({
  input:InputReducer,
});
const store=createStore(rootReducer, dataFromLocalstore);

store.subscribe(()=>saveToLocalStorage(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
