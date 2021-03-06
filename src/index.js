import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import App from './ui/App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import reducer from './redux/reducer.js';

const reducers = {
    form: formReducer,
    reducer: reducer
};
const combinedReducers = combineReducers(reducers);
export const store = createStore(combinedReducers)

window.store = store

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
