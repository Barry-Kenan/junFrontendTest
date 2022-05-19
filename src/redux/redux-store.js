import {applyMiddleware, combineReducers, createStore} from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';
import contactsReducer from './contacts-reducer';
import appReducer from './app-reducer';



let reducers = combineReducers( {
    contacts: contactsReducer,
    app: appReducer,
    form: formReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;


export default store;