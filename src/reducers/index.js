import { combineReducers } from 'redux';

import appReducers from './appReducers'
// import componentReducers from './componentReducers';

const rootReducer = combineReducers({
    appReducers
});
export default rootReducer;
