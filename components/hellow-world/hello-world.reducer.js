import { actionTypes, IUpdateGreetingAction } from './hello-world.actions';

export const initialHelloWorldState  = {
    greeting: " init"
}

export const helloWorld = (state  = initialHelloWorldState, action)  => {
    switch (action.type) {
        case actionTypes.UPDATE_GREETING:
            return Object.assign({}, state, {greeting: action.newGreeting});
        default:
            return state;
    }
}