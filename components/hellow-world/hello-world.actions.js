export const actionTypes = {
    UPDATE_GREETING: 'UPDATE_GREETING'
}

export const updateGreeting = (newGreeting) =>{
    return {
        type: actionTypes.UPDATE_GREETING,
        newGreeting
    }
}