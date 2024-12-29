import { createStore , combineReducers} from "redux";
import fruitReducer from "./fruitSection/fruitReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import albumReducer from "./albumSection/albumReducer";

const rootReducer = combineReducers({
    fruit: fruitReducer,
    album: albumReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk , logger));

export default store;