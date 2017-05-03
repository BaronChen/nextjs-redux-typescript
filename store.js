"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const hello_world_reducer_1 = require("./components/hellow-world/hello-world.reducer");
const redux_thunk_1 = require("redux-thunk");
const initialState = {
    helloWorld: hello_world_reducer_1.initialHelloWorldState
};
const reducers = redux_1.combineReducers({
    helloWorld: hello_world_reducer_1.helloWorld
});
exports.initStore = (state = initialState) => {
    return redux_1.createStore(reducers, state, redux_1.applyMiddleware(redux_thunk_1.default));
};
