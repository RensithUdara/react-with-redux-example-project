import { createStore , combineReducers} from "redux";
import fruitReducer from "./fruitSection/fruitReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
    fruit: fruitReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk , logger));

export default store;