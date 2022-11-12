import {createStore, combineReducers, applyMiddleware} from 'redux';
import {todosReducer} from "./todosReducer";
import {panelReducer} from "./panelState";

const rootReducer = combineReducers({
    todos: todosReducer,
    panel: panelReducer,
})

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;


