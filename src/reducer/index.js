import {combineReducers} from "redux";

import tableReducer from './table';
import treeReducer from './tree';

const appReducer = combineReducers(tableReducer,treeReducer)

export default appReducer;
