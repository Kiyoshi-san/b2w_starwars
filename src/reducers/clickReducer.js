import { ACTIONS } from "../actions/actionTypes";

const initialState = {
    newValue: ""
    // newValue: "ATUALIZADO VIA REDUCER"
}

export const clickReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.CLICK_UPDATE_VALUE:
            return {
                ...state,
                newValue: action.newValue
            };
        default:
            return state;
    }
};