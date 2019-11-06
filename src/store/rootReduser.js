import fReducer            from './home/reducers'
import { combineReducers } from "redux";

export default combineReducers({
    homeState: fReducer,
});
