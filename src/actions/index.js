import { ACTIONS } from './actionTypes';

export const clickButton = value => ({
    type: ACTIONS.CLICK_UPDATE_VALUE,
    novoValorInput: value
})