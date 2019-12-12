import {combineReducers} from 'redux';
import authReducer from './authReducer';
import {reducer as formReducer} from 'redux-form';
import {firestoreReducer} from 'redux-firestore'

export default combineReducers({
    auth:authReducer,
    form:formReducer,
    firestore:firestoreReducer
});