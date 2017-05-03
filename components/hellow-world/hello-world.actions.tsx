export const actionTypes = {
    UPDATE_GREETING: 'UPDATE_GREETING'
}

export interface IUpdateGreetingAction {
    type: string;
    newGreeting: string;
}

export const updateGreeting = (newGreeting) : IUpdateGreetingAction =>{
    return {
        type: actionTypes.UPDATE_GREETING,
        newGreeting
    }
}