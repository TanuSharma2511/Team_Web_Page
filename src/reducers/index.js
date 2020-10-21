import { combineReducers } from 'redux';
import openCloseReducer from './openCloseReducer';

export default combineReducers({
    openClose: openCloseReducer
});
