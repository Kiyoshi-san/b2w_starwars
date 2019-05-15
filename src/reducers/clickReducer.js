import { ACTIONS } from "../actions/actionTypes";

const initialState = {
    novoValorInput: ""
    // novoValorInput: "ATUALIZADO VIA REDUCER"
}

export const clickReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.CLICK_UPDATE_VALUE:
            return {
                ...state,
                novoValorInput: action.novoValorInput
            };
        default:
            return state;
    }
};