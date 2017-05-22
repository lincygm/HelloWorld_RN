/**
 * Created by goumou on 2017/3/3.
 */
import { combineReducers } from 'redux';

import News from './newsReducer';
//var combineReducers = require('redux');

const rootReducer = combineReducers({
    News
});
export default rootReducer
