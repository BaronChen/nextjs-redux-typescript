import { createStore, applyMiddleware, combineReducers } from 'redux';
import { initialHelloWorldState, helloWorld } from './components/hellow-world/hello-world.reducer';
import thunkMiddleware from 'redux-thunk';

const initialState = {
    helloWorld: initialHelloWorldState
};

const reducers = combineReducers({
    helloWorld
});

export const initStore = (state = initialState) => {
    return createStore(reducers, state, applyMiddleware(thunkMiddleware));
}