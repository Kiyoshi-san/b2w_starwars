import { ACTIONS } from "../actions/actionTypes";

const initialStateInput = {
    novoValorInput: "",
    // novoValorInput: "ATUALIZADO VIA REDUCER"
}

const initialStatePlanet = {
    novoValorPlaneta: {
        climate: "",
        created: "",
        diameter: "",
        edited: "",
        films: [],
        gravity: "",
        name: "",
        orbital_period: "",
        population: "",
        residents: [],
        rotation_period: "",
        surface_water: "",
        terrain: "",
        url: ""
    }
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
            // alert(ACTIONS.SET_PLANET);
            /* console.log("a");
            console.log(action.novoValorPlaneta)
            console.log("b"); */
            return {
                ...state,
                novoValorPlaneta: action.novoValorPlaneta
            };
        default:
            return state;
    }
};