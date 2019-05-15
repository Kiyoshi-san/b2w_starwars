import { ACTIONS } from './actionTypes';

export const atualizarValorInput = paramValorDoInput => ({
    type: ACTIONS.CLICK_UPDATE_VALUE,
    novoValorInput: paramValorDoInput
})

export const atualizarValorPlanet = value => ({
    type: ACTIONS.SET_PLANET,
    novoValorPlaneta: value
})