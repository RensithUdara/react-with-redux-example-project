import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import fruitReducer from "./fruitSection/fruitReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import albumReducer from "./albumSection/albumReducer";

const rootReducer = combineReducers({
    fruit: fruitReducer,
    album: albumReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)));

export default store;