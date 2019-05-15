import { ACTIONS } from "../actions/actionTypes";

const initialStateInput = {
    novoValorInput: "",
    // novoValorInput: "ATUALIZADO VIA REDUCER"
}

const initialStatePlanet = {
    novoValorPlaneta: {}
    // novoValorInput: "ATUALIZADO VIA REDUCER"
}

export const setaReducerStateInput = (state = initialStateInput, action) => {
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

export const setaReducerStatePlanet = (state = initialStatePlanet, action) => {
    switch (action.type) {
        case ACTIONS.SET_PLANET:
            return {
                ...state,
                novoValorPlaneta: action.novoValorPlaneta
            };
        default:
            return state;
    }
};