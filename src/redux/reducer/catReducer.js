const INITIAL_STATE = {
   cat: [],
};

export const catReducer = ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case "FETCH_CAT":
            return {
                ...state,
                cat: action.payload,
            }
        case "FETCH_CAT_CLEAR":
            return INITIAL_STATE;
        default:
            return state;
    };
};