import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux';

import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {PersistGate} from 'redux-persist/integration/react';

import InputReducer from './store/reducer';

const persistConfig={
  key:'input',
  storage,
  whitelist:['input']
}

const rootReducer= combineReducers({
  input:InputReducer,
});

const pReducer = persistReducer(persistConfig, rootReducer);

const store=createStore(pReducer);

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


/* Local Storage */

/*const saveToLocalStorage=(state)=>{
  const dataState= JSON.stringify(state);
  localStorage.setItem('state', dataState);
}
const loadLocalstorage=()=>{
    const dataState = localStorage.getItem('state');
    if(dataState===null || dataState===undefined) return undefined; 
    if(dataState)return JSON.parse(dataState); 
}*/

//const dataFromLocalstore= loadLocalstorage()

//const store=createStore(rootReducer, dataFromLocalstore);

//store.subscribe(()=>saveToLocalStorage(store.getState()));