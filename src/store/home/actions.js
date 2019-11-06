import actions from './actionConst'

export const addValue = ( v ) => {
    return {
        type: actions.ADD_VALUE,
        payload: v || 1
    }
};

export const addValueAsync = ( value ) => ( dispatch ) => {
    setTimeout(()=>
        dispatch( addValue( value ) ),
        2000 )
};
