import actions         from './actionConst'

const defSate = {
    value: 1
};

export default  ( state = defSate, action ) => {
    switch( action.type ){
        case actions.ADD_VALUE:
        return {
            ...state, value: state.value + action.payload
        }
    }
    return state;
};

