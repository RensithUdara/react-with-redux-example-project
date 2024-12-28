import { createStore , combineReducers} from "redux";
import fruitReducer from "./fruitSection/fruitReducer";

const rootReducer = combineReducers({
    fruit: fruitReducer,
});

const store = createStore(rootReducer);

export default store;