import { actionTypes, IUpdateGreetingAction } from './hello-world.actions';

export interface IHellowWorldState {
    greeting: string;
}

export const initialHelloWorldState : IHellowWorldState = {
    greeting: " init"
}

export const helloWorld = (state : IHellowWorldState = initialHelloWorldState, action : IUpdateGreetingAction)  => {
    switch (action.type) {
        case actionTypes.UPDATE_GREETING:
            return Object.assign({}, state, {greeting: action.newGreeting});
        default:
            return state;
    }
}