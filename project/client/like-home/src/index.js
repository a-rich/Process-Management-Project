import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Counter from './components/Counter';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css'
import { currentUser } from './store/reducers.js'
import C from './constants'
import appReducer from './store/reducers'
import { createStore } from 'redux'
import storeFactory from './store'
import { setcurrentuser, setSearchResults } from './actions'
import { Provider } from 'react-redux'
import { searchHotels } from './actions/Search';

const initialState = (localStorage['redux-store'])? JSON.parse(localStorage['redux-store']) : {}
const store = storeFactory(initialState)
window.React = React
window.store = store


ReactDOM.render(
  <Provider store={store}>
  <App/>
  </Provider>, document.getElementById('root')

);
registerServiceWorker();

const saveState = () => {
    const state = JSON.stringify(store.getState())
   localStorage['redux-store'] = state
 }
 const handleSearchUpdate = results => {
   store.dispatch(setSearchResults(results))
 }
 window.addEventListener("searchResults", handleSearchUpdate)
 store.subscribe(saveState)
