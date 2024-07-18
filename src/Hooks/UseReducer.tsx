    
import React, { useReducer } from 'react'

const inital = {
    count: 0
}

interface stateType {
    count: number
}
interface actionType {

    type: 'increment' | 'decrement'
}


const reducer = (state: stateType, action: actionType) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        default:
            return state
    }

}

function UseReducer() {
    interface userStateType {
        count: number
    }
    const [state, dispatch] = useReducer(reducer, inital)
    return (
        <div>
            <h3>{state.count}</h3>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        </div>
    )
}

export default UseReducer
